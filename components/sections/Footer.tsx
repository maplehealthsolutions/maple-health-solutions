export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-white mb-3">
              Maple Health Solutions
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              Compassionate primary care for individuals and families in Ottawa
              and the surrounding area.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Quick Links
            </p>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/#home" },
                { label: "About Us", href: "/#about" },
                { label: "Services", href: "/#services" },
                { label: "Contact Us", href: "/#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact summary */}
          <div>
            <p className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Get in Touch
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>123 Maple Avenue, Suite 200</li>
              <li>Ottawa, ON  K1A 0A6</li>
              <li className="pt-1">
                <a href="tel:+16135550100" className="hover:text-white transition-colors">
                  +1 (613) 555-0100
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mt-10 pt-8 border-t"
          style={{ borderColor: "rgba(255,255,255,0.2)" }}
        >
          <p className="text-sm text-white/50 text-center">
            &copy; {year} Maple Health Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
