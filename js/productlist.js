"use strict";

const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const productContainer = document.querySelector("main");

fetch(`https://dummyjson.com/products/category/${category}?limit=52`)
  .then((res) => res.json())
  .then((data) => {
    showProducts(data.products);
  });

function showProducts(products) {
  productContainer.innerHTML = `<h2>${category}</h2>`;

  products.forEach((product) => {
    productContainer.innerHTML += `
      <article class="smallProduct">
      <h3>${product.title}</h3>
        <img src="${product.thumbnail}" alt="${product.title}" />
        <p>${product.price} EUR</p>
        <p>${product.availabilityStatus}</p>
        <a href="productdetails.html?id=${product.id}">Buy</a>
      </article>
    `;
  });
}
