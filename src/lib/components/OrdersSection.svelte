<script lang="ts">
  import Package from "lucide-svelte/icons/package";
  import Truck from "lucide-svelte/icons/truck";
  import CheckCircle from "lucide-svelte/icons/check-circle";
  import Clock from "lucide-svelte/icons/clock";

  const steps = [
    {
      icon: Package,
      title: "Easy Ordering",
      desc: "Browse thousands of products"
    },
    {
      icon: CheckCircle,
      title: "Secure Payment",
      desc: "Multiple payment options"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      desc: "Free shipping on orders"
    },
    {
      icon: Clock,
      title: "Easy Returns",
      desc: "30-day hassle-free returns"
    }
  ];
</script>

<section class="bg-sky-50 py-6">
  <div class="container-main">
    <div class="flex items-center gap-6 overflow-x-auto">

      <!-- LEFT TEXT -->
      <div class="min-w-[160px]">
        <h2 class="text-lg font-display font-bold text-foreground">
          How It Works
        </h2>
        <p class="text-sm text-muted-foreground">
          Simple & seamless
        </p>
      </div>

      <!-- STEPS -->
      <div class="flex gap-4 flex-nowrap">
        {#each steps as step, i}
          <div
            class="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm min-w-[220px]"
          >
            <!-- ICON -->
            <div class="relative">
              <div class="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                <svelte:component
                  this={step.icon}
                  class="h-5 w-5 text-sky-400"
                />
              </div>
              <span
                class="absolute -top-1 -left-1 h-5 w-5 rounded-full bg-sky-500 text-white text-xs font-bold flex items-center justify-center"
              >
                {i + 1}
              </span>
            </div>

            <!-- TEXT -->
            <div class="leading-tight">
              <p class="text-sm font-semibold text-foreground">
                {step.title}
              </p>
              <p class="text-xs text-muted-foreground">
                {step.desc}
              </p>
            </div>
          </div>
        {/each}
      </div>

    </div>
  </div>
</section>
