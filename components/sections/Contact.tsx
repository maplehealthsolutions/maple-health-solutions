import { MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    lines: ["London, ON"],
  },
  {
    icon: Phone,
    label: "Phone & Fax",
    lines: ["Phone: +1 (519) 729-6644"],
  },
  // {
  //   icon: Clock,
  //   label: "Hours",
  //   lines: [
  //     "Mon – Fri: 8:00 am – 6:00 pm",
  //     "Saturday:  9:00 am – 2:00 pm",
  //     "Sunday:    Closed",
  //   ],
  // },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-sage py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <div className="mb-4 h-[3px] w-10 bg-green rounded-full" />
          <h2 className="text-3xl sm:text-4xl font-bold text-green mb-4">
            Contact Us
          </h2>
          <p className="text-text-body max-w-lg">
            Have a question or want to book an appointment? Fill out the form
            and we will get back to you, or reach us directly using the
            information below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Contact details */}
          <div className="space-y-8">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <div key={detail.label} className="flex items-start gap-4">
                  <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-fern text-green">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy mb-1">
                      {detail.label}
                    </p>
                    {detail.lines.map((line) => (
                      <p key={line} className="text-sm text-text-body leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Form card */}
          <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-navy mb-6">
              Send us a message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
