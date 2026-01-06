export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  features: string[];
  inStock: boolean;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "ProSound Elite Headphones",
    category: "headphones",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 2547,
    image: "/src/lib/assets/products/headphones.png",
    description: "Experience premium audio quality with our flagship wireless over-ear headphones. Featuring active noise cancellation, 40-hour battery life, and memory foam ear cushions for ultimate comfort during extended listening sessions.",
    features: [
      "Active Noise Cancellation with Transparency Mode",
      "40-hour battery life with quick charge",
      "Premium memory foam ear cushions",
      "Hi-Res Audio certified",
      "Multi-device Bluetooth connectivity",
      "Built-in voice assistant support"
    ],
    inStock: true,
    badge: "25% OFF"
  },
  {
    id: "2",
    name: "Arctic Breeze Smart AC",
    category: "airconditioner",
    price: 549.99,
    originalPrice: 699.99,
    rating: 4.6,
    reviews: 1823,
    image: "/src/lib/assets/products/airconditioner.png",
    description: "Smart split air conditioner with Wi-Fi connectivity. Control your home temperature from anywhere using our mobile app. Energy-efficient inverter technology saves up to 40% on electricity bills.",
    features: [
      "Wi-Fi enabled smart control",
      "Inverter technology for energy savings",
      "4-way air swing for even cooling",
      "Sleep mode with auto temperature adjustment",
      "Anti-bacterial filter",
      "Voice control compatible"
    ],
    inStock: true,
    badge: "BEST SELLER"
  },
  {
    id: "3",
    name: "SoundWave Pro Speaker",
    category: "speaker",
    price: 179.99,
    originalPrice: 229.99,
    rating: 4.7,
    reviews: 3421,
    image: "/src/lib/assets/products/speaker.png",
    description: "Portable Bluetooth speaker with 360-degree immersive sound. Waterproof design perfect for outdoor adventures. Experience deep bass and crystal-clear highs wherever you go.",
    features: [
      "360-degree immersive audio",
      "IPX7 waterproof rating",
      "24-hour battery life",
      "Built-in microphone for calls",
      "Dual pairing for stereo sound",
      "RGB ambient lighting"
    ],
    inStock: true,
    badge: "NEW"
  },
  {
    id: "4",
    name: "ChefMaster Pro Mixer",
    category: "mixer",
    price: 449.99,
    rating: 4.9,
    reviews: 987,
    image: "/src/lib/assets/products/mixer.png",
    description: "Professional-grade stand mixer with 10 speed settings and a powerful 800W motor. Perfect for baking enthusiasts and home chefs who demand restaurant-quality results.",
    features: [
      "800W powerful motor",
      "10 speed settings with soft start",
      "5.5L stainless steel bowl",
      "Includes dough hook, flat beater, wire whip",
      "Tilt-head design for easy access",
      "Splash guard included"
    ],
    inStock: true
  },
  {
    id: "5",
    name: "VisionMax 4K Smart TV",
    category: "smarttv",
    price: 899.99,
    originalPrice: 1199.99,
    rating: 4.8,
    reviews: 4562,
    image: "/src/lib/assets/products/smarttv.png",
    description: "55-inch 4K Ultra HD Smart TV with HDR10+ and Dolby Vision. Stream your favorite content with built-in apps. Stunning picture quality brings movies and games to life.",
    features: [
      "4K Ultra HD resolution",
      "HDR10+ and Dolby Vision",
      "120Hz refresh rate for gaming",
      "Built-in streaming apps",
      "Voice remote with AI assistant",
      "Slim bezel design"
    ],
    inStock: true,
    badge: "HOT DEAL"
  },
  {
    id: "6",
    name: "ScanPro Document Scanner",
    category: "scanner",
    price: 329.99,
    rating: 4.5,
    reviews: 756,
    image: "/src/lib/assets/products/scanner.png",
    description: "High-speed document scanner with automatic document feeder. Scan up to 30 pages per minute with exceptional clarity. Perfect for home office and small business needs.",
    features: [
      "30 pages per minute scanning",
      "50-sheet automatic document feeder",
      "Duplex scanning capability",
      "USB and Wi-Fi connectivity",
      "OCR software included",
      "Compact space-saving design"
    ],
    inStock: true
  },
  {
    id: "7",
    name: "Galaxy Ultra Smartphone",
    category: "smartphone",
    price: 1099.99,
    originalPrice: 1299.99,
    rating: 4.9,
    reviews: 8934,
    image: "/src/lib/assets/products/smartphone.png",
    description: "Flagship smartphone with revolutionary camera system and all-day battery. Experience the future of mobile technology with our fastest processor and stunning edge-to-edge display.",
    features: [
      "200MP main camera with AI enhancement",
      "6.8-inch Dynamic AMOLED display",
      "5000mAh battery with 45W fast charging",
      "S Pen included",
      "IP68 water resistance",
      "5G connectivity"
    ],
    inStock: true,
    badge: "15% OFF"
  },
  {
    id: "8",
    name: "ProBook Elite Laptop",
    category: "laptop",
    price: 1299.99,
    originalPrice: 1499.99,
    rating: 4.8,
    reviews: 3256,
    image: "/src/lib/assets/products/laptop.png",
    description: "Ultra-thin professional laptop with stunning Retina display. Powered by the latest processor for seamless multitasking. Perfect for creative professionals and business users.",
    features: [
      "15.6-inch 4K Retina Display",
      "Latest Gen Intel i7 Processor",
      "32GB DDR5 RAM",
      "1TB NVMe SSD Storage",
      "Thunderbolt 4 ports",
      "All-day battery life (12+ hours)"
    ],
    inStock: true,
    badge: "NEW ARRIVAL"
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "headphones", name: "Electronics" },
  { id: "airconditioner", name: "Home Appliances" },
  { id: "speaker", name: "Audio" },
  { id: "mixer", name: "Kitchen" },
  { id: "smarttv", name: "Smart TVs" },
  { id: "scanner", name: "Office" },
  { id: "smartphone", name: "Mobiles" },
  { id: "laptop", name: "Laptops" },
  { id: "groceries", name: "Groceries" },
  { id: "fashion", name: "Fashion" },
  { id: "furniture", name: "Furniture" },
  { id: "bikes", name: "Bikes" },
  { id: "cars", name: "Cars" },
  { id: "fridge", name: "Refrigerators" },
  { id: "clothes", name: "Clothes" },
  { id: "accessories", name: "Accessories" },
];

