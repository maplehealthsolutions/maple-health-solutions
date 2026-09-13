import {
  Stethoscope,
  ClipboardList,
  Heart,
  Shield,
  Users,
  Brain,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Stethoscope,
    title: "Family Medicine",
    description:
      "Comprehensive primary care for every member of your family. Annual physicals, vaccinations, minor procedures, and ongoing health management — all under one roof.",
  },
  {
    icon: ClipboardList,
    title: "Walk-In Clinic",
    description:
      "No appointment needed. Our walk-in clinic handles acute illnesses, minor injuries, prescription renewals, and lab requisitions on the same day.",
  },
  {
    icon: Heart,
    title: "Chronic Disease Management",
    description:
      "Structured support for diabetes, hypertension, asthma, and other long-term conditions, with personalized care plans and regular monitoring.",
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description:
      "Proactive screenings, lifestyle counselling, and immunisation programs designed to catch problems early and keep you at your healthiest.",
  },
  {
    icon: Users,
    title: "Women's Health",
    description:
      "Dedicated care across all life stages — from adolescence through menopause — including Pap tests, pregnancy care, and hormonal health consultations.",
  },
  {
    icon: Brain,
    title: "Mental Health Support",
    description:
      "Confidential assessment and counselling for anxiety, depression, stress, and more. We connect you with in-house therapists and community resources.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-steel py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="mx-auto mb-4 h-[3px] w-10 bg-green rounded-full" />
          <h2 className="text-3xl sm:text-4xl font-bold text-green mb-4">
            Our Services
          </h2>
          <p className="text-text-body max-w-xl mx-auto">
            From your first visit to ongoing care, we offer the full spectrum of
            primary health services your family needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} variant="fern">
                <CardHeader>
                  <Icon
                    className="text-green mb-3"
                    size={28}
                    aria-hidden="true"
                  />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text-body leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
