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
  productContainer.innerHTML = `<img src="billeder/collage.jpg" alt="collage" class="collage">
    <h2>${category}</h2>`;

  products.forEach((product) => {
    productContainer.innerHTML += `
    <article class="smallProduct">
        <img src="${product.thumbnail}" alt="${product.title}" />
        <h3>${product.title}</h3>
        <p>${product.price} EUR</p>
        <p>${product.availabilityStatus}</p>
        <div class="buy">
        <a href="productdetails.html?id=${product.id}">Buy</a>
        <img src="billeder/hjerte.svg" alt="like" class="like">
        <div/>
    </article>
    `;
  });
}
