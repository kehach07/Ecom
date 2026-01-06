<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "./layout.css";
</script>

<Navbar />

<slot />   <!-- pages render here -->

<Footer />
