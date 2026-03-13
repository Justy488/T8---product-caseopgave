"use strict";

const categoryGroups = {
  Clothes: ["tops", "womens-dresses"],
  Accessories: ["womens-jewellery", "womens-shoes", "womens-watches", "womens-bags", "sunglasses"],
  Beauty: ["skin-care", "fragrances", "beauty"],
};

document.querySelectorAll("[data-group]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const group = btn.dataset.group;
    const categories = categoryGroups[group];

    showSubcategories(categories, group);
  });
});

function showSubcategories(list, groupName) {
  const container = document.querySelector("#subcategories");

  container.innerHTML = `
    <h2>${groupName.charAt(0).toUpperCase() + groupName.slice(1)}</h2>
    <div class="subcategoryList">
      ${list
        .map(
          (cat) => `
        <a class="subcategory" href="productlist.html?category=${cat}">
          ${cat.replace("-", " ")}
        </a>
      `,
        )
        .join("")}
    </div>
  `;
}
