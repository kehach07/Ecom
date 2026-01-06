import { writable } from "svelte/store";

export const authStore = writable({
  accessToken: null as string | null,
  user: null,
  isAuthenticated: false,
});

authStore.logout = () => {
  authStore.set({
    accessToken: null,
    user: null,
    isAuthenticated: false,
  });
};
