<script>
  const categories = [
    { name: 'Electronics', icon: '🔌' },
    { name: 'Home Appliances', icon: '🏠' },
    { name: 'Audio', icon: '🎧' },
    { name: 'Kitchen', icon: '🍳' },
    { name: 'Smart TVs', icon: '📺' },
    { name: 'Office', icon: '🖨️' },
    { name: 'Mobiles', icon: '📱' },
    { name: 'Laptops', icon: '💻' }
  ];
</script>

<div class="bg-white px-6 py-4 border-b">
  <div class="flex gap-4 overflow-x-auto scrollbar-hide">
    {#each categories as cat}
      <button
        class="flex items-center gap-2 px-4 py-2 border rounded-full text-sm whitespace-nowrap hover:bg-gray-100"
      >
        <span>{cat.icon}</span>
        <span>{cat.name}</span>
      </button>
    {/each}
  </div>
</div>
