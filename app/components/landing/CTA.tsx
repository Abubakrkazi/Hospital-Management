import {
  ArrowRight,
  CalendarPlus,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router";

import {
  Button,
  Card,
  Container,
} from "../common";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 py-24">
      {/* Background Effects */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

      <Container>
        <Card
          variant="glass"
          padding="xl"
          className="relative overflow-hidden text-center"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-lg">
            <Sparkles size={30} />
          </div>

          <h2 className="mt-8 text-4xl font-bold text-white md:text-5xl">
            Ready To Transform Your Hospital?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Join the next generation of healthcare with our AI-powered Hospital
            Management System. Improve patient care, automate operations, and
            empower your medical team with intelligent technology.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/register">
              <Button
                size="lg"
                rightIcon={<ArrowRight size={18} />}
              >
                Get Started Free
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                leftIcon={<CalendarPlus size={18} />}
              >
                Book a Demo
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm font-medium text-blue-100">
            <span>✓ No Credit Card Required</span>
            <span>✓ Enterprise Security</span>
            <span>✓ 24/7 Support</span>
            <span>✓ AI Powered</span>
          </div>
        </Card>
      </Container>
    </section>
  );
}