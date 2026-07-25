import {
  Brain,
  Hospital,
  Stethoscope,
  Users,
} from "lucide-react";

import {
  Badge,
  Card,
  Container,
  SectionHeading,
} from "../common";

const statistics = [
  {
    icon: Hospital,
    value: "150+",
    title: "Hospitals",
    description: "Hospitals connected with our platform",
  },
  {
    icon: Stethoscope,
    value: "2,500+",
    title: "Doctors",
    description: "Verified healthcare professionals",
  },
  {
    icon: Users,
    value: "1M+",
    title: "Patients",
    description: "Successfully managed patient records",
  },
  {
    icon: Brain,
    value: "99.8%",
    title: "AI Accuracy",
    description: "Clinical decision support accuracy",
  },
];

export default function Statistics() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 py-24">
      <Container>
        <SectionHeading
          badge="Trusted Worldwide"
          title="Healthcare By The Numbers"
          description="Thousands of healthcare professionals trust our AI-powered hospital management platform every day."
          className="text-white"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {statistics.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                variant="glass"
                hover
                padding="lg"
                className="text-center"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-600">
                  <Icon size={30} />
                </div>

                <h3 className="text-4xl font-bold text-white">
                  {item.value}
                </h3>

                <p className="mt-3 text-xl font-semibold text-white">
                  {item.title}
                </p>

                <p className="mt-3 leading-7 text-blue-100">
                  {item.description}
                </p>

                <div className="mt-6">
                  <Badge variant="info">
                    Live Statistics
                  </Badge>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}