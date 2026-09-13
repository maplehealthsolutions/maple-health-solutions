import Link from "next/link";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="flex-1 bg-sage flex items-center justify-center py-28 px-4">
        <div className="text-center max-w-md">
          <div className="mb-4 h-[3px] w-10 bg-green rounded-full mx-auto" />
          <p className="text-7xl font-bold text-green mb-4">404</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-navy mb-4 leading-tight">
            Page Not Found
          </h1>
          <p className="text-text-body leading-relaxed mb-8">
            The page you&apos;re looking for doesn&apos;t exist or may have been
            moved. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-green text-white font-medium px-6 py-2.5 text-sm hover:bg-green-dark transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center justify-center rounded-md border border-green text-green font-medium px-6 py-2.5 text-sm hover:bg-fern transition-colors"
            >
              View Careers
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
