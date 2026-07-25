import {
  HeartPulse,
  Facebook,
  Github,
  Linkedin,
  Twitter,
  Send,
} from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">

            <Link
              to="/"
              className="flex items-center gap-3"
            >
              <div className="rounded-xl bg-blue-600 p-3 text-white">
                <HeartPulse size={26} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  Medi<span className="text-blue-500">AI</span>
                </h2>

                <p className="text-sm text-slate-400">
                  AI Hospital Management System
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md leading-7 text-slate-400">
              Modern AI-powered hospital management platform designed
              to simplify healthcare operations, improve patient care,
              and empower medical professionals.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="rounded-xl bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <Facebook size={20} />
              </a>

              <a
                href="#"
                className="rounded-xl bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <Github size={20} />
              </a>

              <a
                href="#"
                className="rounded-xl bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="#"
                className="rounded-xl bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <Twitter size={20} />
              </a>

            </div>

          </div>

          {/* Company */}
          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Company
            </h3>

            <div className="space-y-3">

              <Link to="/about" className="block hover:text-white">
                About
              </Link>

              <Link to="/careers" className="block hover:text-white">
                Careers
              </Link>

              <Link to="/blog" className="block hover:text-white">
                Blog
              </Link>

              <Link to="/contact" className="block hover:text-white">
                Contact
              </Link>

            </div>

          </div>

          {/* Product */}
          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Product
            </h3>

            <div className="space-y-3">

              <Link to="/features" className="block hover:text-white">
                Features
              </Link>

              <Link to="/pricing" className="block hover:text-white">
                Pricing
              </Link>

              <Link to="/security" className="block hover:text-white">
                Security
              </Link>

              <Link to="/api" className="block hover:text-white">
                API
              </Link>

            </div>

          </div>

          {/* Newsletter */}
          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Stay Updated
            </h3>

            <p className="mb-5 text-sm text-slate-400">
              Subscribe to receive healthcare technology updates.
            </p>

            <div className="flex">

              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-l-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
              />

              <button className="rounded-r-xl bg-blue-600 px-5 transition hover:bg-blue-700">
                <Send size={18} />
              </button>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-slate-800 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-sm text-slate-500">
              © 2026 MediAI. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">

              <Link to="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>

              <Link to="/terms" className="hover:text-white">
                Terms of Service
              </Link>

              <Link to="/cookies" className="hover:text-white">
                Cookie Policy
              </Link>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}