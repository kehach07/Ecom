import { writable } from "svelte/store";

interface AuthState {
  accessToken: string | null;
  user: any | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  accessToken: null,
  user: null,
  isAuthenticated: false
};

function createAuthStore() {
  const { subscribe, set } = writable<AuthState>(initialState);

  return {
    subscribe,
    login: (_token: string | null, user: any) =>
      set({
        accessToken: null, // session-based
        user,
        isAuthenticated: true
      }),
    logout: () => set(initialState)
  };
}

export const authStore = createAuthStore();
