# CapCraft Auto Components Catalog

A professional, high-performance product catalog website for **CapCraft Auto Components**, specializing in fuel tank caps, radiator caps, and automotive fasteners.

## 🚀 Features

* **Dynamic Product Grid**: Automatically renders products from a centralized JavaScript data object.
* **Category Filtering**: Interactive "chips" allow users to filter products by category (e.g., Radiator Caps, Fuel Tank Caps).
* **Live Search**: Real-time search bar to find specific parts by name or material.
* **One-Click Enquiries**: 
    * **WhatsApp Integration**: Automatically generates a pre-filled message with the specific product name.
    * **Email Integration**: Formats a professional subject line for quick RFQs (Request for Quotes).
* **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices using CSS Grid and Flexbox.
* **SEO Ready**: Semantic HTML5 tags and descriptive meta tags for better search engine visibility.

## 🛠️ Tech Stack

* **HTML5**: Semantic structure.
* **CSS3**: Custom properties (variables), Grid, and Flexbox for a modern UI.
* **JavaScript (ES6+)**: Vanilla JS for DOM manipulation, filtering logic, and dynamic rendering (no heavy frameworks required).

## 📂 Project Structure

* `index.html`: The main entry point and page structure.
* `style.css`: Modern styling with a clean, "SaaS-like" aesthetic.
* `script.js`: Contains the product database and the logic for rendering, searching, and filtering.

## ⚙️ Customization

To update the product list or contact details, modify the constants in `script.js`:

```javascript
// Update contact info
const BUSINESS_PHONE_E164 = "+919000000000";
const CONTACT_EMAIL = "your-email@example.com";

// Add or edit products
const PRODUCTS = [
  {
    id: "your-id",
    category: "Category Name",
    name: "Product Name",
    price: "₹ 00",
    moq: "50 Piece",
    img: "image-path.webp",
    specs: ["Spec 1", "Spec 2"],
    blurb: "Short description..."
  },
];