export const customerReviews = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "SJ",
    rating: 5,
    comment: "Amazing shopping experience! The delivery was super fast and the product quality exceeded my expectations.",
    product: "ProSound Elite Headphones",
    date: "2 days ago"
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: "MC",
    rating: 5,
    comment: "Best prices I've found anywhere. The customer service team was incredibly helpful when I had questions.",
    product: "Galaxy Ultra Smartphone",
    date: "1 week ago"
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    avatar: "ER",
    rating: 4,
    comment: "Great selection of products. The EMI options made it easy to afford the laptop I wanted.",
    product: "ProBook Elite Laptop",
    date: "2 weeks ago"
  },
  {
    id: "4",
    name: "David Kim",
    avatar: "DK",
    rating: 5,
    comment: "I've been shopping here for years. Reliable, trustworthy, and always great deals!",
    product: "VisionMax 4K Smart TV",
    date: "3 weeks ago"
  }
];

export const favouriteBrands = [
  { id: "1", name: "Apple", logo: "🍎" },
  { id: "2", name: "Samsung", logo: "📱" },
  { id: "3", name: "Sony", logo: "🎧" },
  { id: "4", name: "LG", logo: "📺" },
  { id: "5", name: "Nike", logo: "👟" },
  { id: "6", name: "Adidas", logo: "⚽" },
  { id: "7", name: "Bosch", logo: "🔧" },
  { id: "8", name: "Philips", logo: "💡" },
  { id: "9", name: "Dell", logo: "💻" },
  { id: "10", name: "HP", logo: "🖨️" },
];
