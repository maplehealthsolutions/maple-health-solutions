import { Client } from "@notionhq/client";
import type {
  BlockObjectResponse,
  PageObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
}

export interface JobDetail extends Job {
  description: string;
  salaryRange: string;
  blocks: BlockObjectResponse[];
}

function getNotionClient() {
  const auth = process.env.NOTION_API_KEY;
  if (!auth) throw new Error("Missing NOTION_API_KEY environment variable");
  return new Client({ auth });
}

function requireDatabaseId() {
  const id = process.env.NOTION_DATABASE_ID;
  if (!id) throw new Error("Missing NOTION_DATABASE_ID environment variable");
  return id;
}

function richTextToString(richText: RichTextItemResponse[]): string {
  return richText.map((t) => t.plain_text).join("");
}

function pageToJob(page: PageObjectResponse): Job {
  const props = page.properties;

  const titleProp = props["Job Title"] ?? props["Name"];
  const title =
    titleProp?.type === "title" ? richTextToString(titleProp.title) : "Untitled";

  const departmentProp = props["Department"];
  const department =
    departmentProp?.type === "select" ? (departmentProp.select?.name ?? "") : "";

  const locationProp = props["Location"];
  const location =
    locationProp?.type === "rich_text" ? richTextToString(locationProp.rich_text) : "";

  const typeProp = props["Employment Type"];
  const employmentType =
    typeProp?.type === "select" ? (typeProp.select?.name ?? "") : "";

  return { id: page.id, title, department, location, employmentType };
}

export async function getJobs(): Promise<Job[]> {
  const notion = getNotionClient();
  const databaseId = requireDatabaseId();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response = await (notion.databases as any).query({
    database_id: databaseId,
    filter: {
      property: "Status",
      status: { equals: "Active" },
    },
  });

  return (response.results as PageObjectResponse[])
    .filter((page) => page.object === "page")
    .map((page) => pageToJob(page));
}

export async function getJob(id: string): Promise<JobDetail | null> {
  const notion = getNotionClient();

  try {
    const page = await notion.pages.retrieve({ page_id: id });
    if (page.object !== "page") return null;

    const pageObj = page as PageObjectResponse;
    const props = pageObj.properties;

    // Status property is type "status", not "select"
    const statusProp = props["Status"];
    const statusName =
      statusProp?.type === "status" ? (statusProp.status?.name ?? "") : "";
    if (statusName !== "Active") return null;

    const descProp = props["Job Description"];
    const description =
      descProp?.type === "rich_text" ? richTextToString(descProp.rich_text) : "";

    const salaryProp = props["Salary Range"];
    const salaryRange =
      salaryProp?.type === "rich_text" ? richTextToString(salaryProp.rich_text) : "";

    const blocksResponse = await notion.blocks.children.list({ block_id: id });
    const blocks = blocksResponse.results.filter(
      (b): b is BlockObjectResponse => "type" in b
    );

    return { ...pageToJob(pageObj), description, salaryRange, blocks };
  } catch {
    return null;
  }
}
