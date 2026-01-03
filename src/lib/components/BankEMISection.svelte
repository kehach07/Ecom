<script lang="ts">
  import { CreditCard } from "lucide-svelte";


  const banks = [
    { name: "HDFC Bank", color: "from-blue-600 to-blue-800" },
    { name: "ICICI Bank", color: "from-orange-500 to-red-600" },
    { name: "SBI", color: "from-blue-500 to-indigo-600" },
    { name: "Axis Bank", color: "from-pink-500 to-purple-600" },
    { name: "Kotak", color: "from-red-500 to-red-700" },
    { name: "Yes Bank", color: "from-blue-400 to-cyan-600" }
  ];
</script>

<section class="py-4 bg-secondary/30">
  <div class="container-main">
    <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">

      <!-- Left label -->
      <div class="flex items-center gap-2 shrink-0">
        <CreditCard class="h-5 w-5 text-primary" />

        <span class="text-sm font-semibold text-foreground">
          Easy Finance & Flexible EMI
        </span>

        <span class="text-xs text-muted-foreground hidden sm:inline">
          | 0% Interest
        </span>
      </div>

      <!-- Bank list -->
      <div class="flex items-center gap-3 overflow-x-auto pb-1 w-full md:w-auto scrollbar-hide">
        {#each banks as bank}
          <div
            class="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border hover:border-primary/50 transition-all shrink-0"
          >
            <div
              class={`w-7 h-7 rounded bg-gradient-to-br ${bank.color} flex items-center justify-center`}
            >
              <span class="text-white font-bold text-[10px]">
                {bank.name.split(" ")[0].substring(0, 2).toUpperCase()}
              </span>
            </div>

            <span class="text-xs font-medium text-foreground whitespace-nowrap">
              {bank.name}
            </span>
          </div>
        {/each}
      </div>

    </div>
  </div>
</section>
