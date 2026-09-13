import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section id="home" className="bg-white py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Accent badge */}
          <Badge variant="active" className="mb-6">
            Now Accepting New Patients
          </Badge>

          {/* Accent rule */}
          <div className="mb-6 h-[3px] w-10 bg-green rounded-full" />

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight tracking-tight mb-6">
            Your Health,{" "}
            <span className="text-green">Our Priority.</span>
          </h1>

          <p className="text-lg sm:text-xl text-text-body leading-relaxed mb-10 max-w-2xl">
            Maple Health Solutions provides compassionate, comprehensive primary care
            for individuals and families. From routine check-ups to chronic disease
            management, our dedicated team is here for every step of your health journey.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="#contact">Book a Visit</a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#services">Explore Services</a>
            </Button>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl">
            {[
              { value: "15+", label: "Years of Experience" },
              { value: "5,000+", label: "Patients Served" },
              { value: "6", label: "Specialized Services" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-green">{stat.value}</p>
                <p className="text-sm text-text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
