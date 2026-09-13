import { CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Personal Support Workers (PSWs)",
    description:
      "Compassionate, trained PSWs who provide essential support for daily living activities such as personal hygiene, mobility assistance, and companionship.",
  },
  {
    title: "Registered Nurses (RNs)",
    description:
      "Experienced RNs equipped to handle complex care needs, including administering medications, monitoring vital signs, and delivering specialized care.",
  },
];

const coreValues = [
  {
    name: "Compassion",
    description:
      "We believe in treating every resident with kindness and empathy, ensuring they feel respected and cared for.",
  },
  {
    name: "Excellence",
    description:
      "We strive for the highest standards in care and service, ensuring that our staff members are well-trained, professional, and reliable.",
  },
  {
    name: "Integrity",
    description:
      "Honesty, transparency, and accountability are the foundation of our work, both with our clients and our staff.",
  },
  {
    name: "Reliability",
    description:
      "We provide consistent and dependable staffing solutions, ensuring that long-term care facilities always have the right staff at the right time.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-sage py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Copy */}
          <div>
            <div className="mb-4 h-[3px] w-10 bg-green rounded-full" />
            <h2 className="text-3xl sm:text-4xl font-bold text-green mb-6 leading-tight">
              Welcome to Maple Health Solution
            </h2>
            <p className="text-text-body leading-relaxed mb-4">
              At Maple Health Solution, we are dedicated to providing exceptional
              healthcare staffing services that meet the unique needs of long-term care
              homes and retirement homes. We understand the importance of compassionate,
              skilled, and professional healthcare staff, which is why we specialize in
              providing top-tier Personal Support Workers (PSWs) and Registered Nurses
              (RNs) to facilities across the region.
            </p>
            <p className="text-text-body leading-relaxed mb-4">
              Our mission is to ensure that every resident receives the highest standard
              of care, with a focus on their well-being, dignity, and comfort. Whether
              it&apos;s assisting with daily living activities, offering personalized
              medical care, or providing emotional support, our team is trained to
              deliver care that feels like family.
            </p>
            <p className="text-text-body leading-relaxed">
              We are more than just a staffing agency; we are a partner in your
              facility&apos;s success. Whether you&apos;re looking for short-term
              assistance or long-term staffing solutions, we are here to support your
              team and ensure that your residents receive the care they deserve.
            </p>
          </div>

          {/* What We Do card */}
          <div className="bg-white rounded-2xl border border-border p-8">
            <h3 className="text-xl font-semibold text-navy mb-6">What We Do</h3>
            <p className="text-text-body text-sm leading-relaxed mb-6">
              Maple Health Solution is committed to matching healthcare professionals
              with facilities that need their expertise. We work closely with long-term
              care homes, retirement homes, and other healthcare organizations to deliver
              dependable, qualified staff.
            </p>
            <ul className="space-y-5">
              {services.map((service) => (
                <li key={service.title} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-green"
                    size={20}
                    aria-hidden="true"
                  />
                  <span className="text-text-body text-sm leading-relaxed">
                    <span className="font-semibold text-navy">{service.title}:</span>{" "}
                    {service.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-navy text-center mb-10">
            Our Core Values
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value) => (
              <div
                key={value.name}
                className="bg-white border border-border rounded-xl p-6"
              >
                <p className="text-green font-semibold mb-2">{value.name}</p>
                <p className="text-text-body text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
