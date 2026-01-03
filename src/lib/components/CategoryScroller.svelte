<script>
  let selectedCategory = "";

  const categories = [
    { id: "electronics", name: "Electronics", icon: "💻" },
    { id: "home", name: "Home Appliances", icon: "🏠" },
    { id: "audio", name: "Audio", icon: "🎧" },
    { id: "kitchen", name: "Kitchen", icon: "🍳" },
    { id: "tv", name: "Smart TVs", icon: "📺" },
    { id: "office", name: "Office", icon: "🖨️" },
    { id: "mobiles", name: "Mobiles", icon: "📱" },
    { id: "laptops", name: "Laptops", icon: "💻" },
    { id: "groceries", name: "Groceries", icon: "🛒" },
    { id: "fashion", name: "Fashion", icon: "👕" },
    { id: "furniture", name: "Furniture", icon: "🛋️" },
  ];

  let scrollRef;

  function scroll(dir) {
    scrollRef.scrollBy({
      left: dir === "left" ? -200 : 200,
      behavior: "smooth"
    });
  }

  function toggleCategory(id) {
    selectedCategory = selectedCategory === id ? "" : id;
  }
</script>

<section class="mt-4">
  <div class="relative flex items-center gap-2">

    <!-- LEFT ARROW -->
    <button
      on:click={() => scroll("left")}
      class="hidden md:flex h-8 w-8 items-center justify-center
             rounded-full border bg-white shadow-sm
             hover:bg-blue-600 hover:text-white transition"
    >
      ‹
    </button>

    <!-- SCROLL AREA -->
    <div
      bind:this={scrollRef}
      class="flex gap-2 overflow-x-auto scroll-smooth flex-1 py-1
             scrollbar-hide"
    >
      {#each categories as cat}
        <button
          on:click={() => toggleCategory(cat.id)}
          class={`group flex items-center gap-2 px-4 py-1.5 rounded-full text-sm
            border whitespace-nowrap transition-all duration-200
            ${
              selectedCategory === cat.id
                ? "bg-blue-600 text-white border-blue-600 shadow"
                : "bg-white hover:border-blue-500 hover:shadow-sm"
            }`}
        >
          <span class="group-hover:scale-110 transition">
            {cat.icon}
          </span>
          {cat.name}
        </button>
      {/each}
    </div>

    <!-- RIGHT ARROW -->
    <button
      on:click={() => scroll("right")}
      class="hidden md:flex h-8 w-8 items-center justify-center
             rounded-full border bg-white shadow-sm
             hover:bg-blue-600 hover:text-white transition"
    >
      ›
    </button>

  </div>
</section>
