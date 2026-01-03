<script lang="ts">
  import ProductGrid from "./ProductGrid.svelte";
  import type { Product } from "$lib/data/products";

  const products: Product[] = [
    {
      id: 1,
      name: "ProSound Elite Headphones",
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.8,
      reviews: 2547,
      inStock: true,
      badge: "25% OFF",
      image: "/products/headphones.png"
    },
    {
      id: 2,
      name: "Arctic Breeze Smart AC",
      price: 549.99,
      originalPrice: 699.99,
      rating: 4.6,
      reviews: 1823,
      inStock: true,
      badge: "BEST SELLER",
      image: "/products/airconditioner.png"
    },
    {
      id: 3,
      name: "SoundWave Pro Speaker",
      price: 179.99,
      originalPrice: 229.99,
      rating: 4.7,
      reviews: 3421,
      inStock: true,
      badge: "NEW",
      image: "/products/speaker.png"
    },
    {
      id: 4,
      name: "ChefMaster Pro Mixer",
      price: 449.99,
      rating: 4.9,
      reviews: 987,
      inStock: true,
      image: "/products/mixer.png"
    }
  ];
</script>

<ProductGrid {products} title="Featured Products" />
