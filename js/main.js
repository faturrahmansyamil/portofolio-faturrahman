/* =========================================================
   MAIN — render data + gerak. Tidak perlu diubah untuk isi konten.
   ========================================================= */
(function () {
  "use strict";
  var D = window.PORTFOLIO || {};
  var doc = document.documentElement;
  doc.classList.add("js");
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fineMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function icon(id) { return '<svg class="ic" aria-hidden="true"><use href="#i-' + id + '"/></svg>'; }

  /* ---------- Segel: lingkaran dengan 12 lekukan ---------- */
  function sealPath(cx, cy, r, amp, n) {
    var pts = [], steps = 240;
    for (var i = 0; i <= steps; i++) {
      var t = (i / steps) * Math.PI * 2;
      var rr = r + amp * Math.cos(n * t);
      pts.push((cx + rr * Math.cos(t)).toFixed(2) + " " + (cy + rr * Math.sin(t)).toFixed(2));
    }
    return "M" + pts.join("L") + "Z";
  }
  var SEAL = sealPath(50, 50, 45, 3.2, 12);
  $$(".seal-path").forEach(function (p) { p.setAttribute("d", SEAL); });

  /* ---------- Isi teks sederhana ---------- */
  $$("[data-bind]").forEach(function (el) {
    var k = el.getAttribute("data-bind");
    if (D[k] != null) el.textContent = D[k];
  });
  document.title = (D.name || "Portofolio") + " · Portofolio";
  $("#year").textContent = new Date().getFullYear();

  var mail = $("#bigMail");
  if (D.email) mail.href = "mailto:" + D.email;
  var cv = $("#cvBtn");
  if (D.cv) { cv.href = D.cv; cv.setAttribute("download", ""); }
  else cv.addEventListener("click", function (e) { e.preventDefault(); toast("CV belum dipasang, isi di data.js"); });

  if (D.photo) {
    var img = $("#photoImg");
    img.src = D.photo; img.alt = "Foto " + (D.name || "");
    img.hidden = false;
    $(".photo-initials").hidden = true;
  }

  /* ---------- Hero stats ---------- */
  $("#heroStats").innerHTML = (D.stats || []).map(function (s) {
    return '<li><b data-count-to="' + Number(s.value) + '" data-suffix="' + esc(s.suffix) + '">0' + esc(s.suffix) + '</b><span>' + esc(s.label) + '</span></li>';
  }).join("");

  /* ---------- Tentang ---------- */
  $("#aboutText").innerHTML = (D.about || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  $("#facts").innerHTML = (D.facts || []).map(function (f) {
    return '<li class="card fact"><span class="ikon-stiker">' + icon(f.icon) + '</span><span><small>' + esc(f.label) + '</small><strong>' + esc(f.value) + '</strong></span></li>';
  }).join("");

  /* ---------- Keahlian ---------- */
  $("#skills").innerHTML = (D.skills || []).map(function (s, i) {
    return '<article class="card skill"><span class="ikon-stiker' + (i === 0 ? " blue" : "") + '">' + icon(s.icon) + '</span>' +
      '<h3>' + esc(s.title) + '</h3><p>' + esc(s.text) + '</p>' +
      '<div class="tags">' + (s.tags || []).map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join("") + '</div></article>';
  }).join("");
  $("#stack").innerHTML = '<span class="label">Alat harian:</span>' + (D.stack || []).map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join("");

  /* ---------- Proyek ---------- */
  var STATUS = { go: "Live", beta: "Beta", wip: "Dikembangkan", plan: "Direncanakan" };

  function illus(i) {
    // Ilustrasi cover otomatis (jendela browser bergaya stiker)
    var v = i % 3;
    var body;
    if (v === 0) {
      body = '<rect x="120" y="170" width="560" height="56" rx="14" style="fill:var(--ink)"/>' +
        '<rect x="120" y="246" width="380" height="22" rx="11" style="fill:var(--line)"/>' +
        '<rect x="120" y="300" width="170" height="54" rx="27" style="fill:var(--blue);stroke:var(--edge);stroke-width:4"/>' +
        '<circle cx="1140" cy="330" r="190" style="fill:var(--blue)"/><circle cx="1210" cy="230" r="34" style="fill:var(--blue-light)"/>' +
        '<rect x="120" y="430" width="300" height="250" rx="24" style="fill:var(--card);stroke:var(--edge);stroke-width:4"/>' +
        '<rect x="450" y="430" width="300" height="250" rx="24" style="fill:var(--card);stroke:var(--edge);stroke-width:4"/>' +
        '<rect x="780" y="430" width="300" height="250" rx="24" style="fill:var(--blue-light);stroke:var(--edge);stroke-width:4"/>';
    } else if (v === 1) {
      body = '<rect x="90" y="150" width="260" height="560" rx="24" style="fill:var(--card);stroke:var(--edge);stroke-width:4"/>' +
        '<rect x="120" y="190" width="200" height="40" rx="20" style="fill:var(--blue)"/>' +
        '<rect x="120" y="250" width="160" height="18" rx="9" style="fill:var(--line)"/><rect x="120" y="290" width="180" height="18" rx="9" style="fill:var(--line)"/>' +
        '<rect x="390" y="150" width="340" height="170" rx="24" style="fill:var(--blue);stroke:var(--edge);stroke-width:4"/>' +
        '<rect x="760" y="150" width="340" height="170" rx="24" style="fill:var(--card);stroke:var(--edge);stroke-width:4"/>' +
        '<rect x="390" y="350" width="1120" height="360" rx="24" style="fill:var(--card);stroke:var(--edge);stroke-width:4"/>' +
        '<path d="M430 650 L600 560 L760 600 L940 470 L1120 520 L1300 420 L1470 450" style="fill:none;stroke:var(--blue);stroke-width:10;stroke-linecap:round;stroke-linejoin:round"/>' +
        '<circle cx="1470" cy="450" r="14" style="fill:var(--blue-light)"/>';
    } else {
      body = '<rect x="560" y="150" width="480" height="70" rx="16" style="fill:var(--ink)"/>' +
        '<rect x="640" y="240" width="320" height="22" rx="11" style="fill:var(--line)"/>' +
        '<rect x="200" y="320" width="270" height="360" rx="24" style="fill:var(--card);stroke:var(--edge);stroke-width:4"/>' +
        '<rect x="500" y="320" width="270" height="360" rx="24" style="fill:var(--blue);stroke:var(--edge);stroke-width:4"/>' +
        '<rect x="830" y="320" width="270" height="360" rx="24" style="fill:var(--card);stroke:var(--edge);stroke-width:4"/>' +
        '<rect x="1130" y="320" width="270" height="360" rx="24" style="fill:var(--card);stroke:var(--edge);stroke-width:4"/>' +
        '<circle cx="335" cy="430" r="50" style="fill:var(--blue-light)"/><circle cx="965" cy="430" r="50" style="fill:var(--surface);stroke:var(--edge);stroke-width:4"/>';
    }
    return '<svg class="illus" viewBox="0 0 1600 848" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
      '<rect width="1600" height="848" style="fill:var(--surface)"/>' +
      '<rect x="40" y="40" width="1520" height="808" rx="30" style="fill:var(--paper);stroke:var(--edge);stroke-width:4"/>' +
      '<path d="M40 110 H1560" style="stroke:var(--edge);stroke-width:4"/>' +
      '<circle cx="90" cy="75" r="12" style="fill:var(--blue-light)"/><circle cx="130" cy="75" r="12" style="fill:var(--line)"/><circle cx="170" cy="75" r="12" style="fill:var(--line)"/>' +
      body + '</svg>';
  }

  $("#projects").innerHTML = (D.projects || []).map(function (p, i) {
    var cover = p.image
      ? '<img src="' + esc(p.image) + '" alt="Tampilan ' + esc(p.title) + '" width="1600" height="848" loading="lazy">'
      : illus(i) + '<span class="cover-note">Ilustrasi</span>';
    var links = "";
    if (p.demo) links += '<a href="' + esc(p.demo) + '" target="_blank" rel="noopener noreferrer" data-cursor-label="buka">' + icon("link") + 'Demo</a>';
    if (p.code) links += '<a href="' + esc(p.code) + '" target="_blank" rel="noopener noreferrer" data-cursor-label="intip kode">' + icon("github") + 'Kode</a>';
    return '<article class="card project" data-cat="' + esc(p.category) + '">' +
      '<div class="cover">' + cover + '</div>' +
      '<div class="body"><div class="meta"><span class="chip ' + esc(p.status) + '">' + esc(STATUS[p.status] || p.status) + '</span><span class="year">' + esc(p.category) + ' · ' + esc(p.year) + '</span></div>' +
      '<h3>' + esc(p.title) + '</h3><p>' + esc(p.text) + '</p>' +
      '<div class="tags">' + (p.tags || []).map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join("") + '</div>' +
      (links ? '<div class="links">' + links + '</div>' : "") + '</div></article>';
  }).join("");

  // Filter kategori
  var cats = ["Semua"];
  (D.projects || []).forEach(function (p) { if (cats.indexOf(p.category) < 0) cats.push(p.category); });
  var filters = $("#filters");
  filters.innerHTML = cats.map(function (c, i) {
    return '<button role="tab" aria-selected="' + (i === 0) + '" data-cat="' + esc(c) + '">' + esc(c) + '</button>';
  }).join("");
  filters.addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    $$("button", filters).forEach(function (x) { x.setAttribute("aria-selected", x === b); });
    var cat = b.getAttribute("data-cat");
    var shown = 0;
    $$(".project").forEach(function (card) {
      var show = cat === "Semua" || card.getAttribute("data-cat") === cat;
      card.classList.toggle("is-hidden", !show);
      if (show) {
        card.classList.remove("in"); void card.offsetWidth;
        card.style.transitionDelay = (shown++ * 70) + "ms";
        requestAnimationFrame(function () { card.classList.add("in"); });
      }
    });
    // jaga aturan "tanpa kartu yatim" untuk hasil filter
    var vis = $$(".project:not(.is-hidden)");
    vis.forEach(function (c) { c.style.gridColumn = ""; });
  });

  /* ---------- Pengalaman ---------- */
  $("#timeline").innerHTML = (D.experience || []).map(function (x) {
    return '<li class="' + (x.now ? "now" : "") + '"><span class="pt"></span><div class="card">' +
      '<span class="when">' + esc(x.when) + '</span><h3>' + esc(x.title) + '</h3><p class="org">' + esc(x.org) + '</p><p>' + esc(x.text) + '</p></div></li>';
  }).join("");

  /* ---------- Sosmed ---------- */
  $("#socials").innerHTML = (D.socials || []).filter(function (s) { return s.url; }).map(function (s) {
    return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(s.label) + '" data-cursor-label="' + esc(s.label) + '">' + icon(s.icon) + '</a></li>';
  }).join("");

  /* ---------- Toast ---------- */
  var toastEl = $("#toast"), toastT;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastT);
    toastT = setTimeout(function () { toastEl.classList.remove("show"); }, 2600);
  }

  /* ---------- Salin email ---------- */
  $("#copyBtn").addEventListener("click", function () {
    var text = D.email || "";
    function done() { toast("Email tersalin!"); }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else fallback();
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); done(); } catch (e) { toast(text); }
      ta.remove();
    }
  });

  /* ---------- Foto dicolek ---------- */
  var bubble = $("#bubble"), sealBtn = $("#sealPhoto"), bi = 0;
  sealBtn.addEventListener("click", function () {
    var list = D.bubbles || [];
    if (!list.length) return;
    bi = (bi + 1) % list.length;
    bubble.textContent = list[bi];
    bubble.classList.remove("swap"); void bubble.offsetWidth; bubble.classList.add("swap");
    sealBtn.classList.remove("poked"); void sealBtn.offsetWidth; sealBtn.classList.add("poked");
  });

  /* ---------- Mode gelap ---------- */
  var mq = window.matchMedia("(prefers-color-scheme: dark)");
  function isDark() { var t = doc.dataset.theme; return t ? t === "dark" : mq.matches; }
  $("#themeBtn").addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    doc.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  /* ---------- Pecah judul per kata ---------- */
  function splitWords(el) {
    var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    var idx = 0;
    nodes.forEach(function (n) {
      var parts = n.textContent.split(/(\s+)/);
      var frag = document.createDocumentFragment();
      parts.forEach(function (part) {
        if (!part) return;
        if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(" ")); return; }
        var w = document.createElement("span"); w.className = "w";
        var inner = document.createElement("span"); inner.textContent = part;
        inner.style.transitionDelay = (idx++ * 55) + "ms";
        w.appendChild(inner); frag.appendChild(w);
      });
      n.parentNode.replaceChild(frag, n);
    });
  }
  if (!reduce) $$("[data-split]").forEach(splitWords);

  /* ---------- Muncul saat scroll ---------- */
  function countUp(el) {
    var to = Number(el.getAttribute("data-count-to")) || 0, suf = el.getAttribute("data-suffix") || "";
    if (reduce) { el.textContent = to + suf; return; }
    var t0 = performance.now(), dur = 1400;
    (function tick(now) {
      var p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(to * e) + suf;
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }

  // kartu "dirakit" dari posisi acak dengan jeda bertahap
  $$(".grid3, .facts, .timeline").forEach(function (g) {
    Array.prototype.forEach.call(g.children, function (c, i) {
      c.style.setProperty("--rot", ((Math.random() * 8) - 4).toFixed(1) + "deg");
      c.style.transitionDelay = (i % 3) * 90 + "ms";
    });
  });

  var targets = $$("[data-reveal], [data-split], .project, .skill, .timeline li, .fact");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        $$("[data-count-to]", en.target).forEach(countUp);
        io.unobserve(en.target);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });
    targets.forEach(function (t) { io.observe(t); });
  } else {
    targets.forEach(function (t) { t.classList.add("in"); });
    $$("[data-count-to]").forEach(countUp);
  }
  // bersihkan jeda setelah muncul agar hover tetap responsif
  document.addEventListener("transitionend", function (e) {
    if (e.target.classList && e.target.classList.contains("in") && e.propertyName === "opacity") e.target.style.transitionDelay = "";
  });

  /* ---------- Jeda animasi tanpa henti di luar layar ---------- */
  if ("IntersectionObserver" in window) {
    var po = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { en.target.classList.toggle("idle", !en.isIntersecting); });
    });
    $$("[data-pause]").forEach(function (el) { po.observe(el); });
  }

  /* ---------- Nav: kapsul + sembunyi saat turun ---------- */
  var nav = $("#nav"), lastY = window.scrollY, ticking = false;
  function onScroll() {
    var y = window.scrollY;
    nav.classList.toggle("scrolled", y > 24);
    if (!document.body.classList.contains("menu-open")) {
      nav.classList.toggle("hidden", y > lastY && y > 300);
    }
    lastY = y; ticking = false;
  }
  window.addEventListener("scroll", function () { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });
  onScroll();

  // tautan aktif
  var links = $$(".nav-links a[href^='#']");
  if ("IntersectionObserver" in window) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(function (s) { so.observe(s); });
  }

  /* ---------- Menu HP: lingkaran membesar ---------- */
  var menuBtn = $("#menuBtn"), menu = $("#mobileMenu");
  function setMenu(open) {
    var r = menuBtn.getBoundingClientRect();
    var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    var far = Math.hypot(Math.max(cx, innerWidth - cx), Math.max(cy, innerHeight - cy));
    menu.style.setProperty("--mx", cx + "px");
    menu.style.setProperty("--my", cy + "px");
    menu.style.setProperty("--ms", (far * 2 / 60 + 1).toFixed(2));
    menuBtn.setAttribute("aria-expanded", open);
    menuBtn.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
    document.body.classList.toggle("menu-open", open);
    if (open) {
      menu.hidden = false;
      requestAnimationFrame(function () { requestAnimationFrame(function () { menu.classList.add("open"); }); });
    } else {
      menu.classList.remove("open");
      setTimeout(function () { if (!menu.classList.contains("open")) menu.hidden = true; }, reduce ? 0 : 600);
    }
  }
  menuBtn.addEventListener("click", function () { setMenu(menuBtn.getAttribute("aria-expanded") !== "true"); });
  $$(".mm-links a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && menuBtn.getAttribute("aria-expanded") === "true") setMenu(false); });

  /* ---------- Kursor segel (hanya mouse) ---------- */
  if (fineMouse && !reduce) {
    document.body.classList.add("has-cursor");
    var cur = $(".cursor"), dot = $(".cursor-dot"), ring = $(".cursor-ring"), label = $(".cursor-label");
    var mx = -100, my = -100, rx = -100, ry = -100;
    window.addEventListener("mousemove", function (e) { mx = e.clientX; my = e.clientY; }, { passive: true });
    window.addEventListener("mousedown", function () { cur.classList.add("down"); });
    window.addEventListener("mouseup", function () { cur.classList.remove("down"); });
    document.addEventListener("mouseover", function (e) {
      var t = e.target.closest("a, button, [data-cursor-label]");
      cur.classList.toggle("hover", !!t);
      var l = t && t.getAttribute("data-cursor-label");
      cur.classList.toggle("labeled", !!l);
      if (l) label.textContent = l;
    });
    document.addEventListener("mouseleave", function () { mx = my = -100; });
    (function loop() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      dot.style.transform = "translate(" + mx + "px," + my + "px)";
      ring.style.transform = "translate(" + rx + "px," + ry + "px)";
      label.style.transform = "translate(" + rx + "px," + ry + "px)";
      requestAnimationFrame(loop);
    })();

    /* Magnet */
    $$("[data-magnetic]").forEach(function (el) {
      el.style.transition = "transform .4s cubic-bezier(.34,1.56,.64,1)";
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) * 0.18, y = (e.clientY - r.top - r.height / 2) * 0.3;
        el.style.transform = "translate(" + x + "px," + y + "px)";
      });
      el.addEventListener("mouseleave", function () { el.style.transform = ""; });
    });
  }
})();
