// README.md (Updated with new features)
# Data and Analytics Portfolio Website

## New Features
- **FAQs Section**: Added to Home page with questions related to services.
- **About on Home**: Integrated About section on Home with dynamic slideshow (add images to /public/images/).
- **Services Page**: Added "Website Development" service; enhanced visuals with gradients, softer shadows, and colored titles.
- **Projects Page**: Converted to automatic slideshow with multiple project images sliding every 5 seconds.

## Setup
1. Add slideshow images to `/public/images/` (e.g., about1.jpg, about2.jpg).
2. Run 'npm install'
3. Run `npm run dev` to test.

## Customization
- Update `aboutImages` array in `app/page.tsx` with your image paths.
- Adjust FAQ questions/answers in `app/page.tsx`.
- For Services, edit the `services` array.
- For Projects slideshow, update `data/projects.json`; the slideshow cycles through projects.
