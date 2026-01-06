import { API_BASE_URL } from "$lib/config";
import { authStore } from "$lib/stores/auth";

export async function apiFetch(
  endpoint: string,
  options: RequestInit = {}
) {
  let token: string | null = null;

  authStore.subscribe((v: { accessToken: string | null; }) => token = v.accessToken)();

  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
    credentials: "include",
  });

  if (res.status === 401) {
    authStore.logout();
    throw new Error("Unauthorized");
  }

  return res.json();
}
