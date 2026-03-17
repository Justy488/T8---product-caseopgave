"use strict";

const params = new URLSearchParams(window.location.search);
const group = params.get("group");

const container = document.querySelector("#subcategoryContainer");

const subcategories = {
  Clothes: [
    { name: "Tops", category: "tops" },
    { name: "Womens Dresses", category: "womens-dresses" },
  ],

  Accessories: [
    { name: "Jewellery", category: "womens-jewellery" },
    { name: "Shoes", category: "womens-shoes" },
    { name: "Watches", category: "womens-watches" },
    { name: "Bags", category: "womens-bags" },
    { name: "Sunglasses", category: "Sunglasses" },
  ],

  Beauty: [
    { name: "Skincare", category: "skin-care" },
    { name: "Fragrances", category: "fragrances" },
    { name: "Makeup", category: "beauty" },
  ],
};

subcategories[group].forEach((item) => {
  container.insertAdjacentHTML(
    "beforeend",
    `
    <a href="productlist.html?category=${item.category}" class="categoryCard">
      <img src="billeder/${item.category}.webp" alt="${item.name}">
      <p>${item.name}</p>
    </a>
    `,
  );
});
