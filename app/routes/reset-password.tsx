import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

import { Lock, ChevronRight, Activity } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/global/CustomInput";

import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

export default function ResetPassword() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = async (data: any) => {
    const token = new URLSearchParams(window.location.search).get("token");

    if (!token) {
      toast.error("Invalid reset link.");
      return;
    }

    setLoading(true);

    await authClient.resetPassword(
      {
        newPassword: data.password,
        token,
      },
      {
        onSuccess: () => {
          toast.success("Password updated successfully.");
          navigate("/login");
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
      },
    );

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950">
      <Card className="shadow-xl rounded-xl w-full max-w-md">
        <CardContent className="p-8">

          <div className="flex flex-col items-center mb-8">
            <div className="bg-blue-600 p-3 rounded-xl mb-3">
              <Activity className="text-white w-7 h-7" />
            </div>

            <h1 className="text-2xl font-bold">
              Reset Password
            </h1>

            <p className="text-slate-500 text-sm mt-1">
              Enter your new password.
            </p>
          </div>

          <form
            className="space-y-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <CustomInput
              control={form.control}
              name="password"
              type="password"
              label="New Password"
              placeholder="••••••••"
              startIcon={<Lock size={18} />}
            />

            <Button
              type="submit"
              disabled={loading}
              className="w-full"
            >
              {loading ? (
                "Updating..."
              ) : (
                <>
                  Update Password
                  <ChevronRight className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}