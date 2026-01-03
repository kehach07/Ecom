<script lang="ts">
  import { Star, Heart, ShoppingCart, GripVertical } from "lucide-svelte";
  import { createEventDispatcher } from "svelte";
  import type { Product } from "$lib/data/products";

  /* product images */
  import headphonesImg from "$lib/assets/products/headphones.png";
  import airconditionerImg from "$lib/assets/products/airconditioner.png";
  import speakerImg from "$lib/assets/products/speaker.png";
  import mixerImg from "$lib/assets/products/mixer.png";
  import smarttvImg from "$lib/assets/products/smarttv.png";
  import scannerImg from "$lib/assets/products/scanner.png";
  import smartphoneImg from "$lib/assets/products/smartphone.png";
  import laptopImg from "$lib/assets/products/laptop.png";

  export let product: Product;
  export let index = 0;

  const dispatch = createEventDispatcher();

  let isLiked = false;
  let isHovered = false;

  /* ✅ IMPORTANT: no Record<> here */
  const imageMap = {
    "/products/headphones.png": headphonesImg,
    "/products/airconditioner.png": airconditionerImg,
    "/products/speaker.png": speakerImg,
    "/products/mixer.png": mixerImg,
    "/products/smarttv.png": smarttvImg,
    "/products/scanner.png": scannerImg,
    "/products/smartphone.png": smartphoneImg,
    "/products/laptop.png": laptopImg
  };

  const productImage = imageMap[product.image] ?? product.image;

  const discount =
    product.originalPrice
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100
        )
      : 0;

  function addToCart(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    dispatch("addToCart", product);
  }
</script>

<a
  href={`/product/${product.id}`}
  class="group relative block rounded-xl bg-card p-3 border border-border
         transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
  style="animation-delay: {index * 75}ms"
  on:mouseenter={() => (isHovered = true)}
  on:mouseleave={() => (isHovered = false)}
>
  <!-- Badge -->
  {#if product.badge}
    <span
      class="absolute top-3 left-3 z-10 rounded-full bg-accent
             px-2 py-0.5 text-xs font-bold text-accent-foreground"
    >
      {product.badge}
    </span>
  {/if}

  <!-- Wishlist -->
  <button
    type="button"
    aria-label="Wishlist"
    on:click|preventDefault|stopPropagation={() => (isLiked = !isLiked)}
    class="absolute top-3 right-3 z-10 p-2 rounded-full
           bg-card/80 backdrop-blur hover:text-destructive"
  >
    <Heart class="h-4 w-4 {isLiked ? 'fill-red-500 text-red-500' : ''}" />
  </button>

  <!-- Product image -->
  <div
    class="relative aspect-square mb-3 rounded-lg bg-secondary/30 overflow-hidden"
  >
    <img
      src={productImage}
      alt={product.name}
      class="w-full h-full object-contain p-3 transition-transform duration-500
             {isHovered ? 'scale-105' : ''}"
    />

    <!-- Quick add -->
    <button
      type="button"
      aria-label="Add to cart"
      on:click={addToCart}
      class="absolute bottom-2 left-2 flex items-center gap-1
             px-2 py-1 rounded-full bg-primary text-primary-foreground
             text-xs transition-all duration-300
             {isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}"
    >
      <ShoppingCart class="h-3 w-3" />
      Add
    </button>

    <!-- Drag hint -->
    <div
      class="absolute bottom-2 right-2 flex items-center gap-1
             px-2 py-1 rounded-full bg-foreground/80 text-background
             text-xs transition-all duration-300
             {isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}"
    >
      <GripVertical class="h-3 w-3" />
      Drag
    </div>
  </div>

  <!-- Product info -->
  <div class="space-y-1.5">
    <div class="flex items-center gap-1 text-xs">
      <Star class="h-3.5 w-3.5 fill-warning text-warning" />
      <span class="font-medium">{product.rating}</span>
      <span class="text-muted-foreground">
        ({product.reviews.toLocaleString()})
      </span>
    </div>

    <h3
      class="font-display font-semibold text-sm line-clamp-2
             group-hover:text-primary transition-colors"
    >
      {product.name}
    </h3>

    <div class="flex items-center gap-2">
      <span class="text-lg font-bold text-foreground">
        ${product.price.toFixed(2)}
      </span>

      {#if product.originalPrice}
        <span class="text-xs line-through text-muted-foreground">
          ${product.originalPrice.toFixed(2)}
        </span>
        <span class="text-xs font-semibold text-success">
          -{discount}%
        </span>
      {/if}
    </div>

    <span
      class="text-xs font-medium
             {product.inStock ? 'text-success' : 'text-destructive'}"
    >
      {product.inStock ? "In Stock" : "Out of Stock"}
    </span>
  </div>
</a>
