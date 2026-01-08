<script>
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "./layout.css";

  $: isAuthPage = $page.url.pathname.startsWith("/auth");
</script>

{#if !isAuthPage}
  <Navbar onAuthClick={() => goto("/auth")} />
{/if}

<slot />  <!-- page content -->

{#if !isAuthPage}
  <Footer />
{/if}
