import { useEffect } from "react";
import { useNavigate } from "react-router";

import { toast } from "sonner";
import { Loader2, CheckCircle2 } from "lucide-react";

import { authClient } from "@/lib/auth-client";

export default function VerifyEmail() {
  const navigate = useNavigate();

  useEffect(() => {
    const verify = async () => {
      const token = new URLSearchParams(window.location.search).get("token");

      if (!token) {
        toast.error("Invalid verification link.");
        return;
      }

      await authClient.verifyEmail(
        {
          token,
        },
        {
          onSuccess: () => {
            toast.success("Email verified successfully.");

            setTimeout(() => {
              navigate("/login");
            }, 1500);
          },

          onError: (ctx) => {
            toast.error(ctx.error.message);
          },
        },
      );
    };

    verify();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950">

      <div className="bg-white dark:bg-slate-900 shadow-xl rounded-xl p-10 text-center">

        <CheckCircle2
          className="mx-auto mb-4 text-green-600"
          size={60}
        />

        <h1 className="text-2xl font-bold">
          Verifying Email
        </h1>

        <p className="text-slate-500 mt-2">
          Please wait while we verify your account...
        </p>

        <Loader2
          className="animate-spin mx-auto mt-6"
          size={30}
        />
      </div>

    </div>
  );
}