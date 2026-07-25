import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ScrollProgress from "@/components/layout/ScrollProgress";
import ScrollToTop from "@/components/layout/ScrollToTop";

import type { Route } from "./+types/root";

import "./app.css";

import { TooltipProvider } from "./components/ui/tooltip";
import { ThemeProvider } from "./components/provider/theme";
import ToastProvider from "./components/provider/toast";

const queryClient = new QueryClient();

export const links: Route.LinksFunction = () => [
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <Meta />
        <Links />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const storageKey = "vite-ui-theme";
                  const theme =
                    localStorage.getItem(storageKey) || "system";

                  const prefersDark =
                    window.matchMedia("(prefers-color-scheme: dark)").matches;

                  const root = document.documentElement;

                  root.classList.remove("light", "dark");

                  if (
                    theme === "dark" ||
                    (theme === "system" && prefersDark)
                  ) {
                    root.classList.add("dark");
                  } else {
                    root.classList.add("light");
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>

      <body className="antialiased">
        <ThemeProvider
          defaultTheme="system"
          storageKey="vite-ui-theme"
        >
          <TooltipProvider>
            {children}
          </TooltipProvider>

          <ToastProvider />
        </ThemeProvider>

        <ScrollProgress />

        <ScrollToTop />

        <ScrollRestoration />

        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}

export function ErrorBoundary({
  error,
}: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";

    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (
    import.meta.env.DEV &&
    error instanceof Error
  ) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container mx-auto p-6 pt-20">
      <h1 className="text-4xl font-bold">
        {message}
      </h1>

      <p className="mt-4 text-slate-600">
        {details}
      </p>

      {stack && (
        <pre className="mt-6 overflow-x-auto rounded-xl bg-slate-100 p-4 text-sm">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}