# Ganga Jewellers Website

A complete, editable website for Ganga Jewellers, inspired by modern jewelry website designs. This website features a built-in content editor that allows you to easily update text, images, and other content without needing to edit code.

## Features

- **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Built-in Content Editor** - Edit content directly on the page with a simple click
- **Modern UI/UX** - Beautiful, professional design with smooth animations
- **Multiple Pages** - Home, About, Products, Gallery, and Contact pages
- **Product Filtering** - Filter products by category (Gold, Diamond, Platinum, Silver)
- **Image Gallery** - Lightbox gallery with filtering capabilities
- **Contact Form** - Ready-to-use contact form
- **SEO Friendly** - Proper meta tags and semantic HTML

## Getting Started

### Installation

1. Simply open `index.html` in your web browser
2. No server or build process required - it's a static website

### Using the Content Editor

1. Click the **Edit Mode** button (pencil icon) in the bottom-right corner
2. Click on any content marked with `data-content` attribute to edit it
3. Make your changes in the modal that appears
4. Click "Save Changes" to save
5. Your changes are automatically saved to browser localStorage

### Editable Content Areas

All content with the `data-content` attribute can be edited:

- Business name and tagline
- Contact information (phone, email, address)
- Hero section text and images
- Product information
- About page content
- Testimonials
- Footer content
- Social media links
- And much more!

### File Structure

```
gangajewellers/
├── index.html          # Homepage
├── about.html          # About page
├── products.html       # Products/Collections page
├── gallery.html        # Gallery page
├── contact.html        # Contact page
├── css/
│   └── style.css      # Main stylesheet
├── js/
│   ├── main.js        # Main JavaScript functionality
│   └── editor.js      # Content editor functionality
└── README.md          # This file
```

## Customization

### Changing Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #d4af37;    /* Gold color */
    --secondary-color: #1a1a1a;   /* Dark background */
    --text-color: #333;           /* Text color */
    /* ... */
}
```

### Adding Products

1. Open `products.html`
2. Copy an existing product card
3. Update the `data-content` attributes with your product information
4. Add your product images

### Adding Gallery Images

1. Open `gallery.html`
2. Copy an existing gallery item
3. Update the image source in the `data-content` attribute
4. Set the appropriate `data-category` attribute

## Content Backup

Your edited content is saved in browser localStorage. To backup:

1. Open browser console (F12)
2. Run: `localStorage.getItem('gangajewellers_content')`
3. Copy the JSON output
4. Save it to a file

To restore:
1. Open browser console
2. Paste your JSON content
3. Run: `localStorage.setItem('gangajewellers_content', YOUR_JSON)`
4. Refresh the page

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- Replace placeholder images with your actual product images
- Update the Google Maps embed URL in `contact.html` with your actual location
- Configure the contact form to send emails (requires backend integration)
- All social media links are placeholders - update with your actual profiles

## License

This website template is created for Ganga Jewellers. Customize as needed for your business.

## Support

For questions or customization needs, refer to the code comments or contact your web developer.

---

**Ganga Jewellers** - Crafting Excellence Since 1985
