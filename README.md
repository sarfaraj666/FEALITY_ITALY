# FEALITY ITALY — Luxury steel-led interior concept website

## Pages
- `index.html` or `kitchen.html`: Kitchen landing page (both point to the kitchen collection)
- `about.html`: About Us / steel material education
- `wardrobe.html`: Wardrobe catalogue
- `vanity.html`: Vanity catalogue

## Run
Open this folder in Visual Studio Code and use the Live Server extension with `index.html`, or use `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

## What works
- Responsive text-only FEALITY ITALY navbar and mobile menu
- Four fully linked pages
- Filtering by collection style on Kitchen, Wardrobe, and Vanity
- Working detail pop-up for every catalogue design
- Scroll reveals (reduced-motion-aware)
- FAQ accordions and external Instagram enquiry CTA

## IMPORTANT BEFORE CLIENT DELIVERY
- The photography currently points to *online Unsplash sample photos*. The website needs internet access to display them. Many represent general interior inspiration, NOT authenticated FEALITY steel products. Replace all sample photos with licensed FEALITY product photographs before using the site as a genuine product catalogue.
- Product names, style descriptors, and finish directions are **illustrative** and must not be presented as verified inventory.
- A placeholder Instagram profile is used for enquiries. Replace it with the exact verified business account if necessary. WhatsApp number/address, prices, warranties, certifications and claims have intentionally not been invented.
- This is **frontend only** (HTML, CSS, JavaScript). There is no backend, checkout, account system or form submission.
- Typographic design and catalogue structure take inspiration from publicly visible luxury interior design conventions, including the user-provided Würfel page, but do not replicate their brand artwork, copyright imagery, copy, logos or source code.

## Update images
Search each HTML file for `images.unsplash.com` and replace URL with actual authorized files in `assets/images/`. For hero, change the `background-image` style on `.hero-media` and `.contact-photo`.

## Reference
https://www.wurfel.in/modular_kitchen_design.php
