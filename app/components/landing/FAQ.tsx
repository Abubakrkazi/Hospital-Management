import { useState } from "react";
import { ChevronDown } from "lucide-react";

import {
  Card,
  Container,
  SectionHeading,
} from "../common";

const faqs = [
  {
    question: "What is an AI-powered Hospital Management System?",
    answer:
      "Our platform uses Artificial Intelligence to streamline hospital operations, improve patient care, automate workflows, and provide real-time healthcare insights.",
  },
  {
    question: "Is patient data secure?",
    answer:
      "Yes. We follow modern security standards with encrypted communication, role-based access control, and secure data storage to protect medical records.",
  },
  {
    question: "Can multiple hospitals use the same platform?",
    answer:
      "Absolutely. The system is designed for multi-hospital and multi-branch management with centralized administration.",
  },
  {
    question: "Does it support online appointments?",
    answer:
      "Yes. Patients can book appointments online, receive reminders, and doctors can manage their schedules from the dashboard.",
  },
  {
    question: "Can AI assist doctors during diagnosis?",
    answer:
      "Yes. AI provides clinical decision support by analyzing symptoms and medical data, helping doctors make faster and more informed decisions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <Container size="md">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Everything You Need To Know"
          description="Find answers to the most common questions about our AI-powered hospital management platform."
        />

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <Card
                key={faq.question}
                className="overflow-hidden p-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-slate-50"
                >
                  <span className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={22}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-600" : "text-slate-500"
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-8 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}