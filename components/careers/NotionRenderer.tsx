import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

function renderRichText(richText: RichTextItemResponse[]): React.ReactNode {
  return richText.map((item, i) => {
    let node: React.ReactNode = item.plain_text;
    if (item.annotations.bold) node = <strong key={i}>{node}</strong>;
    if (item.annotations.italic) node = <em key={i}>{node}</em>;
    if (item.annotations.code)
      node = (
        <code key={i} className="bg-sage rounded px-1 py-0.5 text-sm font-mono">
          {node}
        </code>
      );
    return <span key={i}>{node}</span>;
  });
}

export default function NotionRenderer({
  blocks,
}: {
  blocks: BlockObjectResponse[];
}) {
  const nodes: React.ReactNode[] = [];
  let listBuffer: { type: "bulleted" | "numbered"; items: React.ReactNode[] } | null =
    null;

  function flushList() {
    if (!listBuffer) return;
    if (listBuffer.type === "bulleted") {
      nodes.push(
        <ul key={`list-${nodes.length}`} className="list-disc list-outside pl-5 space-y-1 text-text-body leading-relaxed mb-4">
          {listBuffer.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    } else {
      nodes.push(
        <ol key={`list-${nodes.length}`} className="list-decimal list-outside pl-5 space-y-1 text-text-body leading-relaxed mb-4">
          {listBuffer.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );
    }
    listBuffer = null;
  }

  for (const block of blocks) {
    switch (block.type) {
      case "bulleted_list_item": {
        const content = renderRichText(block.bulleted_list_item.rich_text);
        if (listBuffer?.type !== "bulleted") {
          flushList();
          listBuffer = { type: "bulleted", items: [] };
        }
        listBuffer.items.push(content);
        break;
      }
      case "numbered_list_item": {
        const content = renderRichText(block.numbered_list_item.rich_text);
        if (listBuffer?.type !== "numbered") {
          flushList();
          listBuffer = { type: "numbered", items: [] };
        }
        listBuffer.items.push(content);
        break;
      }
      default: {
        flushList();
        switch (block.type) {
          case "heading_1":
            nodes.push(
              <h2 key={block.id} className="text-2xl font-bold text-navy mt-8 mb-3">
                {renderRichText(block.heading_1.rich_text)}
              </h2>
            );
            break;
          case "heading_2":
            nodes.push(
              <h3 key={block.id} className="text-xl font-semibold text-navy mt-6 mb-2">
                {renderRichText(block.heading_2.rich_text)}
              </h3>
            );
            break;
          case "heading_3":
            nodes.push(
              <h4 key={block.id} className="text-base font-semibold text-navy mt-4 mb-1">
                {renderRichText(block.heading_3.rich_text)}
              </h4>
            );
            break;
          case "paragraph": {
            const text = block.paragraph.rich_text;
            if (text.length === 0) {
              nodes.push(<div key={block.id} className="h-3" />);
            } else {
              nodes.push(
                <p key={block.id} className="text-text-body leading-relaxed mb-4">
                  {renderRichText(text)}
                </p>
              );
            }
            break;
          }
          case "divider":
            nodes.push(
              <hr key={block.id} className="border-border my-6" />
            );
            break;
          default:
            break;
        }
      }
    }
  }

  flushList();

  return <div>{nodes}</div>;
}
