<script lang="ts">
  import { goto } from "$app/navigation";

  import Mail from "lucide-svelte/icons/mail";
  import Phone from "lucide-svelte/icons/phone";
  import Lock from "lucide-svelte/icons/lock";
  import User from "lucide-svelte/icons/user";
  import Eye from "lucide-svelte/icons/eye";
  import EyeOff from "lucide-svelte/icons/eye-off";
  import ArrowLeft from "lucide-svelte/icons/arrow-left";

  import { signIn, signUp } from "$lib/services/auth";
  import logo from "$lib/assets/shopvista-logo.png";

  let isLogin = true;
  let isForgotPassword = false;
  let showPassword = false;

  let email = "";
  let password = "";
  let firstName = "";
  let lastName = "";
  let phone = "";

  let loading = false;
  let error = "";

  async function submit() {
    error = "";
    loading = true;

    try {
      if (isForgotPassword) {
        alert("Password reset link will be sent to your email");
        isForgotPassword = false;
        return;
      }

      if (isLogin) {
        await signIn(email, password);
      } else {
        await signUp({
          email,
          password,
          first_name: firstName,
          last_name: lastName,
          phone
        });
      }

      goto("/");
    } catch (e: any) {
      error = e?.message || "Authentication failed";
    } finally {
      loading = false;
    }
  }
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
  <div class="w-full max-w-md">

    <!-- Back -->
    <button
      class="mb-6 flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800"
      on:click={() => goto("/")}
    >
      <ArrowLeft class="h-4 w-4" />
      Back to ShopVista
    </button>

    <!-- Card -->
    <div class="bg-white rounded-2xl shadow-xl border p-8">

      <!-- Logo -->
      <div class="text-center mb-6">
        <img src={logo} alt="ShopVista" class="h-14 mx-auto mb-3" />
        <h1 class="text-2xl font-bold">
          {isForgotPassword
            ? "Reset Password"
            : isLogin
            ? "Welcome Back"
            : "Create Account"}
        </h1>
        <p class="text-gray-500 text-sm mt-1">
          {isForgotPassword
            ? "Enter your email to receive reset instructions"
            : isLogin
            ? "Sign in to continue shopping"
            : "Join ShopVista for exclusive deals"}
        </p>
      </div>

      <!-- Form -->
      <form class="space-y-4" on:submit|preventDefault={submit}>

        {#if !isLogin && !isForgotPassword}
          <!-- First Name -->
          <div>
            <label class="text-sm font-medium">First Name</label>
            <div class="relative mt-1">
              <User class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                class="w-full pl-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your first name"
                bind:value={firstName}
                required
              />
            </div>
          </div>

          <!-- Last Name -->
          <div>
            <label class="text-sm font-medium">Last Name</label>
            <div class="relative mt-1">
              <User class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                class="w-full pl-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your last name"
                bind:value={lastName}
                required
              />
            </div>
          </div>

          <!-- Phone -->
          <div>
            <label class="text-sm font-medium">Phone Number</label>
            <div class="relative mt-1">
              <Phone class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                class="w-full pl-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter phone number"
                bind:value={phone}
                required
              />
            </div>
          </div>
        {/if}

        <!-- Email -->
        {#if !isForgotPassword}
          <div>
            <label class="text-sm font-medium">Email Address</label>
            <div class="relative mt-1">
              <Mail class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="email"
                class="w-full pl-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                bind:value={email}
                required
              />
            </div>
          </div>
        {/if}

        <!-- Password -->
        {#if !isForgotPassword}
          <div>
            <label class="text-sm font-medium">Password</label>
            <div class="relative mt-1">
              <Lock class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                class="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                bind:value={password}
                required
              />
              <button
                type="button"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                on:click={() => (showPassword = !showPassword)}
              >
                {#if showPassword}
                  <EyeOff class="h-4 w-4" />
                {:else}
                  <Eye class="h-4 w-4" />
                {/if}
              </button>
            </div>
          </div>
        {/if}

        {#if error}
          <p class="text-sm text-red-600">{error}</p>
        {/if}

        {#if isLogin && !isForgotPassword}
          <button
            type="button"
            class="text-sm text-blue-600 hover:underline"
            on:click={() => (isForgotPassword = true)}
          >
            Forgot password?
          </button>
        {/if}

        <button
          type="submit"
          disabled={loading}
          class="w-full py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          {loading
            ? "Please wait..."
            : isForgotPassword
            ? "Send Reset Link"
            : isLogin
            ? "Sign In"
            : "Create Account"}
        </button>
      </form>

      <!-- Switch -->
      <div class="mt-6 text-center text-sm text-gray-500">
        {#if isForgotPassword}
          <button on:click={() => (isForgotPassword = false)} class="hover:underline">
            Back to sign in
          </button>
        {:else}
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            class="ml-1 text-blue-600 font-medium hover:underline"
            on:click={() => (isLogin = !isLogin)}
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        {/if}
      </div>

    </div>
  </div>
</div>
