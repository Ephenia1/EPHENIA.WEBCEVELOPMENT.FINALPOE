# Brew & Bean Coffee Co. — WEDE5020 POE (Part 1, 2 and 3)

## Project overview
Brew & Bean is a small, hypothetical coffee shop website concept. The site provides information about the business, its menu, an order-enquiry process and contact details. This project builds on the supplied Part 1 HTML foundation and Part 2 CSS design.

## Student information
- Student name: Kgabopula Phukubje
- Module: WEDE5020 — Web Development (Introduction)
- Project: Brew & Bean Coffee Co.
- Part: Part 3 — Enhancing Functionality and SEO
- Student number / group: Add your details before submission.

## Website pages
| Page | Purpose |
|---|---|
| `index.html` | Home page, welcome content, feature highlights and image gallery/lightbox |
| `about.html` | Organisation overview, mission, vision, values and interactive FAQ accordion |
| `services.html` | Menu categories with live search and category filters |
| `enquiry.html` | Validated order enquiry, request summary and Netlify form processing |
| `contact.html` | Contact information, interactive map, validated contact form |

## Features implemented for Part 3
- **Interactive elements:** responsive mobile navigation and accessible FAQ accordion.
- **Interactive map:** Leaflet map using OpenStreetMap tiles on the contact page, plus an external directions link.
- **Gallery lightbox:** responsive gallery with a keyboard-accessible native dialog.
- **Dynamic content/search:** live menu text search and category filters; the result count updates as filters change.
- **SEO:** unique page titles, meta descriptions, meta-keywords (included because the assessment rubric explicitly requests them), robots directives, semantic headings, descriptive image filenames/alt text, Open Graph metadata, `robots.txt` and `sitemap.xml`.
- **Enquiry form:** required fields, email and phone validation, date and quantity limits, contact preferences, optional services, character counter and a dynamic request summary. It does not invent a price; staff must confirm current pricing and stock/collection availability.
- **Contact form:** name, email, optional telephone, message type and message validation. Netlify Forms is configured for hosted submissions.
- **Accessibility:** skip link, labels, keyboard focus styles, status/error announcements, accessible button states and reduced-motion support.
- **Security basics:** external links use `rel="noopener noreferrer"`; Netlify security headers are configured in `netlify.toml`.

## File structure
```text
Brew_and_Bean_PART3/
├── index.html
├── about.html
├── services.html
├── enquiry.html
├── contact.html
├── success.html
├── robots.txt
├── sitemap.xml
├── netlify.toml
├── css/style.css
├── js/main.js
└── images/
    ├── logo.svg
    ├── freshly-brewed-coffee.png
    ├── fresh-baked-pastries.png
    ├── celebration-chocolate-cake.png
    └── coffee-shop-feature.png
```

## How to run locally
1. Extract the project folder.
2. Open the folder in Visual Studio Code or another code editor.
3. Open `index.html` in a browser, or use a local static server (recommended for testing map and form behaviour).
4. Test every navigation link, menu filter, FAQ item, gallery image and form.
5. The Leaflet map requires an internet connection to load its library and map tiles. If it fails, the Google Maps directions link remains available.

## Forms: important deployment setup
Both forms use Netlify Forms (`data-netlify="true"`). For real hosted submissions:
1. Deploy this folder to Netlify.
2. In Netlify, open **Forms** and confirm that `order-enquiry` and `contact-message` are detected after a deployment. If they are not detected, trigger a new deploy after checking the form markup.
3. In Netlify form notifications, add the intended business email address `hello@brewandbean.co.za` as the notification recipient (only if this mailbox exists and is controlled by the organisation).
4. Submit test enquiries from the deployed website and verify that submissions appear in Netlify and notification emails arrive.

A static website cannot send email directly by itself. Netlify receives the form submission; email notifications must be enabled in the Netlify dashboard. When opened directly as a local `file://` page, JavaScript opens a pre-filled email draft as a fallback. This local fallback requires an email application and does not silently send the message.

## Before final submission — essential checks
- [ ] Add your student number and group above.
- [ ] Replace the placeholder Netlify domain in `robots.txt` and `sitemap.xml` with the actual deployed domain.
- [ ] Confirm the real business email, telephone, opening hours and street address. The supplied address `123 Coffee Street, Polokwane` appears to be project content and has not been independently verified.
- [ ] **Verify the map marker:** it intentionally marks only the approximate Polokwane area. The provided Part 2 embedded map pointed to Rosebank International Polokwane Campus, which conflicts with the stated business address. Do not submit a misleading exact pin. Obtain the real coordinates/address and update the marker in `js/main.js` before publication.
- [ ] Confirm the business has permission to use all supplied photographs and logo assets. Keep evidence of image licences/permissions for your submission.
- [ ] Configure Netlify form email notifications and test both forms on the live URL.
- [ ] Test on desktop, tablet and mobile; capture genuine screenshots for your submission evidence.
- [ ] Run an HTML validator and browser console check; fix any errors found.
- [ ] Push all changes to the lecturer-provided private GitHub repository and include the actual repository and deployed-site URLs in your submission.

