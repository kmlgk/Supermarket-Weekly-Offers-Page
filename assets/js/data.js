/* =========================================================
   FreshMart — sample data for weekly offers, categories,
   branches, testimonials, blog. Swap with real/CMS data.
   ========================================================= */

const FM_CATEGORIES = [
  { id: 'produce', name: 'Fruits & Vegetables', icon: 'ri-apple-line', count: 128, color: 'emerald', img: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500&q=65&auto=format&fit=crop' },
  { id: 'dairy', name: 'Dairy & Eggs', icon: 'ri-drop-line', count: 64, color: 'sky', img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&q=65&auto=format&fit=crop' },
  { id: 'bakery', name: 'Bakery', icon: 'ri-cake-2-line', count: 42, color: 'amber', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=65&auto=format&fit=crop' },
  { id: 'snacks', name: 'Snacks & Sweets', icon: 'ri-cup-line', count: 96, color: 'orange', img: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=500&q=65&auto=format&fit=crop' },
  { id: 'meat', name: 'Meat & Seafood', icon: 'ri-restaurant-2-line', count: 58, color: 'rose', img: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&q=65&auto=format&fit=crop' },
  { id: 'beverages', name: 'Beverages', icon: 'ri-goblet-line', count: 74, color: 'indigo', img: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=500&q=65&auto=format&fit=crop' },
  { id: 'frozen', name: 'Frozen Foods', icon: 'ri-snowflake-line', count: 39, color: 'cyan', img: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=500&q=65&auto=format&fit=crop' },
  { id: 'household', name: 'Household', icon: 'ri-home-smile-2-line', count: 51, color: 'lime', img: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&q=65&auto=format&fit=crop' },
];

/* Each service carries everything both services.html (card) and
   service-details.html (full page, selected via ?service=<id>) need,
   so there is exactly one place to edit per service. */
const FM_SERVICES = [
  {
    id: 'weekly-offers', icon: 'ri-price-tag-3-line', color: 'emerald',
    title: 'Weekly Offers', text: 'Rotating discounts across produce, dairy, bakery and more — every single week.',
    hook: 'Fresh discounts that actually move the needle on your basket',
    subtitle: "Fresh discounts across every aisle, refreshed every Monday morning.",
    img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=900&q=65&auto=format&fit=crop',
    overview: [
      "Every Monday, FreshMart refreshes its offers across every category — from fresh produce to household essentials. Prices are chosen to genuinely lower your basket total, not just create the appearance of a discount.",
      "Loyalty members get 24-hour early access before offers go public in-store, so Silver and Gold members can plan their shopping trip around the best deals before anyone else sees them.",
    ],
    features: [
      { icon: 'ri-refresh-line', title: 'Refreshed Every Week', text: 'New discounts land every Monday across all 8 categories.' },
      { icon: 'ri-vip-crown-2-line', title: 'Loyalty Early Access', text: 'Silver and Gold members see offers 24 hours before anyone else.' },
      { icon: 'ri-price-tag-3-line', title: 'Real Savings, Verified', text: 'Every discount is benchmarked against a 90-day average price.' },
      { icon: 'ri-notification-3-line', title: 'Deal Alerts', text: 'Opt in to get notified the moment your favorite items go on offer.' },
    ],
    info: { heading: 'How offers are chosen', rows: [
      ['Refresh cycle', 'Every Monday, 12:01 AM'],
      ['Loyalty early access', '24 hours (Silver & Gold)'],
      ['Average weekly savings', '15% off basket total'],
      ['Categories covered', 'All 8 aisles, every week'],
    ] },
    faqs: [
      { q: 'How do weekly offers work?', a: 'Every Monday we refresh discounts across every category — from fresh produce to household essentials. Loyalty members get 24-hour early access.' },
      { q: 'Can I combine weekly offers with loyalty discounts?', a: 'Absolutely — weekly offers and loyalty points stack, so Silver and Gold members save even more.' },
      { q: "Where can I see this week's offers?", a: 'Check the Weekly Offers section on our homepage, or browse in-store — every shelf tag shows the current discount.' },
    ],
  },
  {
    id: 'delivery', icon: 'ri-truck-line', color: 'amber',
    title: 'Home Delivery', text: 'Same-day delivery slots, free over $50, available at every branch nationwide.',
    hook: 'Groceries delivered fresh, right to your door',
    subtitle: 'Same-day delivery from your nearest FreshMart branch, free on orders over $50.',
    img: 'https://images.unsplash.com/photo-1543168256-418811576931?w=900&q=65&auto=format&fit=crop',
    overview: [
      "FreshMart's home delivery brings this week's offers straight to your kitchen. Choose a delivery slot that suits you, and our pickers hand-select the freshest produce and best-priced essentials from your nearest branch.",
      "Delivery is completely free on orders over $50, with flat-rate delivery on smaller baskets. Loyalty members enjoy priority slots and reduced delivery fees on every tier.",
    ],
    features: [
      { icon: 'ri-time-line', title: 'Same-Day Slots', text: 'Order before 2 PM for delivery the same evening.' },
      { icon: 'ri-shield-check-line', title: 'Freshness Guarantee', text: "Not happy with an item? We'll refund or replace it free." },
      { icon: 'ri-map-pin-time-line', title: 'Live Order Tracking', text: 'Track your basket from picking to your doorstep in real time.' },
      { icon: 'ri-vip-crown-2-line', title: 'Loyalty Priority', text: 'Gold members get first access to limited delivery slots.' },
    ],
    info: { heading: 'Delivery pricing', rows: [
      ['Orders over $50', 'Free'],
      ['Orders $25 – $50', '$3.99'],
      ['Orders under $25', '$5.99'],
    ] },
    faqs: [
      { q: 'What areas does delivery cover?', a: 'Every FreshMart branch delivers within a 10 km radius. Enter your postcode at checkout to confirm coverage.' },
      { q: 'Can I schedule a delivery for later in the week?', a: 'Yes, you can book any available slot up to 7 days in advance.' },
      { q: 'What if an item is out of stock?', a: 'Our pickers will contact you to suggest a substitute or refund the item automatically.' },
    ],
  },
  {
    id: 'click-collect', icon: 'ri-store-2-line', color: 'sky',
    title: 'Click & Collect', text: 'Order online and collect in-store within the hour, no queue required.',
    hook: 'Skip the queue — your basket, ready when you are',
    subtitle: 'Order online, skip the queue, and collect in-store within the hour.',
    img: 'https://images.unsplash.com/photo-1506617420156-8e4536971650?w=900&q=65&auto=format&fit=crop',
    overview: [
      "Click & Collect lets you shop the full FreshMart range online and pick it up at a dedicated counter in your nearest branch — no queueing, no waiting at checkout.",
      "Most orders are ready within 60 minutes, and you'll get a notification the moment your basket is packed and waiting for you.",
    ],
    features: [
      { icon: 'ri-timer-flash-line', title: 'Ready in 60 Minutes', text: 'Most orders are packed and ready within the hour.' },
      { icon: 'ri-parking-line', title: 'Dedicated Pickup Bay', text: 'Drive-up collection points at every branch car park.' },
      { icon: 'ri-smartphone-line', title: 'Order Tracking', text: "Get a notification the moment your basket is ready." },
      { icon: 'ri-refund-2-line', title: 'Free to Use', text: 'No service fee — pay only for what you order.' },
    ],
    info: { heading: 'Collection windows', rows: [
      ['Standard pickup', 'Within 60 minutes'],
      ['Priority pickup (Gold)', 'Within 30 minutes'],
      ['Service fee', 'Free'],
      ['Available at', 'All 48+ branches'],
    ] },
    faqs: [
      { q: 'Do I need to pay online or in-store?', a: 'You can pay online at checkout, or in-store when you collect — whichever you prefer.' },
      { q: 'How will I know my order is ready?', a: "You'll get an SMS and app notification the moment your basket is packed." },
      { q: 'Can I change my order after placing it?', a: 'Yes, up to 30 minutes after ordering, by contacting your branch directly.' },
    ],
  },
  {
    id: 'loyalty', icon: 'ri-vip-crown-2-line', color: 'rose',
    title: 'Loyalty Rewards', text: 'Earn points on every purchase and redeem instantly at checkout.',
    hook: 'Turn every purchase into real, stackable savings',
    subtitle: 'Earn points on every purchase and redeem them for instant discounts.',
    img: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=900&q=65&auto=format&fit=crop',
    overview: [
      "Every FreshMart purchase earns loyalty points, whether you shop in-store, online, or via click & collect. Points build automatically the moment you scan your card at checkout.",
      "Upgrade to Silver or Gold to earn faster, unlock early access to weekly offers, and enjoy perks like free delivery and birthday rewards.",
    ],
    features: [
      { icon: 'ri-coins-line', title: 'Points on Every Purchase', text: 'Up to 5 points per $1 spent on the Gold tier.' },
      { icon: 'ri-flashlight-line', title: 'Instant Redemption', text: 'Use points for discounts the moment you have enough.' },
      { icon: 'ri-gift-line', title: 'Birthday Rewards', text: 'A free reward voucher every year, automatically.' },
      { icon: 'ri-vip-crown-2-line', title: 'Tiered Perks', text: 'Silver and Gold unlock early access and free delivery.' },
    ],
    info: { heading: 'Membership tiers', rows: [
      ['Basic', '1 point per $1 — Free'],
      ['Silver', '2.5 points per $1 — $4.99/mo'],
      ['Gold Elite', '5 points per $1 — $9.99/mo'],
      ['Points expiry', '24 months'],
    ] },
    faqs: [
      { q: 'Do points expire?', a: 'Points remain valid for 24 months from the date they are earned.' },
      { q: 'Can I share my card with family?', a: 'Gold Elite members can add up to 3 linked family cards sharing the same balance.' },
      { q: 'How do I upgrade my tier?', a: 'Visit the Pricing page or ask at any branch loyalty desk — upgrades apply instantly.' },
    ],
  },
  {
    id: 'bulk', icon: 'ri-briefcase-4-line', color: 'indigo',
    title: 'Bulk & Wholesale', text: 'Special pricing for cafes, offices and large families buying in bulk.',
    hook: 'Bulk pricing that just works, every single order',
    subtitle: 'Special case-quantity pricing for cafes, offices and large families.',
    img: 'https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?w=900&q=65&auto=format&fit=crop',
    overview: [
      "Running a cafe, office kitchen, or just feeding a big family? Our bulk & wholesale pricing kicks in automatically once your order crosses the case-quantity threshold on eligible items.",
      "Set up a standing weekly or monthly order and we'll have it ready for collection or delivery on the same schedule every time — no need to reorder manually.",
    ],
    features: [
      { icon: 'ri-price-tag-2-line', title: 'Automatic Case Pricing', text: 'Discounts apply the moment you hit case quantity.' },
      { icon: 'ri-repeat-line', title: 'Standing Orders', text: 'Set a recurring weekly or monthly order once.' },
      { icon: 'ri-file-list-3-line', title: 'Itemized Invoicing', text: 'Get a proper VAT invoice for every bulk order.' },
      { icon: 'ri-truck-line', title: 'Scheduled Delivery', text: 'Same time, same day, every week — automatically.' },
    ],
    info: { heading: 'Bulk pricing basics', rows: [
      ['Minimum for case pricing', '6+ units per item'],
      ['Typical bulk discount', '10–20% off shelf price'],
      ['Invoicing', 'Itemized, VAT included'],
      ['Account setup', 'Free for business accounts'],
    ] },
    faqs: [
      { q: 'Do I need a business account?', a: 'No — anyone can access case pricing, but business accounts also get invoicing and standing orders.' },
      { q: 'Which items qualify for bulk pricing?', a: 'Most packaged and shelf-stable items; ask your branch for the current bulk-eligible list.' },
      { q: 'Can I set up a recurring order?', a: 'Yes, speak to any branch team member to set a weekly or monthly standing order.' },
    ],
  },
  {
    id: 'meal-planning', icon: 'ri-restaurant-line', color: 'lime',
    title: 'Meal Planning', text: "Weekly recipe bundles built entirely around this week's best offers.",
    hook: 'Know exactly what to cook, and exactly what it costs',
    subtitle: "Weekly recipe bundles built entirely around this week's best offers.",
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=65&auto=format&fit=crop',
    overview: [
      "Every week, our in-house team builds a set of simple recipes designed entirely around whatever is on offer that week — so you always know exactly what to cook, and exactly what it'll cost.",
      "Each bundle lists every ingredient with quantities, so you can add the whole recipe to your basket in one tap, whether you're shopping in-store or online.",
    ],
    features: [
      { icon: 'ri-restaurant-line', title: 'Weekly Recipe Bundles', text: '3 new recipes every week, built around current offers.' },
      { icon: 'ri-shopping-basket-2-line', title: 'One-Tap Basket', text: 'Add every ingredient for a recipe in a single click.' },
      { icon: 'ri-timer-line', title: '30-Minute Meals', text: 'Every recipe is designed to cook in 30 minutes or less.' },
      { icon: 'ri-heart-pulse-line', title: 'Nutrition Info Included', text: 'Calories and macros listed for every recipe.' },
    ],
    info: { heading: 'What you get each week', rows: [
      ['New recipes', '3 per week'],
      ['Average cook time', '30 minutes'],
      ['Average bundle cost', '$18–$24 for 4 servings'],
      ['Where to find it', 'Blog + weekly newsletter'],
    ] },
    faqs: [
      { q: 'Is meal planning free?', a: "Yes, it's a free service included for every FreshMart shopper." },
      { q: 'Can I customize a recipe for allergies?', a: 'Each recipe lists common allergens, and most ingredients have an easy swap suggested.' },
      { q: 'Where do I find this week\'s recipes?', a: 'Check our Blog or subscribe to the weekly newsletter — new recipes post every Monday.' },
    ],
  },
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
  { id: 1, title: '7 Smart Ways to Stretch Your Weekly Grocery Budget', excerpt: 'Simple, practical habits that help you cut your grocery bill without cutting corners on quality.', category: 'Savings Tips', date: 'Jul 12, 2026', readTime: '5 min read', author: 'Sarah Bloom', img: 'https://images.unsplash.com/photo-1543168256-418811576931?w=600&q=65&auto=format&fit=crop' },
  { id: 2, title: 'Seasonal Produce Guide: What to Buy This July', excerpt: 'Get the best flavor and the best price by shopping fruits and vegetables that are in season right now.', category: 'Fresh Produce', date: 'Jul 08, 2026', readTime: '4 min read', author: 'James Okafor', img: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=65&auto=format&fit=crop' },
  { id: 3, title: 'How Loyalty Points Actually Save You Money', excerpt: 'A behind-the-scenes look at how our loyalty tiers stack discounts on top of weekly offers.', category: 'Loyalty Program', date: 'Jul 02, 2026', readTime: '6 min read', author: 'Lena Petrova', img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&q=65&auto=format&fit=crop' },
  { id: 4, title: '5-Minute Meal Prep Using This Week\'s Deals', excerpt: 'Turn this week\'s discounted essentials into three fast, healthy dinners the whole family will love.', category: 'Recipes', date: 'Jun 27, 2026', readTime: '7 min read', author: 'Sarah Bloom', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=65&auto=format&fit=crop' },
  { id: 5, title: 'Inside Our Cold Chain: How We Keep Produce Fresh', excerpt: 'From farm to shelf — the logistics behind FreshMart\'s same-day fresh produce promise.', category: 'Behind the Scenes', date: 'Jun 20, 2026', readTime: '5 min read', author: 'James Okafor', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=65&auto=format&fit=crop' },
  { id: 6, title: 'Bakery Basics: Reading Best-Before vs Use-By Dates', excerpt: 'Know the difference so you never waste food — or money — again.', category: 'Food Safety', date: 'Jun 14, 2026', readTime: '3 min read', author: 'Lena Petrova', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=65&auto=format&fit=crop' },
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
