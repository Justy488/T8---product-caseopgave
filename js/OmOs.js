"use strict";

const container = document.querySelector("#carousel-container");

const categories = ["tops", "womens-dresses", "womens-bags", "womens-shoes", "womens-watches", "womens-jewellery", "sunglasses"];

async function loadCarousel() {
  for (const category of categories) {
    const res = await fetch(`https://dummyjson.com/products/category/${category}?limit=1`);
    const data = await res.json();

    const product = data.products[0];

    const link = document.createElement("a");
    link.href = `productlist.html?category=${category}`;

    const img = document.createElement("img");
    img.src = product.thumbnail;
    img.alt = product.title;

    link.appendChild(img);
    container.appendChild(link);
  }

  // duplicate for infinite scroll
  container.innerHTML += container.innerHTML;
}

loadCarousel();
