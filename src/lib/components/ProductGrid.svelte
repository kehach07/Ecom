<script lang="ts">
  import type { Product } from "$lib/data/products.ts";
  import ProductCard from "./ProductCard.svelte";

  export let products: Product[] = [];
  export let title: string = "Featured Products";
</script>

<section class="py-8 md:py-12">
  <div class="container-main">

    <div class="flex items-center justify-between mb-6">
      <h2 class="font-display text-2xl md:text-3xl font-bold text-foreground">
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
        <h3 class="font-display text-xl font-semibold text-foreground mb-2">
          No products found
        </h3>
        <p class="text-muted-foreground max-w-md">
          Try adjusting your search or filters.
        </p>
      </div>
    {:else}
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {#each products as product, index (product.id)}
          <ProductCard {product} {index} />
        {/each}
      </div>
    {/if}

  </div>
</section>
