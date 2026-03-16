"use strict";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const productContainer = document.querySelector("main");

fetch(`https://dummyjson.com/products/${id}`)
  .then((res) => res.json())
  .then((product) => {
    productContainer.innerHTML = `
      <article class="product">
        <img src="${product.thumbnail}" alt="${product.title}" />
        <section>
          <h2>${product.title}</h2>
          <p>${product.description}</p>
          <p class="price">EUR ${product.price}</p>

          ${
            product.discountPercentage
              ? `<div class="sale">
              <p>NOW EUR <span>${Math.round(product.price * (1 - product.discountPercentage / 100))}</span></p>
              <p><span>${product.discountPercentage}</span>%</p>
            </div>`
              : ""
          }

          <button>Buy now</button>
        </section>
      </article>
    `;
  });
