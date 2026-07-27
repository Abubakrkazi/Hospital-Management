import { API_URL } from "@/lib/api";
import type { LoginFormData } from "@/components/auth/login.schema";

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: "PATIENT" | "DOCTOR";
}

async function getErrorMessage(
  response: Response,
  fallback: string
): Promise<string> {
  try {
    const data = await response.json();
    return data?.message || fallback;
  } catch {
    return fallback;
  }
}

async function request<T>(
  endpoint: string,
  options: RequestInit,
  fallbackError: string
): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(await getErrorMessage(response, fallbackError));
  }

  return response.json() as Promise<T>;
}

export const authService = {
  login(data: LoginFormData) {
    return request(
      "/auth/login",
      {
        method: "POST",
        body: JSON.stringify(data),
      },
      "Login failed"
    );
  },

  register(data: RegisterData) {
    return request(
      "/auth/register",
      {
        method: "POST",
        body: JSON.stringify(data),
      },
      "Registration failed"
    );
  },

  logout() {
    return request(
      "/auth/logout",
      {
        method: "POST",
      },
      "Logout failed"
    );
  },

  forgotPassword(email: string) {
    return request(
      "/auth/forgot-password",
      {
        method: "POST",
        body: JSON.stringify({ email }),
      },
      "Failed to send reset email"
    );
  },

  resetPassword(token: string, password: string) {
    return request(
      "/auth/reset-password",
      {
        method: "POST",
        body: JSON.stringify({ token, password }),
      },
      "Password reset failed"
    );
  },

  verifyEmail(token: string) {
    return request(
      "/auth/verify-email",
      {
        method: "POST",
        body: JSON.stringify({ token }),
      },
      "Email verification failed"
    );
  },
};

export default authService;