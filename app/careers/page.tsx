import { getJobs } from "@/lib/notion";
import JobCard from "@/components/careers/JobCard";
import { Briefcase } from "lucide-react";

export const metadata = {
  title: "Careers — Maple Health Solutions",
  description:
    "Join our team of compassionate healthcare professionals. View open positions at Maple Health Solutions.",
};

export default async function CareersPage() {
  const jobs = await getJobs();

  return (
    <>
      {/* Hero */}
      <section className="bg-sage py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-fern">
            <Briefcase className="text-green" size={24} aria-hidden="true" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4 leading-tight">
            Join Our Team
          </h1>
          <p className="text-text-body text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;re looking for compassionate, dedicated healthcare professionals to
            help us deliver exceptional care to long-term care homes and retirement homes
            across the region.
          </p>
        </div>
      </section>

      {/* Listings */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {jobs.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl font-semibold text-navy mb-2">
                No open positions right now
              </p>
              <p className="text-text-muted text-sm">
                Check back soon — new roles are added regularly.
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm text-text-muted mb-8">
                {jobs.length} open {jobs.length === 1 ? "position" : "positions"}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {jobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
