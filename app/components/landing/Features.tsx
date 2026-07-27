import { FEATURES } from "@/constants/features";

import {
  Card,
  Container,
  SectionHeading,
} from "../common";

export default function Features() {
  return (
    <section className="bg-background py-24">
      <Container>
        <SectionHeading
          badge="Our Features"
          title="Everything You Need For A Smart Hospital"
          description="A complete AI-powered healthcare solution to improve hospital management and patient experience."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                hover
                className="group rounded-2xl border border-border/60 bg-background/70 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-semibold tracking-tight">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {feature.description}
                </p>

                <button
                  className="mt-6 inline-flex items-center text-sm font-medium text-primary transition-all duration-300 group-hover:translate-x-1"
                >
                  Learn More →
                </button>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}