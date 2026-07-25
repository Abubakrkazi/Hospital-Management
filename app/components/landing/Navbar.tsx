import { useState } from "react";
import { Link } from "react-router";
import { Menu, X, HeartPulse, Search } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Doctors", path: "/doctors" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="rounded-xl bg-blue-600 p-2 text-white">
            <HeartPulse size={24} />
          </div>

          <span className="text-xl font-bold text-gray-900">
            Medi<span className="text-blue-600">AI</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-medium text-gray-700 transition hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}

          {/* Search */}
          <div className="flex items-center rounded-lg border bg-gray-50 px-3 py-2">
            <Search size={18} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search..."
              className="ml-2 w-32 bg-transparent text-sm text-black placeholder:text-gray-500 outline-none"
            />
          </div>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="rounded-lg border border-blue-600 px-5 py-2 text-blue-600 transition hover:bg-blue-50"
          >
            Login
          </Link>

          <Link
            to="/dashboard"
            className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
          >
            Dashboard
          </Link>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="font-medium text-gray-700"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/login"
              className="rounded-lg border border-blue-600 px-5 py-2 text-center text-blue-600"
            >
              Login
            </Link>

            <Link
              to="/dashboard"
              className="rounded-lg bg-blue-600 px-5 py-2 text-center text-white"
            >
              Dashboard
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
