# EPHENIA.WEBCEVELOPMENT.FINALPOE
This is my final submission

# Brew & Bean Coffee Co. — WEDE5020 POE (Part 1, 2 and 3)

## 1. Project Overview

Brew & Bean Coffee Co. is a hypothetical coffee shop website developed as part of the WEDE5020 Web Development (Introduction) Portfolio of Evidence (POE).

The website provides visitors with information about the coffee shop, its menu, services, order enquiries and contact details.

The project builds on the HTML foundation developed in Part 1 and the CSS design implemented in Part 2. Part 3 enhances the website through JavaScript functionality, interactive elements, form validation, search and filtering features, accessibility improvements and Search Engine Optimisation (SEO).

## 2. Student Information

- **Student Name:** Kgabopula Phukubje
- **Module:** WEDE5020 — Web Development (Introduction)
- **Project Name:** Brew & Bean Coffee Co.
- **Assessment:** Portfolio of Evidence
- **Current Part:** Part 3 — Enhancing Functionality and SEO
- **Student Number:** Add your student number.
- **Group Number:** Add your group number, if applicable.

## 3. Website Pages

The website consists of the following pages:

| Page | Description |
|---|---|
| index.html | Homepage containing welcome content, feature highlights and an image gallery. |
| about.html | Provides information about the organisation, its mission, vision, values and frequently asked questions. |
| services.html | Displays menu categories with live search and category filtering. |
| enquiry.html | Contains a validated order enquiry form and dynamic request summary. |
| contact.html | Displays contact information, an interactive map and a validated contact form. |
| success.html | Provides a confirmation page after successful form processing. |

## 4. Technologies Used

The project uses the following technologies:

- HTML5 — website structure and semantic elements.
- CSS3 — styling, responsive layouts, typography and animations.
- JavaScript — interactive functionality, DOM manipulation, search, filtering and form validation.
- Leaflet.js — interactive map functionality.
- OpenStreetMap — map tiles and geographical information.
- Netlify Forms — hosted form submission processing.
- Git and GitHub — version control and project management.
- Visual Studio Code — development environment.

## 5. Features Implemented

### 5.1 Interactive Elements

The website includes:
- Responsive navigation menu.
- Interactive FAQ accordion.
- Image gallery with a lightbox.
- Keyboard-accessible interactive elements.
- CSS transitions and responsive visual effects.

### 5.2 Interactive Map

An interactive map is included on the Contact page using Leaflet.js and OpenStreetMap.

The map provides geographical context and is supported by an external directions link.

The exact business location must be verified before publication.

### 5.3 Dynamic Menu Search and Filtering

The Services page includes:
- Live menu search.
- Coffee category filter.
- Cakes category filter.
- Pastries category filter.
- All Items category filter.
- Dynamic result counter.
- Empty-state message when no matching items are found.

The search function works together with the category filters.

### 5.4 Gallery Lightbox

The homepage contains an image gallery.

Visitors can select an image to view it in a larger lightbox display. The lightbox supports keyboard interaction and closing through its close button or Escape key.

### 5.5 Enquiry Form

The enquiry page includes:
- Customer name.
- Email address.
- Telephone number.
- Enquiry category.
- Quantity selection.
- Requested date.
- Additional information.
- Form validation.
- Character counter.
- Dynamic enquiry summary.

The form does not invent prices or guarantee availability. Final pricing and collection arrangements must be confirmed by the business.

### 5.6 Contact Form

The contact page includes:
- Full name.
- Email address.
- Optional telephone number.
- Message type.
- Message field.
- Input validation.
- Submission processing through Netlify Forms when deployed.

### 5.7 Search Engine Optimisation (SEO)

SEO improvements include:
- Page-specific title tags.
- Meta descriptions.
- Meta keywords as required by the assessment rubric.
- Semantic HTML headings.
- Descriptive image filenames.
- Alternative image text.
- Internal navigation links.
- Open Graph metadata.
- robots.txt.
- sitemap.xml.
- Responsive mobile-friendly layouts.

### 5.8 Accessibility

Accessibility improvements include:
- Semantic HTML structure.
- Form labels.
- Keyboard navigation.
- Visible focus states.
- Skip navigation link.
- Accessible interactive controls.
- Status and error announcements.
- Reduced-motion support.

## 6. Project Folder Structure

The project is organised as follows:

```text
Brew_and_Bean_PART3/
│
├── index.html
├── about.html
├── services.html
├── enquiry.html
├── contact.html
├── success.html
│
├── css/
│   └── style.css
│
├── js/
│   └── main.js
│
├── images/
│   ├── logo.svg
│   ├── freshly-brewed-coffee.png
│   ├── fresh-baked-pastries.png
│   ├── celebration-chocolate-cake.png
│   └── coffee-shop-feature.png
│
├── robots.txt
├── sitemap.xml
├── netlify.toml
├── README.md
└── CHANGELOG.md
```

## 7. How to Run the Website

1. Download and extract the project ZIP folder.
2. Open the extracted project folder in Visual Studio Code.
3. Ensure that all project files and folders are present.
4. Open index.html using the Live Server extension.
5. The website should open in a web browser.
6. Navigate through all website pages and test the interactive features.

An internet connection is required for external resources such as Leaflet and OpenStreetMap.

## 8. Form Processing and Deployment

The enquiry and contact forms are configured for Netlify Forms.

To enable hosted form processing:

