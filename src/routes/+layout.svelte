<script>
  import "./layout.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import AdvertisementBanner from "$lib/components/AdvertisementBanner.svelte";
  import OffersSection from "$lib/components/offersSection.svelte";
  import TrendingDeals from "$lib/components/TrendingDeals.svelte";
  import ShopByCategory from "$lib/components/ShopByCategory.svelte";
  import ProductGrid from "$lib/components/ProductGrid.svelte";
  import FeaturedProducts from "$lib/components/FeaturedProducts.svelte";
  import FavouriteBrands from "$lib/components/FavouriteBrands.svelte";
  import OrdersSection from "$lib/components/OrdersSection.svelte";
  import BankEMISection from "$lib/components/BankEMISection.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<Navbar></Navbar>
<AdvertisementBanner></AdvertisementBanner>
<OffersSection></OffersSection>
<TrendingDeals />
<ShopByCategory />
<FeaturedProducts />
<FavouriteBrands />
<OrdersSection />
<BankEMISection />
<Footer />
<slot />
