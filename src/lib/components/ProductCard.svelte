<script lang="ts">
  import type { Product } from "$lib/data/products.ts";
  import { Star, Heart, ShoppingCart } from "lucide-svelte";

  export let product: Product;
  export let index: number = 0;

  let liked = false;

  const discount =
    product.originalPrice
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) * 100
        )
      : 0;
</script>

<div
  class="group rounded-xl bg-card p-3 border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
  style="animation-delay: {index * 75}ms"
>
  <!-- Badge -->
  {#if product.badge}
    <span class="absolute top-4 left-4 rounded-full bg-accent px-2 py-0.5 text-xs font-bold text-accent-foreground">
      {product.badge}
    </span>
  {/if}

  <!-- Wishlist -->

  <!-- Image -->
  <div class="aspect-square mb-3 rounded-lg bg-secondary/30 overflow-hidden">
    <img
      src={product.image}
      alt={product.name}
      class="w-full h-full object-contain p-3 transition-transform duration-300 group-hover:scale-105"
    />
  </div>

  <!-- Info -->
  <div class="space-y-1.5">
    <div class="flex items-center gap-1">
      <Star class="h-3.5 w-3.5 text-warning fill-warning" />
      <span class="text-xs font-medium">{product.rating}</span>
      <span class="text-xs text-muted-foreground">
        ({product.reviews})
      </span>
    </div>

    <h3 class="font-display font-semibold text-sm line-clamp-2">
      {product.name}
    </h3>

    <div class="flex items-center gap-2">
      <span class="text-lg font-bold">${product.price}</span>
      {#if product.originalPrice}
        <span class="text-xs line-through text-muted-foreground">
          ${product.originalPrice}
        </span>
        <span class="text-xs font-semibold text-success">
          -{discount}%
        </span>
      {/if}
    </div>

    <button
      class="mt-2 w-full flex items-center justify-center gap-2 py-1.5 rounded-lg bg-primary text-primary-foreground text-sm"
    >
      <ShoppingCart class="h-4 w-4" />
      Add to cart
    </button>
  </div>
</div>
