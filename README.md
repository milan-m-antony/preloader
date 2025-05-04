# Preloader Component

This project contains a beautiful and accessible preloader component that you can easily integrate into your website.

## Files

- `preloader.css`: Contains all the CSS styles and keyframes for the preloader animation.
- `preloader.js`: Contains the JavaScript to handle the preloader fade-out and removal after the page loads.
- `preloader.html`: Example HTML file demonstrating how to use the preloader with instructions.

## How to Use

1. **Include the Preloader HTML**

Add the following HTML snippet inside the `<body>` tag of your webpage where you want the preloader to appear:

```html
<div id="preloader" role="alert" aria-live="assertive" aria-busy="true">
  <div class="spinner" aria-hidden="true"></div>
  <div class="text-xl font-semibold tracking-wide">Loading...</div>
</div>
```

2. **Include the CSS**

Link the `preloader.css` stylesheet in the `<head>` section of your HTML:

```html
<link rel="stylesheet" href="preloader.css" />
```

3. **Include the JavaScript**

Add the `preloader.js` script before the closing `</body>` tag:

```html
<script src="preloader.js"></script>
```

4. **Fonts and Icons**

Make sure to include the required fonts and icons in your `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
```

## How It Works

- The preloader shows a spinner with animated glowing colors and a gradient animated "Loading..." text.
- It covers the entire viewport with a smooth animated gradient background.
- Once the page fully loads, the preloader fades out and is removed from the DOM.
- A fallback timeout ensures the preloader hides even if the load event is delayed.

## Customization

- You can customize colors, sizes, and animation timings by editing the `preloader.css` file.
- The text inside the preloader can be changed by modifying the HTML snippet.

## License

This preloader component is free to use and modify for any project.

---

Feel free to reach out if you need any help integrating or customizing the preloader.
