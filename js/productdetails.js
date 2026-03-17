"use strict";

const params = new URLSearchParams(window.location.search);
const id = params.get("id") || 1;
const productContainer = document.querySelector("main");

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
          <h2>${product.title} <span class="hjerte">♡</span></h2>

          <div class="sizes">
            <button>XS</button>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
          </div>

          <div class="quantity">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>

        

          <div class="salelinje">
            <p class="price">EUR ${product.price}</p>
            ${
              discountedPrice
                ? `<div class="sale">
                    <p>NOW EUR  | <span>${discountedPrice}</span></p>
                    <p><span class="salepink">${product.discountPercentage}</span>% off</p>
                  </div>`
                : ""
            }
          </div>
  <button class="buynow">Læg i kurven</button>
        </section>
      </article>

      <p class="boverskrift">Beskrivelse:</p>
      <p class="beskrivelse">${product.description}</p>
    `;

    // --- Quantity knapper ---
    const quantities = productContainer.querySelectorAll(".quantity");

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

    // --- Størrelsesknapper ---
    const sizeButtons = productContainer.querySelectorAll(".sizes button");

    sizeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Fjern 'selected' fra alle knapper først
        sizeButtons.forEach((btn) => btn.classList.remove("selected"));
        // Tilføj 'selected' på den knap der blev klikket
        button.classList.add("selected");
      });
    });
  }); // end fetch
