"use strict";

const params = new URLSearchParams(window.location.search);
const type = params.get("type");

console.log("type", type);

const container = document.querySelector("#subcategoryContainer");

if (type === "clothes") {
  container.innerHTML = `
  
  <a href="productlist.html?category=tops">
    <article class="categoryCard">
      <h3>Tops</h3>
    </article>
  </a>

  <a href="productlist.html?category=womens-dresses">
    <article class="categoryCard">
      <h3>Kjoler</h3>
    </article>
  </a>

  `;
}

if (type === "accessories") {
  container.innerHTML = `
  
  <a href="productlist.html?category=womens-shoes">
    <article class="categoryCard">
      <h3>Sko</h3>
    </article>
  </a>

  <a href="productlist.html?category=womens-bags">
    <article class="categoryCard">
      <h3>Tasker</h3>
    </article>
  </a>

  <a href="productlist.html?category=womens-jewellery">
    <article class="categoryCard">
      <h3>Smykker</h3>
    </article>
  </a>

  <a href="productlist.html?category=womens-watches">
    <article class="categoryCard">
      <h3>Ure</h3>
    </article>
  </a>

  `;
}

if (type === "beauty") {
  container.innerHTML = `
  
  <a href="productlist.html?category=beauty">
    <article class="categoryCard">
      <h3>Makeup</h3>
    </article>
  </a>

  <a href="productlist.html?category=skin-care">
    <article class="categoryCard">
      <h3>Skincare</h3>
    </article>
  </a>

  <a href="productlist.html?category=fragrances">
    <article class="categoryCard">
      <h3>Parfume</h3>
    </article>
  </a>

  `;
}
