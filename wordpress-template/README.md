# Loodgieter Nijmegen Spoed - WordPress Template

This folder contains a custom WordPress page template that replicates the landing page design.

## Installation Instructions

### Step 1: Upload the Template File
1. Log into your WordPress admin panel
2. Go to **Appearance** → **Theme File Editor** (or use FTP)
3. Upload `page-startpagina.php` to your theme folder:
   - Location: `wp-content/themes/YOUR-THEME-NAME/`
   - Or for child theme: `wp-content/themes/YOUR-CHILD-THEME-NAME/`

### Step 2: Create or Edit the Page
1. Go to **Pages** → **All Pages**
2. Edit your "Startpagina" page (or create a new page)
3. In the page editor, look for **Page Attributes** in the right sidebar
4. Under **Template**, select **"Startpagina Landing"**
5. Click **Update** or **Publish**

### Step 3: Set as Homepage (Optional)
1. Go to **Settings** → **Reading**
2. Under "Your homepage displays", select **"A static page"**
3. Set "Homepage" to your Startpagina page
4. Click **Save Changes**

## Customization

### Changing Colors
Edit the CSS variables at the top of `page-startpagina.php`:

```css
:root {
  --primary: #0891b2;        /* Main brand color (teal/blue) */
  --primary-foreground: #ffffff;
  --background: #f8fafc;
  --foreground: #1e293b;
  /* ... etc */
}
```

### Changing Phone Number
Search for `024-1234567` in the file and replace with your actual phone number.

### Changing Email
Search for `info@loodgieternijmegen.net` and replace with your actual email.

### Changing the Contact Image
The template uses your existing WordPress image. To change it:
1. Upload a new image to WordPress Media Library
2. Replace the image URL in the template, or
3. The fallback image from your WordPress site will be used automatically

## Features Included
- Responsive design (mobile, tablet, desktop)
- Sticky header with navigation
- Hero section with call-to-action buttons
- About section
- 4 service cards
- 3 feature highlights
- Contact form
- Contact information boxes
- Footer

## Compatibility
- Works with most WordPress themes
- CSS is self-contained (won't conflict with theme styles)
- Uses `get_header()` and `get_footer()` for theme integration

## Support
If you need help customizing the template, you can edit the PHP file directly or contact a WordPress developer.
