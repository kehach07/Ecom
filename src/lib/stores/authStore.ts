import { writable } from "svelte/store";

export const authStore = writable({
  userId: null as string | null,
  sessionId: null as string | null,
  isAuthenticated: false,
});

export function logout() {
  authStore.set({
    userId: null,
    sessionId: null,
    isAuthenticated: false,
  });
}
