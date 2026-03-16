"use strict";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const productContainer = document.querySelector("main");

if (!id) {
  productContainer.innerHTML;
} else {
  fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((product) => {
      if (!product || product.message) {
        productContainer.innerHTML = "<p>Produkt ikke fundet!</p>";
        return;
      }

      const discountedPrice = product.discountPercentage ? Math.round(product.price * (1 - product.discountPercentage / 100)) : null;

      productContainer.innerHTML = `
        <article class="product">
          <img src="${product.thumbnail}" alt="${product.title}" />
          <section>
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p class="price">EUR ${product.price}</p>
            ${
              discountedPrice
                ? `<div class="sale">
                    <p>NOW EUR <span>${discountedPrice}</span></p>
                    <p><span>${product.discountPercentage}</span>% off</p>
                  </div>`
                : ""
            }
            <button>Buy now</button>
          </section>
        </article>
      `;
    })
    .catch((err) => {
      console.error(err);
      productContainer.innerHTML = "<p>Fejl ved hentning af produkt!</p>";
    });
}

// 1+2

const quantities = document.querySelectorAll(".quantity");

quantities.forEach((qty) => {
  const minusBtn = qty.querySelector("button:first-child");
  const plusBtn = qty.querySelector("button:last-child");
  const numberSpan = qty.querySelector("span");

  let count = parseInt(numberSpan.textContent);

  minusBtn.addEventListener("click", () => {
    if (count > 1) {
      count--;
      numberSpan.textContent = count;
    }
  });

  plusBtn.addEventListener("click", () => {
    count++;
    numberSpan.textContent = count;
  });
});

// størrelse

const sizeButtons = document.querySelectorAll(".sizes button");

sizeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Fjern 'selected' fra alle knapper
    sizeButtons.forEach((btn) => btn.classList.remove("selected"));

    // Tilføj 'selected' til den klikede knap
    button.classList.add("selected");
  });
});
