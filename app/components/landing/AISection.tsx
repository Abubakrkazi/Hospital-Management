import {
  Activity,
  ArrowRight,
  Brain,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import {
  Badge,
  Button,
  Card,
  Container,
} from "../common";

export default function AISection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <Badge>AI Healthcare Platform</Badge>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Artificial Intelligence For
              <span className="block text-blue-600">
                Smarter Healthcare
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Improve patient care, automate hospital operations, reduce
              waiting time, and help doctors make faster, data-driven clinical
              decisions using Artificial Intelligence.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                  <Brain size={24} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    AI Diagnosis Assistance
                  </h3>

                  <p className="mt-1 text-slate-600">
                    Assist doctors with intelligent diagnosis suggestions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-green-100 p-3 text-green-600">
                  <Activity size={24} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Real-Time Monitoring
                  </h3>

                  <p className="mt-1 text-slate-600">
                    Monitor patients and hospital activities instantly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
                  <ShieldCheck size={24} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Secure Healthcare Data
                  </h3>

                  <p className="mt-1 text-slate-600">
                    Enterprise-grade protection for every medical record.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button
                size="lg"
                rightIcon={<ArrowRight size={18} />}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Dashboard */}
          <Card
            variant="elevated"
            padding="lg"
            className="relative"
          >
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">
                AI Dashboard
              </h3>

              <Badge variant="success">
                Online
              </Badge>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl bg-blue-50 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">
                      Today's Patients
                    </p>

                    <h2 className="mt-1 text-3xl font-bold text-slate-900">
                      248
                    </h2>
                  </div>

                  <Activity
                    size={36}
                    className="text-blue-600"
                  />
                </div>
              </div>

              <div className="rounded-2xl bg-green-50 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">
                      AI Diagnosis Accuracy
                    </p>

                    <h2 className="mt-1 text-3xl font-bold text-slate-900">
                      98.7%
                    </h2>
                  </div>

                  <Brain
                    size={36}
                    className="text-green-600"
                  />
                </div>
              </div>

              <div className="rounded-2xl bg-purple-50 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">
                      Active Doctors
                    </p>

                    <h2 className="mt-1 text-3xl font-bold text-slate-900">
                      126
                    </h2>
                  </div>

                  <Stethoscope
                    size={36}
                    className="text-purple-600"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}