import user_icon from './user.png'
import search_icon from './search.png'
import React from 'react'
import menu_icon from './menu.png'
import back_icon from './back.png'
import cart_icon from './shopping-cart.png'
import hero1 from './heroimg1.png'
import hero2 from './heroimg2.png'
import hero3 from './heroimg3.png'
import p_img1 from './product/p_img1.png'
import p_img2_1 from './product/p_img2_1.png'
import p_img2_2 from './product/p_img2_2.png'
import p_img2_3 from './product/p_img2_3.png'
import p_img2_4 from './product/p_img2_4.png'
import p_img3 from './product/p_img3.png'
import p_img4 from './product/p_img4.png'
import p_img5 from './product/p_img5.png'
import p_img6 from './product/p_img6.png'
import p_img7 from './product/p_img7.png'
import p_img8 from './product/p_img8.png'
import p_img9 from './product/p_img9.png'
import p_img10 from './product/p_img10.png'
import p_img11 from './product/p_img11.png'
import p_img12 from './product/p_img12.png'
import p_img13 from './product/p_img13.png'
import p_img14 from './product/p_img14.png'
import p_img15 from './product/p_img15.png'
import p_img16 from './product/p_img16.png'
import p_img17 from './product/p_img17.png'
import p_img18 from './product/p_img18.png'
import p_img19 from './product/p_img19.png'
import p_img20 from './product/p_img20.png'
import p_img21 from './product/p_img21.png'
import p_img22 from './product/p_img22.png'
import p_img23 from './product/p_img23.png'
import p_img24 from './product/p_img24.png'
import p_img25 from './product/p_img25.png'
import p_img26 from './product/p_img26.png'
import p_img27 from './product/p_img27.png'
import p_img28 from './product/p_img28.png'
import p_img29 from './product/p_img29.png'
import p_img30 from './product/p_img30.png'
import p_img31 from './product/p_img31.png'
import p_img32 from './product/p_img32.png'
import p_img33 from './product/p_img33.png'
import p_img34 from './product/p_img34.png'
import p_img35 from './product/p_img35.png'
import p_img36 from './product/p_img36.png'
import p_img37 from './product/p_img37.png'
import p_img38 from './product/p_img38.png'
import p_img39 from './product/p_img39.png'
import p_img40 from './product/p_img40.png'
import p_img41 from './product/p_img41.png'
import p_img42 from './product/p_img42.png'
import p_img43 from './product/p_img43.png'
import p_img44 from './product/p_img44.png'
import p_img45 from './product/p_img45.png'
import p_img46 from './product/p_img46.png'
import p_img47 from './product/p_img47.png'
import p_img48 from './product/p_img48.png'
import p_img49 from './product/p_img49.png'
import p_img50 from './product/p_img50.png'
import p_img51 from './product/p_img51.png'
import p_img52 from './product/p_img52.png'
import exchange_icon from './exchange_icon.png'
import quality_icon from './quality_icon.png'
import support_icon from './support_icon.png'
import contact_icon from './contact_img.png'
import star_icon from './star_icon.png'
import star_dull_icon from './star_dull_icon.png'
import bin_icon from './bin_icon.png'
import razorpay_logo from './Razorpay_logo.png'
import stripe_logo from './stripe4.png'

const currency = "$";
const delivery_fee = 10.00;




export const assets = {
    user_icon,
    currency,
    delivery_fee,
    search_icon,
    menu_icon,
    back_icon,
    cart_icon,
    hero1,
    hero2,
    hero3,
    exchange_icon,
    quality_icon,
    support_icon,
    contact_icon,
    currency,
    star_icon,
    star_dull_icon,
    bin_icon,
    razorpay_logo,
    stripe_logo
}



