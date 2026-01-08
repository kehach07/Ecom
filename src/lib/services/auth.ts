import { apiFetch } from "$lib/services/api";
import { authStore } from "$lib/stores/auth";

/* ---------------- SIGN UP ---------------- */
export async function signUp(payload: {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone: string;
}) {
  const res = await apiFetch("/auth/signup/", {
    method: "POST",
    body: JSON.stringify(payload)
  });

  // ✅ NO token – session handled by backend
  authStore.login(null, res.user);

  return res;
}

/* ---------------- SIGN IN ---------------- */
export async function signIn(email: string, password: string) {
  const res = await apiFetch("/auth/signin/", {
    method: "POST",
    body: JSON.stringify({ email, password })
  });

  // ✅ NO access token
  authStore.login(null, res.user);

  return res;
}
