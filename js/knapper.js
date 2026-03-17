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

    // Send brugeren til underkategorier.html
    window.location.href = `undercategory.html?group=${group}`;
  });
});
