"use strict";

const params = new URLSearchParams(window.location.search);
const group = params.get("group");

const categoryGroups = {
  Clothes: ["tops", "womens-dresses"],
  Accessories: ["womens-jewellery", "womens-shoes", "womens-watches", "womens-bags", "sunglasses"],
  Beauty: ["skin-care", "fragrances", "beauty"],
};

const list = categoryGroups[group];
const container = document.querySelector("main");

container.innerHTML = `
  <h2>${group}</h2>
  <section class="subcategoryList">
    ${list
      .map(
        (cat) => `
      <a class="subcategory" href="kategorier.html?category=${cat}">
        ${cat.replace("-", " ")}
      </a>`,
      )
      .join("")}
  </section>
`;
