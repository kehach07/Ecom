import { get } from "svelte/store";
import { authStore } from "$lib/stores/auth";
import { API_BASE_URL } from "$lib/config";

export async function apiFetch(
  endpoint: string,
  options: RequestInit = {}
) {
  const { accessToken, user } = get(authStore);

  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",

      // ✅ REQUIRED BY YOUR SESSION MIDDLEWARE
      ...(user?.id ? { "X-User-ID": String(user.id) } : {}),

      // optional JWT
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),

      ...(options.headers || {}),
    },
    credentials: "include",
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data?.error || "Request failed");
  }

  return data;
}
