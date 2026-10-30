// Shared behaviour. Each page provides window.SITE = {listings, money, email, tool, areas}.
(() => {
  const S = window.SITE || {};
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  document.documentElement.classList.remove('no-js');
  const money = (n) => new Intl.NumberFormat(S.locale || 'en-US', { style: 'currency', currency: S.currency || 'USD', maximumFractionDigits: 0 }).format(n);
  const icon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>';

  // Mobile menu
  const nav = $('.nav'), mb = $('.menu-btn');
  if (mb) mb.addEventListener('click', () => { const o = nav.classList.toggle('open'); mb.setAttribute('aria-expanded', o); mb.textContent = o ? 'Close' : 'Menu'; document.body.style.overflow = o ? 'hidden' : ''; });
  $$('.nav a').forEach(a => a.addEventListener('click', () => { if (nav.classList.contains('open')) mb.click(); }));

  // Favourites (per visitor convenience)
  let favs = new Set();
  try { favs = new Set(JSON.parse(localStorage.getItem('favs:' + location.pathname) || '[]')); } catch (e) {}
  const saveFavs = () => { try { localStorage.setItem('favs:' + location.pathname, JSON.stringify([...favs])); } catch (e) {} };

  let io;
  // Listings
  const L = S.listings || [];
  const box = $('[data-listings]');
  const state = { area: 'all', type: 'all', beds: 0, max: Infinity, sort: 'new', saved: false };
  function card(p) {
    const style = box.dataset.listings;
    if (style === 'index') return `<li><button type="button" data-id="${p.id}" data-img="${p.img[0]}"><h3>${p.title}</h3><span>${p.area}</span><span>${p.beds} bd · ${p.size}</span><span>${money(p.price)}${p.rent ? ' /mo' : ''}</span></button></li>`;
    return `<article class="card rv" data-id="${p.id}" tabindex="0" role="button" aria-label="${p.title}, ${money(p.price)}">
      ${p.status ? `<span class="tag">${p.status}</span>` : ''}
      <button class="fav" type="button" aria-pressed="${favs.has(p.id)}" aria-label="Save ${p.title}" data-fav="${p.id}">${icon}</button>
      <div class="ph"><img src="${p.img[0]}" alt="${p.alt || p.title}" loading="lazy" width="1200" height="900"></div>
      <div class="row"><h3>${p.title}</h3><span class="price">${money(p.price)}${p.rent ? '<small> /mo</small>' : ''}</span></div>
      <div class="meta"><span>${p.area}</span><span>${p.beds} bed</span><span>${p.baths} bath</span><span>${p.size}</span></div></article>`;
  }
  function render() {
    if (!box) return;
    let r = L.filter(p => (state.area === 'all' || p.area === state.area) && (state.type === 'all' || p.type === state.type) && p.beds >= state.beds && p.price <= state.max && (!state.saved || favs.has(p.id)));
    if (state.sort === 'low') r.sort((a, b) => a.price - b.price);
    if (state.sort === 'high') r.sort((a, b) => b.price - a.price);
    box.innerHTML = r.length ? r.map(card).join('') : `<p class="empty">${state.saved ? 'Nothing saved yet. Tap the heart on any home to keep it here.' : 'No homes match those settings. Widen the price or clear a filter.'}</p>`;
    const c = $('[data-count]'); if (c) c.textContent = `${r.length} of ${L.length} homes`;
    reveal();
  }
  $$('[data-filter]').forEach(el => el.addEventListener('input', () => { const k = el.dataset.filter; state[k] = k === 'beds' || k === 'max' ? (+el.value || (k === 'max' ? Infinity : 0)) : el.value; render(); }));
  $$('[data-chip]').forEach(b => b.addEventListener('click', () => {
    const k = b.dataset.chip; $$(`[data-chip="${k}"]`).forEach(x => x.setAttribute('aria-pressed', x === b)); state[k] = b.dataset.v === 'true' ? true : b.dataset.v === 'false' ? false : b.dataset.v; render();
  }));
  if (box) {
    box.addEventListener('click', e => {
      const f = e.target.closest('[data-fav]');
      if (f) { e.stopPropagation(); const id = f.dataset.fav; favs.has(id) ? favs.delete(id) : favs.add(id); f.setAttribute('aria-pressed', favs.has(id)); saveFavs(); if (state.saved) render(); return; }
      const c = e.target.closest('[data-id]'); if (c) openProp(c.dataset.id);
    });
    box.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.card')) { e.preventDefault(); openProp(e.target.dataset.id); } });
    if (box.dataset.listings === 'index') {
      const peek = document.createElement('div'); peek.className = 'peek ph'; peek.innerHTML = '<img alt="">'; document.body.append(peek);
      box.addEventListener('pointermove', e => { const b = e.target.closest('[data-img]'); if (!b || matchMedia('(hover:none)').matches) { peek.classList.remove('on'); return; } peek.firstChild.src = b.dataset.img; peek.style.left = Math.min(e.clientX + 24, innerWidth - 320) + 'px'; peek.style.top = (e.clientY - 110) + 'px'; peek.classList.add('on'); });
      box.addEventListener('pointerleave', () => peek.classList.remove('on'));
    }
    render();
  }

  // Property dialog
  const dlg = $('dialog.prop');
  function openProp(id) {
    const p = L.find(x => x.id === id); if (!p || !dlg) return;
    dlg.innerHTML = `<button class="close" type="button" aria-label="Close">×</button><div class="in">
      <div class="gal"><div class="ph"><img data-main src="${p.img[0]}" alt="${p.title}" width="1200" height="900"></div>
      <div class="thumbs">${p.img.map((s, i) => `<button type="button" aria-label="Photo ${i + 1}" aria-current="${i === 0}" data-src="${s}"><img src="${s}" alt="" loading="lazy"></button>`).join('')}</div></div>
      <div class="body"><p class="soft">${p.area}${p.status ? ' · ' + p.status : ''}</p><h3>${p.title}</h3>
      <p class="price lead">${money(p.price)}${p.rent ? ' per month' : ''}</p>
      <dl><div><dt>Bedrooms</dt><dd>${p.beds}</dd></div><div><dt>Bathrooms</dt><dd>${p.baths}</dd></div><div><dt>Size</dt><dd>${p.size}</dd></div></dl>
      <p>${p.desc}</p>
      <form class="form" data-enquire="${p.title}"><label class="sr" for="d-name">Your name</label><input id="d-name" name="name" required placeholder="Your name" autocomplete="name">
      <label class="sr" for="d-mail">Email or phone</label><input id="d-mail" name="contact" required placeholder="Email or phone" autocomplete="email">
      <label class="sr" for="d-when">Preferred viewing day</label><input id="d-when" name="when" type="date">
      <button class="btn" type="submit">Book a viewing</button><p class="ok" role="status">Thank you. Your email app is opening with the request filled in.</p></form></div></div>`;
    dlg.showModal();
    $('.close', dlg).onclick = () => dlg.close();
    $$('.thumbs button', dlg).forEach(b => b.onclick = () => { $('[data-main]', dlg).src = b.dataset.src; $$('.thumbs button', dlg).forEach(x => x.setAttribute('aria-current', x === b)); });
    wireForms(dlg);
  }
  if (dlg) dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });

  // Forms open the visitor's email with everything filled in (no backend in a demo)
  function wireForms(root = document) {
    $$('form[data-enquire]', root).forEach(f => f.onsubmit = e => {
      e.preventDefault(); const d = Object.fromEntries(new FormData(f));
      const body = Object.entries(d).filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join('\n');
      location.href = `mailto:${S.email}?subject=${encodeURIComponent('Enquiry: ' + f.dataset.enquire)}&body=${encodeURIComponent(body)}`;
      f.classList.add('sent');
    });
  }
  wireForms();

  // Live tool: mortgage, yield, or payment plan
  const T = $('[data-tool]');
  if (T) {
    const kind = T.dataset.tool, val = n => +($(`[name="${n}"]`, T) || {}).value || 0;
    const out = (n, v) => { const o = $(`[data-out="${n}"]`, T); if (o) o.textContent = v; };
    const calc = () => {
      $$('input[type=range]', T).forEach(r => { const o = $(`output[for="${r.id}"]`, T); if (o) o.textContent = r.dataset.fmt === 'pct' ? r.value + '%' : r.dataset.fmt === 'yr' ? r.value + ' years' : r.dataset.fmt === 'n' ? r.value : money(+r.value); });
      if (kind === 'mortgage') {
        const P = val('price') * (1 - val('down') / 100), i = val('rate') / 1200, n = val('years') * 12;
        const m = i ? P * i / (1 - Math.pow(1 + i, -n)) : P / n, tax = val('price') * (S.taxRate || 0.018) / 12, ins = (S.insure || 150);
        out('pi', money(m)); out('all', money(m + tax + ins)); out('total', money(m * n - P));
        const t = m + tax + ins; $$('.bars i', T).forEach((b, k) => b.style.width = ([m, tax, ins][k] / t * 100) + '%');
      } else if (kind === 'yield') {
        const price = val('price'), rent = val('rent') * 12, cost = rent * val('costs') / 100, net = rent - cost;
        out('gross', (rent / price * 100).toFixed(1) + '%'); out('net', (net / price * 100).toFixed(1) + '%'); out('year', money(net));
        $$('.bars i', T).forEach((b, k) => b.style.width = ([net, cost][k] / rent * 100) + '%');
      } else if (kind === 'plan') {
        const price = val('price'), down = price * val('down') / 100, n = val('months'), m = (price - down) / n;
        out('down', money(down)); out('monthly', money(m)); out('months', n + ' months');
        $$('.bars i', T).forEach((b, k) => b.style.width = ([down, price - down][k] / price * 100) + '%');
      } else if (kind === 'sell') {
        const price = val('price'), fee = val('fee') / 100, list = price * fee;
        out('net', money(price - price * fee)); out('fee', money(list)); out('save', money(price * 0.01));
        $$('.bars i', T).forEach((b, k) => b.style.width = ([price - list, list][k] / price * 100) + '%');
      }
    };
    $$('input', T).forEach(i => i.addEventListener('input', calc)); calc();
  }

  // Areas list swaps the picture and facts beside it
  const A = S.areas || [];
  $$('[data-area]').forEach(b => b.addEventListener('click', () => {
    const a = A[+b.dataset.area]; if (!a) return;
    $$('[data-area]').forEach(x => x.setAttribute('aria-current', x === b));
    const d = $('.areas .detail'); $('img', d).src = a.img; $('img', d).alt = a.name; $('[data-a="text"]', d).textContent = a.text;
    $$('[data-a-k]', d).forEach((dd, k) => dd.textContent = a.facts[k][1]); $$('[data-a-l]', d).forEach((dt, k) => dt.textContent = a.facts[k][0]);
    const fb = $('[data-a="filter"]', d); if (fb) fb.onclick = () => { const sel = $('[data-filter="area"]'); if (sel) { sel.value = a.name; sel.dispatchEvent(new Event('input')); } location.hash = 'homes'; };
  }));
  const first = $('[data-area]'); if (first) first.click();

  // Entrances: heading, then text, then picture
  function reveal() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || innerHeight > 1800) { $$('.rv').forEach(e => e.classList.add('in')); return; }
    io = io || new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    $$('.rv:not(.in)').forEach((el, k) => { if (!el.style.getPropertyValue('--i')) el.style.setProperty('--i', k % 4); io.observe(el); });
  }
  reveal();
  // Safety: nothing stays hidden if the observer never fires (print, capture tools, old browsers)
  setTimeout(() => $$('.rv:not(.in)').forEach(e => { const r = e.getBoundingClientRect(); if (r.top < innerHeight * 3) e.classList.add('in'); }), 2500);

  // Year
  $$('[data-year]').forEach(e => e.textContent = new Date().getFullYear());
})();
