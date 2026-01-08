<script>
  import CategoryScroller from "./CategoryScroller.svelte";
   export let onAuthClick = () => {};
</script>

<nav class="w-full bg-white border-b">
  <div class="max-w-7xl mx-auto px-6 py-4">

    <!-- TOP BAR -->
    <div class="flex items-center gap-6">

      <!-- LOGO -->
      <div class="flex items-center gap-2">
        <img src="/logo.svg" alt="ShopVista" class="h-8 w-8" />
        <span class="text-xl font-bold text-gray-800">ShopVista</span>
      </div>

      <!-- SEARCH BAR (CATEGORY + INPUT) -->
      <div
        class="flex flex-1 items-center gap-3 rounded-full border px-4 py-2
               transition-all focus-within:ring-2 focus-within:ring-blue-500"
      >
        <!-- Category dropdown -->
        <button
          class="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600"
        >
          All Categories
          <span class="text-xs">⌄</span>
        </button>

        <span class="h-5 w-px bg-gray-300"></span>

        <!-- Search input -->
        <div class="flex items-center gap-2 flex-1">
          <span class="text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="Search for products, brands, and more..."
            class="w-full outline-none text-sm"
          />
        </div>
      </div>

      <!-- ICONS -->
      <div class="flex items-center gap-4">
        <button class="text-gray-600 hover:text-blue-600 transition">🤍</button>
        <button class="text-gray-600 hover:text-blue-600 transition">🛒</button>

        <button
          on:click={onAuthClick}
          class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700"
        >
          Sign In
        </button>
      </div>
    </div>

    <!-- CATEGORY SCROLLER -->
    <CategoryScroller />
  </div>
</nav>
