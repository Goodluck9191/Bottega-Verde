/* Bottega Verde Tanzania — simple product list */
(function () {
  "use strict";

  var PRODUCTS = [
    { id: 1, name: "Glow Face Cream (Sample)", cat: "skincare", price: "TZS 45,000", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=700&auto=format&fit=crop", desc: "Daily face cream — demo price, confirm in store." },
    { id: 2, name: "Gentle Cleansing Gel (Sample)", cat: "skincare", price: "TZS 32,000", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=700&auto=format&fit=crop", desc: "Mild daily cleanser — demo price." },
    { id: 3, name: "Shea Body Butter (Sample)", cat: "body", price: "TZS 38,500", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=700&auto=format&fit=crop", desc: "Rich body butter for soft skin — demo." },
    { id: 4, name: "Repair Hair Mask (Sample)", cat: "hair", price: "TZS 42,000", img: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=700&auto=format&fit=crop", desc: "Weekly hair treatment — demo price." },
    { id: 5, name: "Herbal Shampoo (Sample)", cat: "hair", price: "TZS 30,000", img: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=700&auto=format&fit=crop", desc: "Everyday shampoo — demo price." },
    { id: 6, name: "Nude Lip & Cheek Duo (Sample)", cat: "makeup", price: "TZS 36,000", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=700&auto=format&fit=crop", desc: "Everyday makeup essential — demo." },
    { id: 7, name: "Floral Perfume 50ml (Sample)", cat: "fragrance", price: "TZS 95,000", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=700&auto=format&fit=crop", desc: "Floral scent — come test it in store." },
    { id: 8, name: "Citrus Day Fragrance (Sample)", cat: "fragrance", price: "TZS 78,000", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=700&auto=format&fit=crop", desc: "Light daytime scent — demo price." },
    { id: 9, name: "Gift Box Trio (Sample)", cat: "body", price: "TZS 89,000", img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=700&auto=format&fit=crop", desc: "Ready-to-give gift set — demo price." }
  ];

  var LABELS = { skincare: "Skincare", body: "Body & Bath", hair: "Hair Care", makeup: "Makeup", fragrance: "Fragrance" };
  var grid = document.getElementById("grid");
  var filter = "all";

  function wa(name) {
    return "https://wa.me/255670206060?text=" + encodeURIComponent(
      "Hello Bottega Verde Tanzania, I would like more information about " + name + ". Could you please share its price and availability?"
    );
  }

  function render() {
    var list = PRODUCTS.filter(function (p) { return filter === "all" || p.cat === filter; });
    grid.innerHTML = list.map(function (p) {
      return '<article class="product">' +
        '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy" />' +
        "<div><p class='cat'>" + (LABELS[p.cat] || p.cat) + "</p><h3>" + p.name + "</h3>" +
        "<span class='price'>" + p.price + "</span><span class='demo'>Demo price — confirm on WhatsApp</span>" +
        "<p>" + p.desc + "</p>" +
        '<a class="btn wa small" target="_blank" rel="noopener" href="' + wa(p.name) + '">Ask on WhatsApp</a></div></article>';
    }).join("");
  }

  document.querySelectorAll(".chip").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".chip").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      filter = btn.getAttribute("data-filter");
      render();
    });
  });

  var menuBtn = document.getElementById("menuBtn");
  var nav = document.getElementById("nav");
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) nav.classList.remove("open");
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  render();
})();