export const products = [
    {
        id: 1,
        name: "Women Round Neck cotton top",
        description: "A comfortable and stylish round neck top made from high-quality cotton.",
        price: 79.99,
        image:[p_img1],
        category:"Women",
        subcategory:"Topwear",
        sizes:["S","M","L","XL"],
        date: "2026-01-15",
        bestSeller: true
    }
    ,
    {
        id: 2,
        name: "Men Oversized Pastel Polo Shirt",
        description: "An ultra-comfortable oversized polo shirt in a soft pastel pink color, featuring a contrasting crisp white collar.",
        price: 29.99,
        image: [p_img2_1, p_img2_2, p_img2_3, p_img2_4],
        category: "Men",
        subcategory: "Topwear",
        sizes: ["M", "L", "XL", "XXL"],
        date: "2026-02-10",
        bestSeller: false
    },
    {
        id: 3,
        name: "Girls Floral Chiffon Flutter Dress",
        description: "A lightweight and airy chiffon dress for girls, adorned with delicate pastel florals and long sheer sleeves.",
        price: 44.99,
        image: [p_img3],
        category: "Kids",
        subcategory: "Dress",
        sizes: ["2Y", "4Y", "6Y", "8Y"],
        date: "2026-03-01",
        bestSeller: true
    },
    {
        id: 4,
        name: "Puma Men Graphic Crew Neck Tee",
        description: "A premium black cotton t-shirt featuring a stylized geometric Puma cat logo graphic on the front.",
        price: 24.99,
        image: [p_img4],
        category: "Men",
        subcategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: "2026-01-20",
        bestSeller: true
    },
    {
        id: 5,
        name: "Puma Women Outline Logo T-Shirt",
        description: "Classic slim-fit performance tee in solid black, highlighting a neon pink outline of the signature Puma cat.",
        price: 24.99,
        image: [p_img5],
        category: "Women",
        subcategory: "Topwear",
        sizes: ["XS", "S", "M", "L"],
        date: "2026-02-18",
        bestSeller: false
    },
    {
        id: 6,
        name: "Girls Smocked Pink Textured Tee",
        description: "A fun and stretchy short-sleeve top featuring an all-over smocked crinkle texture in bright candy pink.",
        price: 19.99,
        image: [p_img6],
        category: "Kids",
        subcategory: "Topwear",
        sizes: ["4Y", "6Y", "8Y", "10Y"],
        date: "2026-03-05",
        bestSeller: false
    },
    {
        id: 7,
        name: "Men Slim Fit Navy Chino Trousers",
        description: "Tailored slim-fit chinos crafted from a stretch-cotton blend, perfect for transitioning from office to evening wear.",
        price: 49.99,
        image: [p_img7],
        category: "Men",
        subcategory: "Bottomwear",
        sizes: ["30", "32", "34", "36"],
        date: "2026-01-05",
        bestSeller: true
    },
    {
        id: 8,
        name: "GAP Men Colorblock Long Sleeve Polo",
        description: "A classic cream-colored long sleeve rugby polo featuring a bold olive green chest stripe and embroidered GAP branding.",
        price: 54.99,
        image: [p_img8],
        category: "Men",
        subcategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: "2026-02-25",
        bestSeller: false
    },
    {
        id: 9,
        name: "Girls Flutter Sleeve Heart Graphic Tee",
        description: "A soft pastel blue cotton tee with playful ruffle sleeves and a sweet floral-filled heart graphic on the chest.",
        price: 17.99,
        image: [p_img9],
        category: "Kids",
        subcategory: "Topwear",
        sizes: ["2Y", "4Y", "6Y", "8Y"],
        date: "2026-03-12",
        bestSeller: true
    },
    {
        id: 10,
        name: "Men Slim Tapered Cargo Joggers",
        description: "Urban utility cargo pants in olive gray, designed with an elastic drawstring waist, zip pockets, and cuffed ankles.",
        price: 45.99,
        image: [p_img10],
        category: "Men",
        subcategory: "Bottomwear",
        sizes: ["28", "30", "32", "34", "36"],
        date: "2026-01-30",
        bestSeller: true
    },{
    id: 11,
    name: "Men Boston Raglan T-Shirt",
    description: "Casual raglan sleeve t-shirt featuring a sporty Boston graphic print.",
    price: 69.99,
    image: [p_img11],
    category: "Men",
    subcategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: "2026-01-20",
    bestSeller: false
  },

  {
    id: 12,
    name: "Men Premium White T-Shirt",
    description: "Minimalist premium cotton t-shirt designed for everyday comfort.",
    price: 59.99,
    image: [p_img12],
    category: "Men",
    subcategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: "2026-01-21",
    bestSeller: true
  },
  {
        id: 13,
        name: "Women Light Blue V-Neck Shirt",
        description: "A breezy, minimalist short-sleeve buttonless shirt featuring a elegant V-neckline and crisp collar detail.",
        price: 32.99,
        image: [p_img13],
        category: "Women",
        subcategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: "2026-04-02",
        bestSeller: true
    },
    {
        id: 14,
        name: "Boys Textured Navy Button-Up",
        description: "A smart-casual seersucker textured short-sleeve shirt in deep navy, perfect worn open over a basic white tee.",
        price: 22.50,
        image: [p_img14],
        category: "Kids",
        subcategory: "Topwear",
        sizes: ["8Y", "10Y", "12Y", "14Y"],
        date: "2026-04-10",
        bestSeller: false
    },
    {
        id: 15,
        name: "Men Tapered Active Track Pants",
        description: "Lightweight performance track pants in deep teal, styled with a striking red-and-white striped elastic waistband.",
        price: 39.99,
        image: [p_img15],
        category: "Men",
        subcategory: "Bottomwear",
        sizes: ["30", "32", "34", "36"],
        date: "2026-04-15",
        bestSeller: true
    },
    {
        id: 16,
        name: "Toddler Girls Lace Trim Ribbed Top",
        description: "A soft, fine-ribbed ivory knit top featuring delicate lace trim on the collar and cuffs, finished with a sweet blue accent bow.",
        price: 18.99,
        image: [p_img16],
        category: "Kids",
        subcategory: "Topwear",
        sizes: ["2Y", "3Y", "4Y", "5Y"],
        date: "2026-04-20",
        bestSeller: false
    },
    {
        id: 17,
        name: "Men Slim Athletic Joggers",
        description: "Sleek black fleece joggers featuring a gray geometric calf graphic and streamlined zip pockets for secure storage.",
        price: 34.99,
        image: [p_img17],
        category: "Men",
        subcategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: "2026-04-25",
        bestSeller: false
    },
    {
        id: 18,
        name: "Boys White Goal Graphic Tee",
        description: "A fun and breathable white activewear t-shirt featuring a repeating stacked 'GOAL!' graphic print across the front.",
        price: 16.50,
        image: [p_img18],
        category: "Kids",
        subcategory: "Topwear",
        sizes: ["6Y", "8Y", "10Y", "12Y"],
        date: "2026-05-01",
        bestSeller: true
    },
    {
        id: 19,
        name: "Boys Lightweight Raglan Tee",
        description: "An everyday moisture-wicking short-sleeve tee featuring athletic raglan sleeves in a versatile heathered charcoal black.",
        price: 15.99,
        image: [p_img19],
        category: "Kids",
        subcategory: "Topwear",
        sizes: ["10Y", "12Y", "14Y"],
        date: "2026-05-04",
        bestSeller: false
    },
    {
        id: 20,
        name: "Women Monochrome Animal Print Trousers",
        description: "Fluid, high-waisted wide-leg trousers adorned with a contemporary black and white abstract leopard print.",
        price: 42.99,
        image: [p_img20],
        category: "Women",
        subcategory: "Bottomwear",
        sizes: ["XS", "S", "M", "L"],
        date: "2026-05-12",
        bestSeller: true
    },
    {
        id: 21,
        name: "Women Burgundy Fleece Zip-Up Jacket",
        description: "A cozy, slim-fit textured fleece jacket in rich burgundy, featuring a high collar and secure zip side pockets.",
        price: 49.99,
        image: [p_img21],
        category: "Women",
        subcategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: "2026-05-18",
        bestSeller: false
    },
    {
        id: 22,
        name: "Women Wide-Leg Teal Culottes",
        description: "Relaxed-fit pull-on pants with a comfortable elastic waistband, cut in a sophisticated deep teal tone.",
        price: 36.99,
        image: [p_img22],
        category: "Women",
        subcategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: "2026-05-24",
        bestSeller: false
    },
    {
        id: 23,
        name: "Boys USA Graphic Mesh Tank Top",
        description: "A breathable, athletic jersey tank top in bright red featuring a bold 'USA' chest graphic, perfect for active days.",
        price: 14.99,
        image: [p_img23],
        category: "Kids",
        subcategory: "Topwear",
        sizes: ["6Y", "8Y", "10Y", "12Y"],
        date: "2026-06-01",
        bestSeller: true
    },
    {
        id: 24,
        name: "Boys Pikachu Baseball Jersey",
        description: "A fun pinstripe baseball-style button shirt featuring a cheerful Pikachu patch on the chest and sporty yellow trim.",
        price: 24.99,
        image: [p_img24],
        category: "Kids",
        subcategory: "Topwear",
        sizes: ["8Y", "10Y", "12Y", "14Y"],
        date: "2026-06-05",
        bestSeller: true
    },
    {
        id: 25,
        name: "Girls Cropped Dance Slogan Sweatshirt",
        description: "A soft cotton-blend cropped sweatshirt in candy pink featuring the minimal text graphic 'Life is better when you dance'.",
        price: 21.99,
        image: [p_img25],
        category: "Kids",
        subcategory: "Topwear",
        sizes: ["8Y", "10Y", "12Y", "14Y"],
        date: "2026-06-12",
        bestSeller: false
    },
    {
        id: 26,
        name: "Women Acid Wash Denim Jacket",
        description: "A stylish cropped denim jacket featuring an authentic light acid wash finish, metal button closures, and a raw hemline.",
        price: 59.99,
        image: [p_img26],
        category: "Women",
        subcategory: "Topwear",
        sizes: ["XS", "S", "M", "L"],
        date: "2026-06-18",
        bestSeller: true
    },
    {
        id: 27,
        name: "Girls Floral Chiffon Flutter Dress",
        description: "A lightweight and airy chiffon dress for girls, adorned with delicate pastel florals and long sheer sleeves.",
        price: 44.99,
        image: [p_img27],
        category: "Kids",
        subcategory: "Dress",
        sizes: ["2Y", "4Y", "6Y", "8Y"],
        date: "2026-06-20",
        bestSeller: false
    },
    {
        id: 28,
        name: "Men Mustard Yellow Puffer Jacket",
        description: "A lightweight yet exceptionally warm quilted puffer jacket featuring a full zip closure and a protective high stand collar.",
        price: 69.99,
        image: [p_img28],
        category: "Men",
        subcategory: "Winterwear",
        sizes: ["M", "L", "XL", "XXL"],
        date: "2026-06-24",
        bestSeller: true
    },
    {
        id: 29,
        name: "Puma Women Outline Logo T-Shirt",
        description: "Classic slim-fit performance tee in solid black, highlighting a neon pink outline of the signature Puma cat.",
        price: 24.99,
        image: [p_img29],
        category: "Women",
        subcategory: "Topwear",
        sizes: ["XS", "S", "M", "L"],
        date: "2026-06-28",
        bestSeller: false
    },
    {
        id: 30,
        name: "Girls Smocked Pink Textured Tee",
        description: "A fun and stretchy short-sleeve top featuring an all-over smocked crinkle texture in bright candy pink.",
        price: 19.99,
        image: [p_img30],
        category: "Kids",
        subcategory: "Topwear",
        sizes: ["4Y", "6Y", "8Y", "10Y"],
        date: "2026-07-02",
        bestSeller: false
    },
    {
        id: 31,
        name: "Puma Men Cyan Fill Logo Tee",
        description: "A crisp white athletic t-shirt in soft cotton crew neck featuring the iconic Puma cat graphic filled with a gradient cyan pattern.",
        price: 26.99,
        image: [p_img31],
        category: "Men",
        subcategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: "2026-07-06",
        bestSeller: true
    },
    {
        id: 32,
        name: "GAP Men Colorblock Long Sleeve Polo",
        description: "A classic cream-colored long sleeve rugby polo featuring a bold olive green chest stripe and embroidered GAP branding.",
        price: 54.99,
        image: [p_img32],
        category: "Men",
        subcategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: "2026-07-10",
        bestSeller: false
    },
    {
        id: 33,
        name: "Girls Flutter Sleeve Heart Graphic Tee",
        description: "A soft pastel blue cotton tee with playful ruffle sleeves and a sweet floral-filled heart graphic on the chest.",
        price: 17.99,
        image: [p_img33],
        category: "Kids",
        subcategory: "Topwear",
        sizes: ["2Y", "4Y", "6Y", "8Y"],
        date: "2026-07-15",
        bestSeller: false
    },
    {
        id: 34,
        name: "Women Minimalist Grey V-Neck Tee",
        description: "An essential grey cotton-blend t-shirt with a sharp V-neckline, rolled cuffs, and a subtle embroidered geometric accent on the chest.",
        price: 22.99,
        image: [p_img34],
        category: "Women",
        subcategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: "2026-07-20",
        bestSeller: true
    },
    {
        id: 35,
        name: "Nike Women Swoosh Full-Zip Track Jacket",
        description: "Athletic performance track jacket in a deep teal colorway, featuring a high collar, ribbed hem, and an oversized crisp white Nike Swoosh logo.",
        price: 65.00,
        image: [p_img35],
        category: "Women",
        subcategory: "Winterwear",
        sizes: ["XS", "S", "M", "L", "XL"],
        date: "2026-07-25",
        bestSeller: true
    },
    {
        id: 36,
        name: "Women Faux-Fur Hooded Puffer Jacket",
        description: "A premium quilted puffer jacket in a soft blush pink shade, designed with a warm, plush faux-fur lined hood and zip pockets.",
        price: 74.99,
        image: [p_img36],
        category: "Women",
        subcategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: "2026-08-02",
        bestSeller: false
    },
    {
        id: 37,
        name: "Women Light Blue V-Neck Shirt",
        description: "A breezy, minimalist short-sleeve buttonless shirt featuring a elegant V-neckline and crisp collar detail.",
        price: 32.99,
        image: [p_img37],
        category: "Women",
        subcategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: "2026-08-10",
        bestSeller: false
    },
    {
        id: 38,
        name: "Boys Textured Navy Button-Up",
        description: "A smart-casual seersucker textured short-sleeve shirt in deep navy, perfect worn open over a basic white tee.",
        price: 22.50,
        image: [p_img38],
        category: "Kids",
        subcategory: "Topwear",
        sizes: ["8Y", "10Y", "12Y", "14Y"],
        date: "2026-08-14",
        bestSeller: true
    },
    {
        id: 39,
        name: "Men Micro-Print Slim Fit Shirt",
        description: "A sharp off-white long-sleeve dress shirt patterned with a subtle all-over dark micro-print, completed with a structured collar.",
        price: 38.99,
        image: [p_img39],
        category: "Men",
        subcategory: "Topwear",
        sizes: ["S", "M", "L", "XL", "XXL"],
        date: "2026-08-20",
        bestSeller: false
    },
    {
        id: 40,
        name: "Men Sleek Hooded Utility Vest",
        description: "A versatile black sleeveless jacket featuring a drawstring hood, full-front zip closure, and streamlined zip utility pockets.",
        price: 45.99,
        image: [p_img40],
        category: "Men",
        subcategory: "Winterwear",
        sizes: ["M", "L", "XL"],
        date: "2026-08-25",
        bestSeller: true
    },
    {
        id: 41,
        name: "Men Line Art Face Graphic Tee",
        description: "An urban navy blue crew neck t-shirt featuring a unique vertically aligned abstract fine-line face art print.",
        price: 24.99,
        image: [p_img41],
        category: "Men",
        subcategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: "2026-09-01",
        bestSeller: false
    },
    {
        id: 42,
        name: "Boys White Goal Graphic Tee",
        description: "A fun and breathable white activewear t-shirt featuring a repeating stacked 'GOAL!' graphic print across the front.",
        price: 16.50,
        image: [p_img42],
        category: "Kids",
        subcategory: "Topwear",
        sizes: ["6Y", "8Y", "10Y", "12Y"],
        date: "2026-09-05",
        bestSeller: false
    },
    {
        id: 43,
        name: "Kids High-Waist Paperbag Jeans",
        description: "Comfortable relaxed-fit denim jeans for kids featuring a stylish elasticated paperbag waistband and classic back pockets.",
        price: 29.99,
        image: [p_img43],
        category: "Kids",
        subcategory: "Bottomwear",
        sizes: ["4Y", "6Y", "8Y", "10Y"],
        date: "2026-09-10",
        bestSeller: true
    },
    {
        id: 44,
        name: "Women Lightweight Windbreaker Jacket",
        description: "A chic, dusty rose mock-neck jacket with a zippered front, cinched adjustable drawstring hem, and tab-button cuffs.",
        price: 49.99,
        image: [p_img44],
        category: "Women",
        subcategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: "2026-09-15",
        bestSeller: false
    },
    {
        id: 45,
        name: "Men Colorblock Puffer Hooded Jacket",
        description: "A sporty olive green and grey colorblocked quilted puffer jacket complete with a cozy hood and chest emblem patch.",
        price: 79.99,
        image: [p_img45],
        category: "Men",
        subcategory: "Winterwear",
        sizes: ["M", "L", "XL", "XXL"],
        date: "2026-09-22",
        bestSeller: true
    },
    {
        id: 46,
        name: "Men Suede Mock-Neck Bomber Jacket",
        description: "A sophisticated dark navy faux-suede jacket featuring dual zippered chest accents and a sleek streamlined fit.",
        price: 64.99,
        image: [p_img46],
        category: "Men",
        subcategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: "2026-09-28",
        bestSeller: false
    },
    {
        id: 47,
        name: "Kids Pastel Typography Joggers",
        description: "Soft pink fleece sweatpants for kids, featuring a subtle all-over tonal block-letter typography print and drawstring waist.",
        price: 24.99,
        image: [p_img47],
        category: "Kids",
        subcategory: "Bottomwear",
        sizes: ["5Y", "6Y", "7Y", "8Y", "10Y"],
        date: "2026-10-02",
        bestSeller: false
    },
    {
        id: 48,
        name: "Men Classic Light Wash Denim Jacket",
        description: "A timeless light blue button-down denim jacket featuring light distressing, twin chest pockets, and side welt pockets.",
        price: 54.99,
        image: [p_img48],
        category: "Men",
        subcategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: "2026-10-05",
        bestSeller: true
    },
    {
        id: 49,
        name: "Girls Metallic Heart Print Leggings",
        description: "Stretchy ankle-length black cotton leggings dotted with an adorable all-over mini metallic gold heart pattern.",
        price: 15.99,
        image: [p_img49],
        category: "Kids",
        subcategory: "Bottomwear",
        sizes: ["4Y", "6Y", "8Y", "10Y"],
        date: "2026-10-12",
        bestSeller: true
    },
    {
        id: 50,
        name: "Girls Crinkle Textured Wide-Leg Culottes",
        description: "Breezy sage green wide-leg trousers for girls featuring an all-over crinkle texture and a matching fabric tie belt.",
        price: 27.99,
        image: [p_img50],
        category: "Kids",
        subcategory: "Bottomwear",
        sizes: ["6Y", "8Y", "10Y", "12Y"],
        date: "2026-10-18",
        bestSeller: false
    },
    {
        id: 51,
        name: "Women Classic Satin Bomber Jacket",
        description: "A sleek rose-tinted beige satin bomber jacket featuring a silver zip closure, ribbed trim, and a classic utility sleeve pocket.",
        price: 59.99,
        image: [p_img51],
        category: "Women",
        subcategory: "Winterwear",
        sizes: ["XS", "S", "M", "L"],
        date: "2026-10-25",
        bestSeller: true
    },
    {
        id: 52,
        name: "Men Deep Indigo Denim Jacket",
        description: "A structured slim-fit trucker jacket crafted in a rich dark indigo wash with contrasting amber stitching detail.",
        price: 56.50,
        image: [p_img52],
        category: "Men",
        subcategory: "Topwear",
        sizes: ["S", "M", "L", "XL", "XXL"],
        date: "2026-11-01",
        bestSeller: false
    }
];