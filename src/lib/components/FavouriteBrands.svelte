<script lang="ts">
  import { favouriteBrands } from "$lib/data/products";
</script>

<section class="py-12 bg-background">
  <div class="container-main">
    <!-- Heading -->
    <div class="text-center mb-8">
      <h2 class="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
        Your Favourite Brands
      </h2>
      <p class="text-muted-foreground">
        Shop from the brands you love and trust
      </p>
    </div>

    <!-- Brands Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {#each favouriteBrands as brand (brand.id)}
        <div
          class="bg-card rounded-xl p-6 flex flex-col items-center justify-center gap-3
                 border border-border/50 hover:border-primary/50 hover:shadow-lg
                 transition-all duration-300 cursor-pointer group"
        >
          <span class="text-4xl group-hover:scale-110 transition-transform duration-300">
            {brand.logo}
          </span>

          <span class="font-medium text-foreground text-sm">
            {brand.name}
          </span>
        </div>
      {/each}
    </div>
  </div>
</section>
