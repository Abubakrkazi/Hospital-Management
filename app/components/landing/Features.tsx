import {
  UserRound,
  Stethoscope,
  CalendarCheck,
  ShieldCheck,
} from "lucide-react";

import {
  Card,
  Container,
  SectionHeading,
} from "../common";

const features = [
  {
    icon: UserRound,
    title: "Smart Patient Management",
    description:
      "Manage patient profiles, medical history and healthcare records securely.",
  },
  {
    icon: Stethoscope,
    title: "Doctor Management",
    description:
      "Connect doctors with patients and manage healthcare operations easily.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment System",
    description:
      "Schedule appointments and reduce waiting time with smart automation.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Medical Data",
    description:
      "Protect sensitive healthcare information with secure data management.",
  },
];

export default function Features() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <SectionHeading
          badge="Our Features"
          title="Everything You Need For A Smart Hospital"
          description="A complete AI-powered healthcare solution to improve hospital management and patient experience."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                hover
                className="group"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}