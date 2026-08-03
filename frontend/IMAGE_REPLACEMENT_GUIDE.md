# Image Replacement Guide

This guide explains how to replace the placeholder images with real client images. 
**Do not modify any React components (`.jsx` files) to change images.** 
Simply place the new images in the `src/assets/` folder and update the references in `src/config/siteImages.js`.

## General Recommendations
- **Format:** Use `WebP` for the best performance and quality. `JPG` is also acceptable. Avoid `PNG` for photos as the file size is too large.
- **File Size:** Keep all images under 500KB. Use tools like TinyPNG or Squoosh to compress images before adding them to the project.

---

## 1. Clinic Images (`src/assets/clinic/`)

### Hero Image
- **Variable:** `heroImage`
- **Used on:** Home Page Hero Section
- **Recommended Dimensions:** 1920x1080 (Landscape)
- **Description:** A high-quality, welcoming photo of the clinic reception, exterior, or a happy patient.

### Clinic Interior
- **Variable:** `clinicInterior`
- **Used on:** About Us Page
- **Recommended Dimensions:** 1000x1000 (Square or Portrait)
- **Description:** A clean, bright photo of the clinic interior, treatment room, or waiting area.

### Dental Tourism Hero
- **Variable:** `tourismHero`
- **Used on:** Dental Tourism Page
- **Recommended Dimensions:** 1920x1080 (Landscape)
- **Description:** An iconic image of the city/country (e.g., Taj Mahal) or a travel-related image.

### AI Scanner & Results
- **Variables:** `aiScannerImage`, `aiScanResultsImage`
- **Used on:** Home Page (AI Checkup Section)
- **Recommended Dimensions:** 800x800 (Square)
- **Description:** Photos of the CBCT machine, intraoral scanner, or digital scan results.

---

## 2. Doctor Images (`src/assets/doctors/`)

### Doctor Headshots
- **Variables:** `doctor1Image`, `doctor2Image`, `doctor3Image`, `doctor4Image`
- **Used on:** Home Page (Doctors Section), Our Doctors Page
- **Recommended Dimensions:** 800x1000 (Portrait)
- **Description:** Professional, well-lit headshots of the doctors. Ensure consistent background colors (e.g., solid white or grey) for a premium look.

---

## 3. Service Images (`src/assets/services/`)

### Treatment Photos
- **Variables:** `serviceCheckup`, `serviceCleaning`, `serviceWhitening`, `serviceImplants`, `serviceOrthodontics`, `serviceRootCanal`
- **Used on:** Home Page (Services Grid), Treatments Page
- **Recommended Dimensions:** 800x600 (Landscape)
- **Description:** High-quality photos representing each treatment. Avoid overly graphic clinical photos; focus on clean, modern dentistry or happy patients.

---

## How to Update `siteImages.js`

1. Add your new image to the correct folder (e.g., `src/assets/clinic/hero-real.webp`).
2. Open `src/config/siteImages.js`.
3. Import the image at the top of the file:
   ```javascript
   import realHeroImage from '../assets/clinic/hero-real.webp';
   ```
4. Replace the URL string with the imported variable:
   ```javascript
   // Before
   export const heroImage = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?...";
   
   // After
   export const heroImage = realHeroImage;
   ```
5. Save the file. The website will automatically update everywhere the image is used.
