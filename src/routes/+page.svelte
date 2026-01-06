<script>
  import AdvertisementBanner from "$lib/components/AdvertisementBanner.svelte";
  import OffersSection from "$lib/components/offersSection.svelte";
  import TrendingDeals from "$lib/components/TrendingDeals.svelte";
  import ShopByCategory from "$lib/components/ShopByCategory.svelte";
  import ProductGrid from "$lib/components/ProductGrid.svelte";
  import FavouriteBrands from "$lib/components/FavouriteBrands.svelte";
  import OrdersSection from "$lib/components/OrdersSection.svelte";
  import BankEMISection from "$lib/components/BankEMISection.svelte";
  import { products } from "$lib/data/products.ts";
</script>

<AdvertisementBanner />
<OffersSection />
<TrendingDeals />
<ShopByCategory />
<ProductGrid products={products} title="Featured Products" />
<FavouriteBrands />
<OrdersSection />
<BankEMISection />
