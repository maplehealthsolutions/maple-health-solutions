import Link from "next/link";
import type { Job } from "@/lib/notion";
import { MapPin, Briefcase, Building2, ArrowRight } from "lucide-react";

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="bg-white border border-border rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
      <div>
        <p className="text-xs font-medium text-text-muted uppercase tracking-wide mb-1">
          {job.department}
        </p>
        <h3 className="text-lg font-semibold text-green leading-snug">{job.title}</h3>
      </div>

      <div className="flex flex-col gap-1.5">
        {job.location && (
          <div className="flex items-center gap-2 text-sm text-text-body">
            <MapPin size={14} className="text-text-muted shrink-0" aria-hidden="true" />
            {job.location}
          </div>
        )}
        {job.employmentType && (
          <div className="flex items-center gap-2 text-sm text-text-body">
            <Briefcase size={14} className="text-text-muted shrink-0" aria-hidden="true" />
            {job.employmentType}
          </div>
        )}
        {job.department && (
          <div className="flex items-center gap-2 text-sm text-text-body">
            <Building2 size={14} className="text-text-muted shrink-0" aria-hidden="true" />
            {job.department}
          </div>
        )}
      </div>

      <div className="mt-auto pt-2">
        <Link
          href={`/careers/${job.id}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-green hover:text-green-dark transition-colors"
        >
          View Position
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
