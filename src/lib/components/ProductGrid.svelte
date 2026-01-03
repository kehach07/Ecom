<script lang="ts">
  import ProductCard from "./ProductCard.svelte";
  import type { Product } from "$lib/data/products";

  export let products: Product[] = [];
  export let title = "Featured Products";
</script>

<section class="py-8 md:py-12">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex items-center justify-between mb-6">
      <h2 class="font-display text-2xl md:text-3xl font-bold">
        {title}
      </h2>
      <span class="text-sm text-muted-foreground">
        {products.length} product{products.length !== 1 ? "s" : ""}
      </span>
    </div>

    {#if products.length === 0}
      <div class="flex flex-col items-center justify-center py-16 text-center">
        <div class="w-24 h-24 mb-6 rounded-full bg-muted flex items-center justify-center">
          🔍
        </div>
        <h3 class="text-xl font-semibold mb-2">No products found</h3>
        <p class="text-muted-foreground max-w-md">
          Try adjusting your search or filter.
        </p>
      </div>
    {:else}
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {#each products as product, i}
          <ProductCard
            {product}
            index={i}
            on:addToCart={(e) => console.log("Add to cart", e.detail)}
          />
        {/each}
      </div>
    {/if}
  </div>
</section>
