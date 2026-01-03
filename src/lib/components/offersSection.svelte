<script lang="ts">
  import { onMount } from "svelte";

  import ChevronLeft from "lucide-svelte/icons/chevron-left";
  import ChevronRight from "lucide-svelte/icons/chevron-right";
  import Gift from "lucide-svelte/icons/gift";
  import Zap from "lucide-svelte/icons/zap";
  import Percent from "lucide-svelte/icons/percent";

  // product images
  import phone from "$lib/assets/products/smartphone.png";
  import headphones from "$lib/assets/products/headphones.png";
  import laptop from "$lib/assets/products/laptop.png";
  import watch from "$lib/assets/products/watch.png";
  import beauty from "$lib/assets/products/beauty.png";

  const comboOffers = [
    {
      title: "Phone + Earbuds Combo",
      products: [phone, headphones],
      original: 89999,
      price: 74999,
      save: 15000,
      badge: "Best Seller"
    },
    {
      title: "Laptop + Accessories",
      products: [laptop, headphones],
      original: 125999,
      price: 99999,
      save: 26000,
      badge: "Hot Deal"
    },
    {
      title: "Watch + Beauty Kit",
      products: [watch, beauty],
      original: 45999,
      price: 34999,
      save: 11000,
      badge: "Limited"
    }
  ];

  const scrollingOffers = [
    "🔥 FLASH SALE: Extra 10% OFF on Electronics!",
    "💳 Bank Offers: Up to ₹5000 Instant Discount",
    "🚚 FREE Delivery on Orders Above ₹499",
    "⭐ New Users: Get ₹200 OFF on First Order",
    "🎁 Buy 2 Get 1 FREE on Fashion Items",
    "💎 Premium Members: Extra 15% Cashback"
  ];

  const banners = [
    {
      title: "MEGA ELECTRONICS SALE",
      subtitle: "Up to 70% OFF + Bank Offers",
      gradient: "from-blue-600 via-purple-600 to-pink-500",
      icon: Zap
    },
    {
      title: "FASHION FIESTA",
      subtitle: "Buy More Save More | Min 50% OFF",
      gradient: "from-pink-500 via-red-500 to-orange-400",
      icon: Gift
    },
    {
      title: "COMBO BONANZA",
      subtitle: "Save Extra ₹10,000 on Combos",
      gradient: "from-green-500 via-teal-500 to-cyan-500",
      icon: Percent
    }
  ];

  let current = 0;
  let hovered = false;
  let interval: ReturnType<typeof setInterval>;

  onMount(() => {
    interval = setInterval(() => {
      if (!hovered) {
        current = (current + 1) % banners.length;
      }
    }, 4000);

    return () => clearInterval(interval);
  });

  const next = () => (current = (current + 1) % banners.length);
  const prev = () => (current = (current - 1 + banners.length) % banners.length);
</script>

<section class="py-8 bg-secondary/30">
  <div class="container-main space-y-8">

    <!-- ================= COMBO OFFERS ================= -->
    <h3 class="text-xl font-display font-bold flex items-center gap-2">
      <Gift class="h-5 w-5 text-accent" />
      Combo Offers – Save More!
    </h3>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      {#each comboOffers as offer}
        <div class="relative bg-card border border-border rounded-xl p-4 hover:shadow-lg transition-all">
          <span class="absolute top-2 right-2 bg-accent text-accent-foreground text-xs px-2 py-0.5 rounded-full font-semibold">
            {offer.badge}
          </span>

          <div class="flex justify-center gap-2 mb-4">
            {#each offer.products as img, i}
              <img
                src={img}
                alt="product"
                class="w-20 h-20 object-contain bg-muted p-2 rounded-lg"
              />
              {#if i === 0}
                <span class="text-xl text-muted-foreground">+</span>
              {/if}
            {/each}
          </div>

          <h4 class="text-center font-semibold">{offer.title}</h4>

          <p class="text-center line-through text-sm text-muted-foreground">
            ₹{offer.original.toLocaleString()}
          </p>

          <p class="text-center text-xl font-bold text-primary">
            ₹{offer.price.toLocaleString()}
          </p>

          <p class="text-center text-success text-sm">
            You Save ₹{offer.save.toLocaleString()}
          </p>

          <button class="mt-4 w-full btn-primary">
            Buy Combo
          </button>
        </div>
      {/each}
    </div>

    <!-- ================= MARQUEE ================= -->
    <div class="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-accent py-2">
      <div class="animate-marquee flex gap-12 whitespace-nowrap">
        {#each [...scrollingOffers, ...scrollingOffers] as offer}
          <span class="text-sm font-medium text-primary-foreground">
            {offer}
          </span>
        {/each}
      </div>
    </div>

    <!-- ================= SLIDER ================= -->
    <div
      class="relative overflow-hidden rounded-2xl"
      on:mouseenter={() => hovered = true}
      on:mouseleave={() => hovered = false}
    >
      <div
        class="flex transition-transform duration-700 ease-out"
        style="transform: translateX(-{current * 100}%);"
      >
        {#each banners as banner}
          <div class="min-w-full p-8 md:p-12 bg-gradient-to-r {banner.gradient}">
            <div class="flex items-center justify-between text-white">
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <svelte:component this={banner.icon} class="h-8 w-8 animate-pulse" />
                  <h2 class="text-3xl md:text-4xl font-display font-bold">
                    {banner.title}
                  </h2>
                </div>
                <p class="text-lg">{banner.subtitle}</p>
                <button class="btn-outline bg-white text-foreground">
                  Shop Now
                </button>
              </div>

              <div class="hidden md:flex w-32 h-32 bg-white/20 rounded-full items-center justify-center">
                <svelte:component this={banner.icon} class="h-16 w-16" />
              </div>
            </div>
          </div>
        {/each}
      </div>

      <!-- ARROWS -->
      <button
        on:click={prev}
        aria-label="Previous banner"
        class="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50"
      >
        <ChevronLeft class="h-6 w-6 text-white" />
      </button>

      <button
        on:click={next}
        aria-label="Next banner"
        class="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50"
      >
        <ChevronRight class="h-6 w-6 text-white" />
      </button>

      <!-- DOTS -->
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {#each banners as _, i}
          <button
            on:click={() => current = i}
            aria-label="Go to banner"
            class="h-2 rounded-full transition-all
              {current === i ? 'w-6 bg-white' : 'w-2 bg-white/50'}"
          ></button>
        {/each}
      </div>
    </div>

  </div>
</section>
+