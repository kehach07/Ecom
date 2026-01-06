<script>
  import { page } from "$app/stores";
  import { products, categories } from "$lib/data/products";
  import ProductGrid from "$lib/components/ProductGrid.svelte";
  import FilterSidebar from "$lib/components/FilterSidebar.svelte";
  import TrendingBanner from "$lib/components/TrendingBanner.svelte";

  $: categoryId = $page.params.categoryId;
  $: filteredProducts = products.filter(p => p.category === categoryId);
  $: categoryName =
    categories.find(c => c.id === categoryId)?.name ?? "Products";
</script>

<TrendingBanner {categoryName} />

<div class="container-main flex gap-4 mt-4">
  <FilterSidebar selectedCategory={categoryId} />
  <ProductGrid products={filteredProducts} title={categoryName} />
</div>
