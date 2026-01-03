<script lang="ts">
  import {
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Mail,
    Phone,
    MapPin,
    CreditCard,
    Truck,
    Shield,
    Clock,
    ChevronRight
  } from "lucide-svelte";

  import logo from "$lib/assets/shopvista-logo.png";

  const quickLinks = [
    "About Us",
    "Contact",
    "FAQs",
    "Blog",
    "Careers",
    "Affiliate Program"
  ];

  const customerService = [
    "Track Order",
    "Shipping Info",
    "Returns & Exchanges",
    "Size Guide",
    "Payment Options",
    "Gift Cards"
  ];

  const paymentMethods = [
    "Visa",
    "Mastercard",
    "PayPal",
    "Apple Pay",
    "Google Pay"
  ];
</script>

<footer class="bg-background text-foreground border-t border-border">
  <!-- Top features bar -->
  <div class="bg-primary/10 border-b border-primary/20">
    <div class="container-main py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      {#each [
        { icon: Truck, title: "Free Shipping", desc: "On orders over $50" },
        { icon: Shield, title: "Secure Payment", desc: "100% protected" },
        { icon: Clock, title: "24/7 Support", desc: "Dedicated help" },
        { icon: CreditCard, title: "Easy Returns", desc: "30-day policy" }
      ] as item}
        <div class="flex items-center gap-3">
          <div class="p-2 rounded-full bg-primary/20">
            <svelte:component this={item.icon} class="h-5 w-5 text-primary" />
          </div>
          <div>
            <p class="text-sm font-semibold">{item.title}</p>
            <p class="text-xs text-primary-foreground/70">{item.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Main footer -->
  <div class="container-main py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
    <!-- Brand -->
    <div class="lg:col-span-2 space-y-4">
      <div class="flex items-center gap-3">
        <img src={logo} alt="ShopVista" class="h-10 w-auto" />
        <span class="text-xl font-bold font-display">ShopVista</span>
      </div>

      <p class="text-sm text-primary-foreground/70 max-w-sm">
        Your one-stop destination for premium electronics, fashion, home
        appliances, and more.
      </p>

      <div class="flex gap-3 pt-2">
        {#each [Facebook, Twitter, Instagram, Youtube] as Icon}
          <a
            href="#"
            class="p-2.5 rounded-full bg-primary/20 text-primary
                   hover:bg-primary hover:text-primary-foreground
                   transition"
          >
            <svelte:component this={Icon} class="h-4 w-4" />
          </a>
        {/each}
      </div>
    </div>

    <!-- Quick Links -->
    <div>
      <h4 class="font-semibold mb-4">Quick Links</h4>
      <ul class="space-y-2">
        {#each quickLinks as link}
          <li>
            <a
              href="#"
              class="text-sm text-primary-foreground/60
                     hover:text-primary flex items-center gap-1 transition"
            >
              <ChevronRight class="h-3 w-3" />
              {link}
            </a>
          </li>
        {/each}
      </ul>
    </div>

    <!-- Customer Service -->
    <div>
      <h4 class="font-semibold mb-4">Customer Service</h4>
      <ul class="space-y-2">
        {#each customerService as link}
          <li>
            <a
              href="#"
              class="text-sm text-primary-foreground/60
                     hover:text-primary flex items-center gap-1 transition"
            >
              <ChevronRight class="h-3 w-3" />
              {link}
            </a>
          </li>
        {/each}
      </ul>
    </div>

    <!-- Contact -->
    <div>
      <h4 class="font-semibold mb-4">Contact Us</h4>
      <ul class="space-y-3 text-sm text-primary-foreground/70">
        <li class="flex gap-2">
          <MapPin class="h-4 w-4 text-primary" />
          123 Tech Street, Innovation City
        </li>
        <li class="flex gap-2">
          <Phone class="h-4 w-4 text-primary" />
          +1 (555) 123-4567
        </li>
        <li class="flex gap-2">
          <Mail class="h-4 w-4 text-primary" />
          support@shopvista.com
        </li>
      </ul>

      <!-- Newsletter -->
      <div class="mt-6">
        <p class="text-sm font-medium mb-2">Subscribe to Newsletter</p>
        <div class="flex gap-2">
          <input
            type="email"
            placeholder="Your email"
            class="flex-1 rounded-lg px-3 py-2 text-sm
                   bg-primary-foreground/10 border border-primary-foreground/20
                   placeholder:text-primary-foreground/40
                   focus:outline-none focus:border-primary"
          />
          <button
            class="px-4 py-2 rounded-lg bg-primary text-primary-foreground
                   text-sm font-medium hover:bg-primary/90 transition"
          >
            Join
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Payments -->
  <div class="border-t border-primary-foreground/10 py-6">
    <div class="container-main flex flex-wrap items-center justify-center gap-4">
      <span class="text-xs text-primary-foreground/50">We Accept:</span>
      {#each paymentMethods as method}
        <span
          class="px-3 py-1.5 rounded bg-primary-foreground/10
                 text-xs text-primary-foreground/70 font-medium"
        >
          {method}
        </span>
      {/each}
    </div>
  </div>

  <!-- Bottom -->
  <div class="border-t border-primary-foreground/10 py-4">
    <div
      class="container-main flex flex-col sm:flex-row
             items-center justify-between gap-4 text-xs"
    >
      <p class="text-primary-foreground/40">
        © 2024 ShopVista. All rights reserved.
      </p>

      <div class="flex gap-6">
        <a href="#" class="hover:text-primary transition">Privacy Policy</a>
        <a href="#" class="hover:text-primary transition">Terms</a>
        <a href="#" class="hover:text-primary transition">Cookies</a>
      </div>
    </div>
  </div>
</footer>
