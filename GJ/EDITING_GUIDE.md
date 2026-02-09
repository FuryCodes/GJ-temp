# Quick Editing Guide - Ganga Jewellers Website

## How to Edit Content

### Step 1: Enable Edit Mode
- Look for the **pencil icon** button in the bottom-right corner of any page
- Click it to enable edit mode
- The button will change to an "X" icon when edit mode is active

### Step 2: Edit Content
- Once edit mode is enabled, you'll see dashed outlines around editable content
- **Click on any text or image** you want to edit
- A popup window will appear with the current content
- Make your changes
- Click "Save Changes"

### Step 3: Exit Edit Mode
- Click the "X" icon button again to exit edit mode

## What Can Be Edited?

### Text Content
- Business name and tagline
- All headings and descriptions
- Product names, descriptions, and prices
- Testimonials
- Contact information
- Footer content

### Images (Image updation)
- **To update an image:** Turn on Edit Mode (pencil icon), then **click the image** you want to change.
- A popup titled **"Update Image"** will open with a field **"Image URL:"**.
- Paste the full URL of the new image (e.g. `https://example.com/photo.jpg`) and click Save.
- Editable images: category images, product images, gallery images, about images.
- Changes are saved in the browser and will show on refresh.

## Content Areas by Page

### Homepage (index.html)
- Hero section titles and descriptions
- Business name and contact info
- Category names and descriptions
- About section text
- Testimonials
- Footer content

### About Page (about.html)
- Page title and subtitle
- Story sections
- Values section
- Team member information

### Products Page (products.html)
- Page title
- Product names, descriptions, and prices
- Product images

### Gallery Page (gallery.html)
- Page title and description
- Gallery images

### Contact Page (contact.html)
- Page title
- Contact information (address, phone, email)
- Business hours
- Map location (update iframe src)

## Tips

1. **Save Frequently**: Changes are saved to browser storage automatically
2. **Test Changes**: Refresh the page to see your changes persist
3. **Image URLs**: Use full URLs (starting with http:// or https://) for images
4. **Backup**: Your content is saved in browser localStorage - clear browser data will remove it
5. **Multiple Pages**: Some content appears on multiple pages (like footer) - edit it on any page

## Browser Storage

Your edits are saved in the browser's localStorage. This means:
- ✅ Changes persist when you refresh the page
- ✅ Changes are saved per browser/device
- ⚠️ Clearing browser data will remove your edits
- ⚠️ Different browsers have separate storage

## Need Help?

- Check the README.md for more detailed information
- Review the code comments in the HTML files
- All editable content has `data-content` attribute

---

**Happy Editing!** 🎨
