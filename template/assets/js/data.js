/* =========================================================
   FreshMart — sample data for weekly offers, categories,
   branches, testimonials, blog. Swap with real/CMS data.
   ========================================================= */

const FM_CATEGORIES = [
  { id: 'produce', name: 'Fruits & Vegetables', icon: 'ri-apple-line', count: 128, color: 'emerald' },
  { id: 'dairy', name: 'Dairy & Eggs', icon: 'ri-drop-line', count: 64, color: 'sky' },
  { id: 'bakery', name: 'Bakery', icon: 'ri-cake-2-line', count: 42, color: 'amber' },
  { id: 'snacks', name: 'Snacks & Sweets', icon: 'ri-cup-line', count: 96, color: 'orange' },
  { id: 'meat', name: 'Meat & Seafood', icon: 'ri-restaurant-2-line', count: 58, color: 'rose' },
  { id: 'beverages', name: 'Beverages', icon: 'ri-goblet-line', count: 74, color: 'indigo' },
  { id: 'frozen', name: 'Frozen Foods', icon: 'ri-snowflake-line', count: 39, color: 'cyan' },
  { id: 'household', name: 'Household', icon: 'ri-home-smile-2-line', count: 51, color: 'lime' },
];

const FM_DEALS = [
  { id: 1, name: 'Sweet Valencia Oranges', cat: 'produce', catLabel: 'Produce', unit: '1 kg bag', price: 2.49, oldPrice: 3.99, discount: 38, icon: 'ri-apple-line', badge: 'Best Seller', rating: 4.8 },
  { id: 2, name: 'Farm Fresh Whole Milk', cat: 'dairy', catLabel: 'Dairy', unit: '1 L carton', price: 1.19, oldPrice: 1.69, discount: 30, icon: 'ri-drop-line', badge: 'New', rating: 4.6 },
  { id: 3, name: 'Sourdough Artisan Loaf', cat: 'bakery', catLabel: 'Bakery', unit: '500 g', price: 2.99, oldPrice: 4.29, discount: 30, icon: 'ri-cake-2-line', badge: '', rating: 4.9 },
  { id: 4, name: 'Crunchy Potato Chips', cat: 'snacks', catLabel: 'Snacks', unit: 'Family pack', price: 1.79, oldPrice: 2.59, discount: 31, icon: 'ri-cup-line', badge: 'Hot Deal', rating: 4.5 },
  { id: 5, name: 'Grass-Fed Beef Mince', cat: 'meat', catLabel: 'Meat', unit: '500 g pack', price: 5.49, oldPrice: 7.99, discount: 31, icon: 'ri-restaurant-2-line', badge: '', rating: 4.7 },
  { id: 6, name: 'Cold Pressed Orange Juice', cat: 'beverages', catLabel: 'Beverages', unit: '1 L bottle', price: 2.19, oldPrice: 3.29, discount: 33, icon: 'ri-goblet-line', badge: 'New', rating: 4.6 },
  { id: 7, name: 'Belgian Waffles Frozen', cat: 'frozen', catLabel: 'Frozen', unit: '6 pieces', price: 3.29, oldPrice: 4.49, discount: 27, icon: 'ri-snowflake-line', badge: '', rating: 4.4 },
  { id: 8, name: 'Lavender Fabric Softener', cat: 'household', catLabel: 'Household', unit: '2 L bottle', price: 3.99, oldPrice: 5.99, discount: 33, icon: 'ri-home-smile-2-line', badge: 'Best Seller', rating: 4.8 },
  { id: 9, name: 'Organic Baby Spinach', cat: 'produce', catLabel: 'Produce', unit: '200 g pack', price: 1.49, oldPrice: 2.19, discount: 32, icon: 'ri-plant-line', badge: 'Organic', rating: 4.7 },
  { id: 10, name: 'Aged Cheddar Cheese', cat: 'dairy', catLabel: 'Dairy', unit: '250 g block', price: 3.49, oldPrice: 4.99, discount: 30, icon: 'ri-drop-line', badge: '', rating: 4.8 },
  { id: 11, name: 'Chocolate Chip Cookies', cat: 'bakery', catLabel: 'Bakery', unit: '400 g box', price: 2.29, oldPrice: 3.49, discount: 34, icon: 'ri-cake-2-line', badge: 'Hot Deal', rating: 4.9 },
  { id: 12, name: 'Sparkling Mineral Water', cat: 'beverages', catLabel: 'Beverages', unit: '6 x 500 ml', price: 2.99, oldPrice: 3.99, discount: 25, icon: 'ri-goblet-line', badge: '', rating: 4.5 },
];

