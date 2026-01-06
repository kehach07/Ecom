<script lang="ts">
  import { page } from "$app/stores";
  import { products } from "$lib/data/products";

  $: productId = $page.params.id;
  $: product = products.find(p => p.id === productId);
</script>

{#if product}
  <section class="container-main py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <!-- Image -->
      <div class="bg-card rounded-xl p-6 border">
        <img
          src={product.image}
          alt={product.name}
          class="w-full h-80 object-contain"
        />
      </div>

      <!-- Info -->
      <div class="space-y-4">
        <h1 class="text-3xl font-bold">{product.name}</h1>

        <p class="text-muted-foreground">{product.description}</p>

        <div class="flex items-center gap-3">
          <span class="text-2xl font-bold">${product.price}</span>
          {#if product.originalPrice}
            <span class="line-through text-muted-foreground">
              ${product.originalPrice}
            </span>
          {/if}
        </div>

        <p class={product.inStock ? "text-success" : "text-destructive"}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>

        <button class="btn-primary mt-4">
          Add to Cart
        </button>
      </div>

    </div>
  </section>
{:else}
  <p class="text-center py-20 text-muted-foreground">
    Product not found
  </p>
{/if}
