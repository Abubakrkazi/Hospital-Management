import {
  CircleCheckBig,
  Quote,
  Star,
} from "lucide-react";

import {
  Card,
  Container,
  SectionHeading,
} from "../common";

const testimonials = [
  {
    name: "Dr. Sarah Ahmed",
    role: "Chief Medical Officer",
    hospital: "Dhaka Medical Center",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80",
    review:
      "The AI-powered workflow has significantly reduced appointment delays and improved our patient management process.",
    rating: 5,
  },
  {
    name: "Dr. Michael Lee",
    role: "Senior Cardiologist",
    hospital: "Global Heart Hospital",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80",
    review:
      "A modern healthcare platform with an intuitive dashboard. It has transformed how our team collaborates.",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    role: "Patient",
    hospital: "New York",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
    review:
      "Booking appointments, accessing reports, and communicating with doctors has never been this easy.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionHeading
          badge="Testimonials"
          title="Trusted By Healthcare Professionals"
          description="Thousands of hospitals, doctors, and patients rely on our AI-powered hospital management platform every day."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card
              key={item.name}
              hover
              padding="lg"
              className="group"
            >
              <Quote
                size={48}
                className="mb-6 text-blue-600 opacity-20"
              />

              <p className="leading-8 text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-6 flex gap-1">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-full object-cover ring-4 ring-blue-100"
                />

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-slate-900">
                      {item.name}
                    </h3>

                    <CircleCheckBig
                      size={18}
                      className="text-blue-600"
                    />
                  </div>

                  <p className="text-sm text-slate-500">
                    {item.role}
                  </p>

                  <p className="text-sm font-medium text-blue-600">
                    {item.hospital}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}