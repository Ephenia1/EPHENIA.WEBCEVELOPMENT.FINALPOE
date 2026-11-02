/* Brew & Bean - Part 3 JavaScript enhancements */
(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const toast = (message) => {
    const el = $('#site-toast'); if (!el) return;
    el.textContent = message; el.classList.add('is-visible');
    window.clearTimeout(toast.timer); toast.timer = window.setTimeout(() => el.classList.remove('is-visible'), 3200);
  };

  // Current year and accessible mobile navigation.
  const year = $('[data-current-year]'); if (year) year.textContent = new Date().getFullYear();
  const toggle = $('.nav-toggle'), nav = $('#primary-navigation');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      toggle.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('is-open', !expanded);
    });
    nav.addEventListener('click', (event) => { if (event.target.closest('a')) { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Open navigation'); } });
  }

  // Accordion: one answer open at a time.
  $$('[data-accordion] .accordion-item button').forEach((button) => {
    button.addEventListener('click', () => {
      const panel = button.closest('.accordion-item').querySelector('.accordion-panel');
      const shouldOpen = button.getAttribute('aria-expanded') !== 'true';
      $$('[data-accordion] .accordion-item button').forEach((other) => {
        other.setAttribute('aria-expanded', 'false');
        other.closest('.accordion-item').querySelector('.accordion-panel').hidden = true;
      });
      button.setAttribute('aria-expanded', String(shouldOpen)); panel.hidden = !shouldOpen;
    });
  });

  // Gallery lightbox with keyboard and backdrop support.
  const lightbox = $('#lightbox');
  if (lightbox) {
    const image = $('#lightbox-image'), caption = $('#lightbox-caption');
    $$('[data-lightbox-gallery] .gallery-item').forEach((item) => item.addEventListener('click', () => {
      image.src = item.dataset.full; image.alt = item.querySelector('img').alt;
      caption.textContent = item.dataset.caption || ''; lightbox.showModal();
    }));
    $('.lightbox-close', lightbox).addEventListener('click', () => lightbox.close());
    lightbox.addEventListener('click', (event) => { if (event.target === lightbox) lightbox.close(); });
    lightbox.addEventListener('close', () => { image.removeAttribute('src'); });
  }

  // Search and category filtering for menu cards.
  const menuGrid = $('#menu-grid');
  if (menuGrid) {
    const search = $('#menu-search');
    const cards = $$('.menu-card', menuGrid);
    const buttons = $$('.filter-button');
    const resultCount = $('#menu-result-count');
    const emptyState = $('#menu-empty');
    let activeFilter = 'all';

    const filterMenu = () => {
      const term = (search?.value || '').trim().toLocaleLowerCase();
      let visible = 0;

      cards.forEach((card) => {
        const category = (card.dataset.category || '').trim().toLocaleLowerCase();
        const searchableText = `${card.dataset.search || ''} ${card.textContent || ''}`.toLocaleLowerCase();
        const matchesCategory = activeFilter === 'all' || category === activeFilter;
        const matchesText = term === '' || searchableText.includes(term);
        const shouldShow = matchesCategory && matchesText;
        card.hidden = !shouldShow;
        if (shouldShow) visible += 1;
      });

      if (resultCount) resultCount.textContent = `Showing ${visible} ${visible === 1 ? 'menu category' : 'menu categories'}`;
      if (emptyState) emptyState.hidden = visible !== 0;
    };

    if (search) search.addEventListener('input', filterMenu);
    buttons.forEach((button) => button.addEventListener('click', () => {
      activeFilter = (button.dataset.filter || 'all').trim().toLocaleLowerCase();
      buttons.forEach((otherButton) => {
        const active = otherButton === button;
        otherButton.classList.toggle('is-active', active);
        otherButton.setAttribute('aria-pressed', String(active));
      });
      filterMenu();
    }));
    filterMenu();
  }

  // Form helpers: clear field errors and display readable feedback.
  const setError = (form, message) => { const box = $(`[id$="-error"]`, form); if (box) { box.textContent = message; box.hidden = !message; } };
  const validateForm = (form) => {
    const invalid = [...form.querySelectorAll('input, select, textarea')].filter((field) => !field.checkValidity());
    if (invalid.length) {
      invalid[0].focus(); invalid[0].reportValidity();
      setError(form, `Please check the highlighted information. ${invalid.length} field${invalid.length === 1 ? ' needs' : 's need'} attention.`);
      return false;
    }
    setError(form, ''); return true;
  };
  const bindCounter = (fieldId, counterId, max) => {
    const field = $(`#${fieldId}`), counter = $(`#${counterId}`); if (!field || !counter) return;
    const update = () => { counter.textContent = String(field.value.length); if (field.value.length > max) counter.classList.add('over-limit'); else counter.classList.remove('over-limit'); };
    field.addEventListener('input', update); update();
  };
  bindCounter('message', 'message-count', 1000); bindCounter('contactmessage', 'contact-message-count', 1500);

  // Order enquiry: validate, summarise selected request and show clear next steps.
  const enquiry = $('#enquiry-form');
  if (enquiry) {
    const product = $('#product'), quantity = $('#quantity'), date = $('#eventdate'), summary = $('#estimate-panel');
    const updateSummary = () => {
      const category = product.value || 'a menu item'; const qty = Math.max(1, Number(quantity.value) || 1);
      const dateText = date.value ? new Date(`${date.value}T12:00:00`).toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' }) : 'a date to be confirmed';
      summary.innerHTML = `<strong>Your enquiry summary</strong><p>You are enquiring about <b>${qty}</b> item(s) in the <b>${category}</b> category for <b>${dateText}</b>.</p><p class="estimate-disclaimer">No price is quoted at this stage. Our team will confirm the exact products, pricing and collection availability before an order is accepted.</p>`;
    };
    [product, quantity, date].forEach((field) => field.addEventListener('change', updateSummary));
    const params = new URLSearchParams(location.search); const preset = params.get('product');
    if (preset && [...product.options].some((o) => o.value.toLowerCase() === preset.toLowerCase())) product.value = [...product.options].find((o) => o.value.toLowerCase() === preset.toLowerCase()).value;
    const today = new Date(); const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10); date.min = localToday;
    updateSummary();
    enquiry.addEventListener('submit', (event) => {
      if (!validateForm(enquiry)) { event.preventDefault(); return; }
      updateSummary();
      // Netlify receives the form when deployed; local preview uses an email draft fallback.
      if (location.protocol === 'file:') {
        event.preventDefault();
        const data = new FormData(enquiry); const body = [...data.entries()].filter(([k]) => k !== 'form-name').map(([k,v]) => `${k}: ${v}`).join('\n');
        location.href = `mailto:hello@brewandbean.co.za?subject=${encodeURIComponent('Brew & Bean order enquiry')}&body=${encodeURIComponent(body)}`;
        toast('Your email application should open with the enquiry details.');
      }
    });
  }

  const contact = $('#contact-form');
  if (contact) contact.addEventListener('submit', (event) => {
    if (!validateForm(contact)) { event.preventDefault(); return; }
    if (location.protocol === 'file:') {
      event.preventDefault(); const data = new FormData(contact);
      const body = [...data.entries()].filter(([k]) => k !== 'form-name').map(([k,v]) => `${k}: ${v}`).join('\n');
      location.href = `mailto:hello@brewandbean.co.za?subject=${encodeURIComponent('Message from Brew & Bean website')}&body=${encodeURIComponent(body)}`;
      toast('Your email application should open with the message.');
    }
  });

  // Leaflet + OpenStreetMap interactive map. Coordinates intentionally show only the Polokwane area;
  // the supplied project address is fictional/unverified and must be geocoded before a precise pin is used.
  const mapElement = $('#brew-map');
  if (mapElement && window.L) {
    const map = L.map(mapElement, { scrollWheelZoom: false }).setView([-23.9045, 29.4689], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);
    L.marker([-23.9045, 29.4689]).addTo(map).bindPopup('<strong>Brew &amp; Bean</strong><br>Approximate Polokwane area<br><small>Confirm exact business location before publishing.</small>').openPopup();
    setTimeout(() => map.invalidateSize(), 250);
  } else if (mapElement) {
    mapElement.innerHTML = '<p class="map-fallback">The interactive map could not load. Please use the Google Maps directions link below.</p>';
  }
})();