## Part 2 feedback and corrections
No lecturer feedback document or screenshot was included with the supplied Part 2 ZIP. Therefore, this project does **not** claim that specific lecturer comments were received. Part 3 review improvements based on inspection of the supplied files include adding missing JavaScript, correcting the map-location ambiguity by marking only an approximate area, adding form labels and validation, improving image naming/alt text, adding responsive interactions and documenting deployment requirements. If the lecturer provided separate feedback, add each comment and the exact correction here before submission.

## Part 3 test checklist
- [ ] All five primary pages load and cross-page navigation works.
- [ ] Mobile menu opens, closes and updates `aria-expanded`.
- [ ] About-page accordion opens and closes using mouse and keyboard.
- [ ] Gallery opens each image in a lightbox and closes with Escape / close button / backdrop.
- [ ] Menu search and all category filters work together and show an empty state when no results match.
- [ ] Enquiry form blocks missing/invalid values and shows a request summary.
- [ ] Contact form blocks missing/invalid values and validates message length.
- [ ] Both forms submit successfully on the deployed Netlify site and email notifications are received.
- [ ] Interactive map loads and exact marker is verified before final publication.
- [ ] No broken images, console errors or horizontal overflow on common mobile widths.
- [ ] Sitemap and robots.txt use the real deployed domain.

## GitHub commit plan
Make regular, meaningful commits in the lecturer-provided repository. Suggested sequence (run from the project root):
```bash
git add . && git commit -m "Part 3: add page-specific SEO metadata"
git add . && git commit -m "Part 3: implement responsive navigation and FAQ accordion"
git add . && git commit -m "Part 3: add gallery lightbox and menu search filters"
git add . && git commit -m "Part 3: add validated order enquiry and request summary"
git add . && git commit -m "Part 3: add validated contact form and Netlify Forms support"
git add . && git commit -m "Part 3: integrate interactive map and SEO files"
git add . && git commit -m "Part 3: document deployment, testing and references"
```
These are suggested commit messages, not commits already made. Commit and push the work yourself to the private lecturer-provided repository so the history is authentic.

## Changelog
| Version | Date | Changes |
|---|---|---|
| 2.0 | 2026 | Preserved the original five-page Brew & Bean website, logo, visual identity and supplied imagery from Part 2. |
| 3.1 | 2026 | Added shared responsive navigation, skip link, semantic page structure and accessible focus states. |
| 3.2 | 2026 | Added interactive FAQ accordion on About page. |
| 3.3 | 2026 | Added responsive image gallery and native dialog lightbox on Home page. |
| 3.4 | 2026 | Added dynamic menu search, category filters, result count and empty state. |
| 3.5 | 2026 | Added order enquiry validation, date/quantity constraints, character count and dynamic request summary. |
| 3.6 | 2026 | Added contact form validation and Netlify Forms integration for hosted submissions. |
| 3.7 | 2026 | Added Leaflet/OpenStreetMap interactive map and documented approximate-location limitation. |
| 3.8 | 2026 | Added unique SEO titles, descriptions, rubric-requested meta keywords, Open Graph metadata, robots.txt and sitemap.xml. |
| 3.9 | 2026 | Renamed image assets descriptively and improved alt text, responsive styling, reduced-motion handling and security headers. |
| 3.10 | 2026 | Added deployment instructions, test checklist, feedback disclosure and Harvard-style references. |

## References (Harvard style — IIE adapted)
Leaflet (n.d.) *Leaflet — an open-source JavaScript library for interactive maps*. Available at: https://leafletjs.com/ (Accessed: 2 November 2026).

Netlify (n.d.) *Forms setup*. Available at: https://docs.netlify.com/forms/setup/ (Accessed: 2 November 2026).

Netlify (n.d.) *Form notifications*. Available at: https://docs.netlify.com/manage/forms/notifications/ (Accessed: 2 November 2026).

OpenStreetMap contributors (n.d.) *Copyright and licence*. Available at: https://www.openstreetmap.org/copyright (Accessed: 2 November 2026).

World Wide Web Consortium (W3C) (n.d.) *Web Content Accessibility Guidelines (WCAG) 2.2*. Available at: https://www.w3.org/TR/WCAG22/ (Accessed: 2 November 2026).

Google Search Central (n.d.) *SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 2 November 2026).

Google Fonts (n.d.) *DM Sans and Playfair Display typefaces*. Available at: https://fonts.google.com/ (Accessed: 2 November 2026).

**Asset sources:** The logo and four images were supplied inside the student's Part 2 project ZIP. Their original creators/licence details were not present in the supplied files. Confirm ownership or obtain permission and add the correct creator/source/licence details before submission; do not claim a licence that has not been verified.
