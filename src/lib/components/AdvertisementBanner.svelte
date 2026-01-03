<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import ChevronLeft from "lucide-svelte/icons/chevron-left";
  import ChevronRight from "lucide-svelte/icons/chevron-right";

  import banner1 from "$lib/assets/banners/sale-banner-1.png";
  import banner2 from "$lib/assets/banners/sale-banner-2.png";
  import banner3 from "$lib/assets/banners/sale-banner-3.png";

  const banners = [
    {
      image: banner1,
      title: "Premium Electronics Sale",
      subtitle: "Up to 50% off on selected items",
      cta: "Shop Now",
      gradient: "from-primary/90 to-primary/60"
    },
    {
      image: banner2,
      title: "Smart Home Collection",
      subtitle: "Transform your living space",
      cta: "Explore",
      gradient: "from-orange-500/90 to-orange-400/60"
    },
    {
      image: banner3,
      title: "New Arrivals",
      subtitle: "Discover the latest tech",
      cta: "View All",
      gradient: "from-black/80 to-black/50"
    }
  ];

  let current = 0;
  let timer: any;

  function next() {
    current = (current + 1) % banners.length;
  }

  function prev() {
    current = (current - 1 + banners.length) % banners.length;
  }

  function goTo(i: number) {
    current = i;
  }

  onMount(() => {
    timer = setInterval(next, 5000);
  });

  onDestroy(() => clearInterval(timer));
</script>

<section class="w-full">
  <div class="relative overflow-hidden aspect-[3/1] md:aspect-[4/1]">

    {#each banners as banner, i}
      <div
        class={`absolute inset-0 transition-all duration-500 ease-out ${
          i === current
            ? "opacity-100 translate-x-0"
            : i < current
            ? "opacity-0 -translate-x-full"
            : "opacity-0 translate-x-full"
        }`}
      >
        <img src={banner.image} alt={banner.title} class="w-full h-full object-cover" />

        <div class={`absolute inset-0 bg-gradient-to-r ${banner.gradient}`} />

        <div class="absolute inset-0 flex items-center">
          <div class="px-10 text-white max-w-xl">
            <h2 class="text-4xl font-bold mb-2">{banner.title}</h2>
            <p class="text-lg mb-4 opacity-90">{banner.subtitle}</p>
            <button class="px-6 py-2 bg-white text-black rounded-lg font-medium hover:scale-105 transition">
              {banner.cta}
            </button>
          </div>
        </div>
      </div>
    {/each}

    <!-- Arrows -->
    <button
      on:click={prev}
      class="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/80 rounded-full hover:scale-110 transition"
    >
      <ChevronLeft />
    </button>

    <button
      on:click={next}
      class="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/80 rounded-full hover:scale-110 transition"
    >
      <ChevronRight />
    </button>

    <!-- Dots -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      {#each banners as _, i}
        <button
          on:click={() => goTo(i)}
          class={`transition-all duration-300 rounded-full ${
            i === current
              ? "w-8 h-3 bg-white"
              : "w-3 h-3 bg-white/50 hover:bg-white/75"
          }`}
        ></button>
      {/each}
    </div>

  </div>
</section>