const FM_BRANCHES = [
  { id: 1, name: 'FreshMart — Downtown', address: '221 Market Street, City Center', hours: '7:00 AM – 11:00 PM', phone: '+1 (555) 010-2200', distance: '1.2 km', status: 'open', lat: 40.7128, lng: -74.006 },
  { id: 2, name: 'FreshMart — Riverside', address: '58 Riverside Avenue, Riverside', hours: '7:00 AM – 10:00 PM', phone: '+1 (555) 010-2201', distance: '3.4 km', status: 'open', lat: 40.7328, lng: -74.02 },
  { id: 3, name: 'FreshMart — Northgate Mall', address: '12 Northgate Plaza, Northside', hours: '9:00 AM – 9:00 PM', phone: '+1 (555) 010-2202', distance: '5.1 km', status: 'closed', lat: 40.75, lng: -73.99 },
  { id: 4, name: 'FreshMart — Harbor View', address: '9 Harbor View Road, Bayside', hours: '24 Hours', phone: '+1 (555) 010-2203', distance: '6.8 km', status: 'open', lat: 40.70, lng: -74.03 },
];

const FM_TESTIMONIALS = [
  { id: 1, name: 'Amelia Carter', role: 'Loyalty Member — Gold', avatarBg: 'from-emerald-400 to-teal-500', quote: 'The weekly offers save my family real money every single week. The loyalty points make grocery runs feel like a game we always win.', rating: 5 },
  { id: 2, name: 'Daniel Osei', role: 'Verified Shopper', avatarBg: 'from-amber-400 to-orange-500', quote: 'Click & collect is ridiculously fast, and the app always shows me the freshest deals before they hit the shelves.', rating: 5 },
  { id: 3, name: 'Priya Nair', role: 'Loyalty Member — Silver', avatarBg: 'from-sky-400 to-indigo-500', quote: 'I love the branch locator — I always know which store near me has the best stock and shortest queues.', rating: 4 },
  { id: 4, name: 'Marco Rossi', role: 'Verified Shopper', avatarBg: 'from-rose-400 to-pink-500', quote: 'Fresh produce, fair prices, and a rewards program that actually rewards you. FreshMart earned a customer for life.', rating: 5 },
];

const FM_BLOG_POSTS = [
  { id: 1, title: '7 Smart Ways to Stretch Your Weekly Grocery Budget', excerpt: 'Simple, practical habits that help you cut your grocery bill without cutting corners on quality.', category: 'Savings Tips', date: 'Jul 12, 2026', readTime: '5 min read', author: 'Sarah Bloom', img: 'budget' },
  { id: 2, title: 'Seasonal Produce Guide: What to Buy This July', excerpt: 'Get the best flavor and the best price by shopping fruits and vegetables that are in season right now.', category: 'Fresh Produce', date: 'Jul 08, 2026', readTime: '4 min read', author: 'James Okafor', img: 'produce' },
  { id: 3, title: 'How Loyalty Points Actually Save You Money', excerpt: 'A behind-the-scenes look at how our loyalty tiers stack discounts on top of weekly offers.', category: 'Loyalty Program', date: 'Jul 02, 2026', readTime: '6 min read', author: 'Lena Petrova', img: 'loyalty' },
  { id: 4, title: '5-Minute Meal Prep Using This Week\'s Deals', excerpt: 'Turn this week\'s discounted essentials into three fast, healthy dinners the whole family will love.', category: 'Recipes', date: 'Jun 27, 2026', readTime: '7 min read', author: 'Sarah Bloom', img: 'meal' },
  { id: 5, title: 'Inside Our Cold Chain: How We Keep Produce Fresh', excerpt: 'From farm to shelf — the logistics behind FreshMart\'s same-day fresh produce promise.', category: 'Behind the Scenes', date: 'Jun 20, 2026', readTime: '5 min read', author: 'James Okafor', img: 'coldchain' },
  { id: 6, title: 'Bakery Basics: Reading Best-Before vs Use-By Dates', excerpt: 'Know the difference so you never waste food — or money — again.', category: 'Food Safety', date: 'Jun 14, 2026', readTime: '3 min read', author: 'Lena Petrova', img: 'bakery' },
];

const FM_PRICING = [
  {
    id: 'basic', name: 'Basic Card', price: 0, period: 'Free forever',
    tagline: 'Start earning on every visit', featured: false,
    features: ['1 point per $1 spent', 'Weekly offers by email', 'Digital receipts', 'Standard checkout lane'],
  },
  {
    id: 'silver', name: 'Silver Member', price: 4.99, period: '/ month',
    tagline: 'Best for weekly shoppers', featured: true,
    features: ['2.5 points per $1 spent', 'Early access to weekly deals', 'Free click & collect', 'Birthday reward voucher', 'Priority checkout lane'],
  },
  {
    id: 'gold', name: 'Gold Elite', price: 9.99, period: '/ month',
    tagline: 'Maximum savings & perks', featured: false,
    features: ['5 points per $1 spent', '24h early deal access', 'Free home delivery', 'Dedicated concierge line', 'Exclusive Gold-only offers', 'Annual loyalty bonus box'],
  },
];

const FM_STATS = [
  { id: 1, value: 48, suffix: '+', label: 'Branches Nationwide' },
  { id: 2, value: 320000, suffix: '+', label: 'Happy Loyalty Members' },
  { id: 3, value: 15, suffix: '%', label: 'Average Weekly Savings' },
  { id: 4, value: 12, suffix: ' yrs', label: 'Serving Fresh Since' },
];
