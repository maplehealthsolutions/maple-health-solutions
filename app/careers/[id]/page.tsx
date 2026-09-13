import { notFound } from "next/navigation";
import Link from "next/link";
import { getJob } from "@/lib/notion";
import NotionRenderer from "@/components/careers/NotionRenderer";
import ApplicationForm from "@/components/careers/ApplicationForm";
import { ArrowLeft, MapPin, Briefcase, Building2, DollarSign } from "lucide-react";

export const revalidate = 60; // revalidate this page at most once every 60 seconds
// export const dynamic = "force-dynamic";

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = await getJob(id);

  if (!job) notFound();

  return (
    <div className="bg-white min-h-screen">
      {/* Top bar */}
      <div className="bg-sage border-b border-border">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 py-4">
          <Link
            href="/careers"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-green hover:text-green-dark transition-colors"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            View all positions
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="lg:grid lg:grid-cols-3 lg:gap-16">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8">
              {job.department && (
                <p className="text-sm font-medium text-text-muted uppercase tracking-wide mb-2">
                  {job.department}
                </p>
              )}
              <h1 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-4">
                {job.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-text-body">
                {job.location && (
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-text-muted" aria-hidden="true" />
                    {job.location}
                  </span>
                )}
                {job.employmentType && (
                  <span className="flex items-center gap-1.5">
                    <Briefcase size={14} className="text-text-muted" aria-hidden="true" />
                    {job.employmentType}
                  </span>
                )}
                {job.department && (
                  <span className="flex items-center gap-1.5">
                    <Building2 size={14} className="text-text-muted" aria-hidden="true" />
                    {job.department}
                  </span>
                )}
                {job.salaryRange && (
                  <span className="flex items-center gap-1.5">
                    <DollarSign size={14} className="text-text-muted" aria-hidden="true" />
                    {job.salaryRange}
                  </span>
                )}
              </div>
            </div>

            <hr className="border-border mb-8" />

            {/* Description: blocks (page content) take priority, fall back to property */}
            {job.blocks.length > 0 ? (
              <NotionRenderer blocks={job.blocks} />
            ) : job.description ? (
              <div className="space-y-4">
                {job.description.split(/\n\n+/).map((para, i) => (
                  <p key={i} className="text-text-body leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            ) : (
              <p className="text-text-muted italic">No description provided.</p>
            )}
          </div>

          {/* Sidebar — Apply form */}
          <div className="mt-12 lg:mt-0">
            <div className="sticky top-24">
              <div className="bg-white border border-border rounded-2xl p-6">
                <h2 className="text-lg font-semibold text-navy mb-1">
                  Apply for this position
                </h2>
                <p className="text-sm text-text-muted mb-6">
                  {job.title}
                </p>
                <ApplicationForm jobTitle={job.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
