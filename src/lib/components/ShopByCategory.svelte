<script lang="ts">
  import { goto } from "$app/navigation";

  import ethnicWearImg from "$lib/assets/products/ethnic-wear.png";
  import casualWearImg from "$lib/assets/products/casual-wear.png";
  import activewearImg from "$lib/assets/products/activewear.png";
  import watchImg from "$lib/assets/products/watch.png";
  import beautyImg from "$lib/assets/products/beauty.png";
  import groomingImg from "$lib/assets/products/grooming.png";
  import smartphoneImg from "$lib/assets/products/smartphone.png";
  import laptopImg from "$lib/assets/products/laptop.png";
  import headphonesImg from "$lib/assets/products/headphones.png";
  import smarttvImg from "$lib/assets/products/smarttv.png";

  const shopCategories = [
    {
      id: "ethnic-wear",
      name: "Ethnic Wear",
      image: ethnicWearImg,
      discount: "50–80% OFF",
      bgColor: "from-pink-100 to-pink-50",
    },
    {
      id: "casual-wear",
      name: "Casual Wear",
      image: casualWearImg,
      discount: "40–80% OFF",
      bgColor: "from-amber-100 to-amber-50",
    },
    {
      id: "activewear",
      name: "Activewear",
      image: activewearImg,
      discount: "30–70% OFF",
      bgColor: "from-gray-100 to-gray-50",
    },
    {
      id: "watches",
      name: "Watches",
      image: watchImg,
      discount: "UP TO 80% OFF",
      bgColor: "from-rose-100 to-rose-50",
    },
    {
      id: "beauty",
      name: "Beauty & Makeup",
      image: beautyImg,
      discount: "UP TO 60% OFF",
      bgColor: "from-yellow-100 to-yellow-50",
    },
    {
      id: "grooming",
      name: "Grooming",
      image: groomingImg,
      discount: "UP TO 60% OFF",
      bgColor: "from-orange-100 to-orange-50",
    },
    {
      id: "smartphones",
      name: "Smartphones",
      image: smartphoneImg,
      discount: "UP TO 40% OFF",
      bgColor: "from-blue-100 to-blue-50",
    },
    {
      id: "laptops",
      name: "Laptops",
      image: laptopImg,
      discount: "UP TO 35% OFF",
      bgColor: "from-slate-100 to-slate-50",
    },
    {
      id: "headphones",
      name: "Headphones",
      image: headphonesImg,
      discount: "30–60% OFF",
      bgColor: "from-purple-100 to-purple-50",
    },
    {
      id: "smarttv",
      name: "Smart TVs",
      image: smarttvImg,
      discount: "UP TO 50% OFF",
      bgColor: "from-teal-100 to-teal-50",
    },
  ];

  function openCategory(id: string) {
    goto(`/category/${id}`);
  }
</script>

<section class="py-10">
  <div class="max-w-7xl mx-auto px-4">
    <h2 class="text-2xl font-bold text-center mb-8">
      SHOP BY CATEGORY
    </h2>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {#each shopCategories as cat}
        <button
          class="relative rounded-xl border bg-white hover:shadow-lg transition-all"
          on:click={() => openCategory(cat.id)}
          aria-label={`Shop ${cat.name}`}
        >
          <div class={`absolute inset-0 bg-gradient-to-br ${cat.bgColor} opacity-50`}></div>

          <div class="relative p-3">
            <img
              src={cat.image}
              alt={cat.name}
              class="w-full h-32 object-contain"
            />
          </div>

          <div class="relative p-3 text-center">
            <p class="font-semibold text-sm">{cat.name}</p>
            <p class="text-xs text-primary font-bold">{cat.discount}</p>
          </div>
        </button>
      {/each}
    </div>
  </div>
</section>