1. Deploy the website to Netlify.
2. Open the Netlify dashboard.
3. Navigate to the Forms section.
4. Confirm that the following forms are detected:
   - order-enquiry
   - contact-message
5. Configure email notifications using an email address controlled by the business.
6. Submit test forms through the deployed website.
7. Confirm that submissions appear in Netlify.

A static website cannot independently send emails through an ordinary HTML form. Netlify processes hosted submissions, while email notifications must be configured separately.

When running locally, the website may use an email-draft fallback rather than submitting directly to Netlify.

## 9. Testing

The following features should be tested before final submission:

- All website pages load correctly.
- Navigation links work.
- Responsive navigation functions correctly.
- FAQ accordion opens and closes.
- Gallery lightbox displays images correctly.
- Coffee category filter works.
- Cakes category filter works.
- Pastries category filter works.
- All Items filter works.
- Search works together with category filters.
- Enquiry form validates required fields.
- Enquiry summary updates correctly.
- Contact form validates user input.
- Forms submit successfully after deployment.
- Interactive map loads correctly.
- Website displays correctly on desktop, tablet and mobile.
- No broken images or major browser console errors are present.

## 10. Part 2 Feedback and Improvements

The supplied Part 2 project files were reviewed before implementing Part 3.

The improvements include:
- Additional JavaScript functionality.
- Interactive navigation.
- FAQ accordion.
- Image gallery lightbox.
- Dynamic menu search and filtering.
- Improved form validation.
- Interactive map integration.
- SEO metadata.
- Accessibility improvements.
- Improved documentation.

No separate lecturer feedback document was supplied with the project files. Any additional lecturer feedback should be added here together with the corresponding corrections.

## 11. GitHub Version Control

GitHub is used to manage the project source code and track development progress.

Meaningful commits should be made throughout development.

Suggested commit messages:

```bash
git add .
git commit -m "Part 3: add page-specific SEO metadata"

git add .
git commit -m "Part 3: implement responsive navigation and FAQ accordion"

git add .
git commit -m "Part 3: add gallery lightbox and menu search filters"

git add .
git commit -m "Part 3: implement validated enquiry form"

git add .
git commit -m "Part 3: implement validated contact form"

git add .
git commit -m "Part 3: integrate interactive map and SEO files"

git add .
git commit -m "Part 3: update project documentation and testing checklist"
```

These are suggested commit messages. They should only be used after the corresponding changes have been made and reviewed.

The completed project should be pushed to the private GitHub repository provided by the lecturer.

## 12. Changelog

| Version | Changes |
|---|---|
| 2.0 | Preserved the original five-page website structure and visual identity. |
| 3.1 | Added responsive navigation and accessibility improvements. |
| 3.2 | Implemented the interactive FAQ accordion. |
| 3.3 | Added the homepage image gallery and lightbox. |
| 3.4 | Implemented dynamic menu search and category filtering. |
| 3.5 | Added enquiry form validation and dynamic request summary. |
| 3.6 | Added contact form validation and Netlify Forms integration. |
| 3.7 | Integrated Leaflet and OpenStreetMap. |
| 3.8 | Added SEO metadata, robots.txt and sitemap.xml. |
| 3.9 | Improved image filenames, alternative text and responsive styling. |
| 3.10 | Updated documentation, references and deployment instructions. |
| 3.11 | Corrected menu search and category filtering functionality. |
| 3.12 | Updated the contact-page map loading implementation. |

## 13. References

Leaflet (n.d.) *Leaflet — An open-source JavaScript library for interactive maps*. Available at: https://leafletjs.com/ (Accessed: 2 November 2026).

Netlify (n.d.) *Forms setup*. Available at: https://docs.netlify.com/forms/setup/ (Accessed: 2 November 2026).

Netlify (n.d.) *Form notifications*. Available at: https://docs.netlify.com/manage/forms/notifications/ (Accessed: 2 November 2026).

OpenStreetMap contributors (n.d.) *Copyright and licence*. Available at: https://www.openstreetmap.org/copyright (Accessed: 2 November 2026).

World Wide Web Consortium (W3C) (n.d.) *Web Content Accessibility Guidelines (WCAG) 2.2*. Available at: https://www.w3.org/TR/WCAG22/ (Accessed: 2 November 2026).

Google Search Central (n.d.) *SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 2 November 2026).

Google Fonts (n.d.) *Google Fonts*. Available at: https://fonts.google.com/ (Accessed: 2 November 2026).

**Image and logo assets:** The supplied project images and logo were retained from the Part 2 project files. Their original creator and licence details must be verified before final submission.

## 14. Final Submission Checklist

- [ ] Student number and group details completed.
- [ ] All project files included.
- [ ] All website pages tested.
- [ ] Search and category filters tested.
- [ ] Enquiry form tested.
- [ ] Contact form tested.
- [ ] Interactive map location verified.
- [ ] SEO files updated with the actual deployed domain.
- [ ] Images and logo permissions verified.
- [ ] README.md completed.
- [ ] CHANGELOG.md updated.
- [ ] Meaningful GitHub commits made.
- [ ] Project pushed to the lecturer-provided repository.
- [ ] Website deployed.
- [ ] Desktop, tablet and mobile screenshots captured.
- [ ] GitHub repository and live website links prepared for submission.

---

**Project:** Brew & Bean Coffee Co.  
**Module:** WEDE5020 — Web Development (Introduction)  
**Student:** Ephenia Motau
