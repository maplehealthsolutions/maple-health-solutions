import Link from "next/link";
// import { Button } from "@/components/ui/button";

const hashLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

const linkClassName =
  "text-sm font-medium text-navy hover:text-green transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-green hover:after:w-full after:transition-all";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold text-navy group-hover:text-green transition-colors">
              Maple Health Solutions
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {hashLinks.map((link) => (
              <a key={link.href} href={link.href} className={linkClassName}>
                {link.label}
              </a>
            ))}
            <Link href="/careers" className={linkClassName}>
              Careers
            </Link>
          </nav>

          {/* CTA */}
          {/* <Button asChild size="sm">
            <a href="#contact">Book a Visit</a>
          </Button> */}
        </div>
      </div>
    </header>
  );
}
