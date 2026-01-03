<script lang="ts">
  import { ChevronLeft, ChevronRight, Heart } from "lucide-svelte";

  // Images (keep them in src/lib/assets/products)
  import smartphoneImg from "$lib/assets/products/smartphone.png";
  import laptopImg from "$lib/assets/products/laptop.png";
  import headphonesImg from "$lib/assets/products/headphones.png";
  import smarttvImg from "$lib/assets/products/smarttv.png";
  import speakerImg from "$lib/assets/products/speaker.png";
  import scannerImg from "$lib/assets/products/scanner.png";

  let scrollRef: HTMLDivElement;
  let likedProducts: number[] = [];

  const trendingProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro Max 256GB",
      description: "6.7 inch Super Retina XDR Display",
      price: 134900,
      originalPrice: 144900,
      discount: 7,
      image: smartphoneImg,
      bankOffer: "FLAT ₹5K CB + 6M NCEMI*",
      bankColor: "bg-teal-600",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      description: "6.8 inch Dynamic AMOLED 2X",
      price: 129999,
      originalPrice: 149999,
      discount: 13,
      image: smartphoneImg,
      bankOffer: "₹3K Instant CB+3M NCEMI*",
      bankColor: "bg-teal-600",
    },
    {
      id: 3,
      name: "MacBook Air M3 15 inch",
      description: "Apple M3 Chip, 8GB RAM, 256GB SSD",
      price: 134990,
      originalPrice: 154900,
      discount: 13,
      image: laptopImg,
      bankOffer: "₹10K Instant CB+6M NCEMI*",
      bankColor: "bg-teal-600",
    },
    {
      id: 4,
      name: "Sony WH-1000XM5 Headphones",
      description: "Industry Leading Noise Cancellation",
      price: 26990,
      originalPrice: 34990,
      discount: 23,
      image: headphonesImg,
      bankOffer: "₹2K Instant CB+3M NCEMI*",
      bankColor: "bg-teal-600",
    },
    {
      id: 5,
      name: "LG C3 65 inch OLED TV",
      description: "4K Smart TV with α9 AI Processor",
      price: 164990,
      originalPrice: 214990,
      discount: 23,
      image: smarttvImg,
      bankOffer: "₹15K CB + 9M NCEMI*",
      bankColor: "bg-teal-600",
    },
    {
      id: 6,
      name: "JBL PartyBox 310",
      description: "Portable Bluetooth Party Speaker",
      price: 34999,
      originalPrice: 44999,
      discount: 22,
      image: speakerImg,
      bankOffer: "Upto 10% OFF OR 6M NCEMI*",
      bankColor: "bg-orange-500",
    },
    {
      id: 7,
      name: "OnePlus 12 5G 256GB",
      description: "Snapdragon 8 Gen 3, 50MP Camera",
      price: 64999,
      originalPrice: 69999,
      discount: 7,
      image: smartphoneImg,
      bankOffer: "₹4K Instant CB+6M NCEMI*",
      bankColor: "bg-teal-600",
    },
    {
      id: 8,
      name: "HP Laser Printer Pro",
      description: "Fast Printing, Wireless Connectivity",
      price: 18999,
      originalPrice: 24999,
      discount: 24,
      image: scannerImg,
      bankOffer: "₹1K CB + 3M NCEMI*",
      bankColor: "bg-teal-600",
    },
  ];

  const bankPartners = [
    { name: "HDFC", color: "bg-blue-700" },
    { name: "ICICI", color: "bg-orange-600" },
    { name: "SBI", color: "bg-blue-900" },
    { name: "Axis", color: "bg-purple-700" },
    { name: "Kotak", color: "bg-red-600" },
  ];

  function scroll(direction: "left" | "right") {
    const amount = 320;
    scrollRef.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  function toggleLike(id: number) {
    likedProducts = likedProducts.includes(id)
      ? likedProducts.filter((p) => p !== id)
      : [...likedProducts, id];
  }

  function formatPrice(price: number) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  }
</script>

<section class="py-8 bg-background">
  <div class="mx-auto max-w-7xl px-4">
    <!-- HEADER -->
    <div class="flex items-start justify-between mb-2">
      <div>
        <h2 class="text-2xl font-bold">
          Best Mobile Deals | Upto ₹10,000 Instant Discount
        </h2>
        <p class="text-muted-foreground mt-1">
          On Multi Bank Credit Card* | 9 Months No Cost EMI
        </p>
      </div>
      <a
        href="/deals"
        class="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
      >
        View All <ChevronRight class="h-4 w-4" />
      </a>
    </div>

    <!-- BANK PARTNERS -->
    <div class="flex items-center gap-2 mb-6">
      <span class="text-sm text-muted-foreground">Bank Partners:</span>
      <div class="flex gap-2">
        {#each bankPartners as bank}
          <span class={`${bank.color} text-white text-xs px-3 py-1 rounded-full font-medium`}>
            {bank.name}
          </span>
        {/each}
      </div>
    </div>

    <!-- CAROUSEL -->
    <div class="relative">
      <button
        class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 shadow-lg rounded-full h-10 w-10 flex items-center justify-center"
        on:click={() => scroll("left")}
        aria-label="Scroll left"
      >
        <ChevronLeft class="h-5 w-5" />
      </button>

      <div
        bind:this={scrollRef}
        class="flex gap-4 overflow-x-auto scrollbar-hide px-8 py-2"
        style="scroll-snap-type: x mandatory;"
      >
        {#each trendingProducts as product}
          <div
            class="flex-shrink-0 w-[280px] bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all"
            style="scroll-snap-align: start;"
          >
            <div class={`${product.bankColor} text-white text-xs px-3 py-1.5 font-medium`}>
              {product.bankOffer}
            </div>

            <div class="relative p-4 bg-muted/30">
              <button
                class="absolute top-2 right-2 p-1.5 bg-background/80 rounded-full"
                on:click={() => toggleLike(product.id)}
                aria-label="Like product"
              >
                <Heart
                  class={`h-5 w-5 ${
                    likedProducts.includes(product.id)
                      ? "fill-red-500 text-red-500"
                      : "text-muted-foreground"
                  }`}
                />
              </button>

              <img
                src={product.image}
                alt={product.name}
                class="w-full h-40 object-contain hover:scale-105 transition-transform"
              />
            </div>

            <div class="p-4">
              <h3 class="font-semibold line-clamp-2">{product.name}</h3>
              <p class="text-sm text-muted-foreground line-clamp-1 mt-1">
                {product.description}
              </p>

              <div class="flex items-center gap-2 mt-3">
                <span class="text-lg font-bold">{formatPrice(product.price)}</span>
                <span class="text-sm line-through text-muted-foreground">
                  {formatPrice(product.originalPrice)}
                </span>
                <span class="text-sm font-semibold text-green-600">
                  {product.discount}% OFF
                </span>
              </div>
            </div>
          </div>
        {/each}
      </div>

      <button
        class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 shadow-lg rounded-full h-10 w-10 flex items-center justify-center"
        on:click={() => scroll("right")}
        aria-label="Scroll right"
      >
        <ChevronRight class="h-5 w-5" />
      </button>
    </div>
  </div>
  
</section>
