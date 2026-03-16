"use strict";

const params = new URLSearchParams(window.location.search);
const group = params.get("group");

const container = document.querySelector("#subcategoryContainer");

const subcategories = {
  Clothes: [
    { name: "Tops", category: "tops" },
    { name: "Dresses", category: "womens-dresses" },
  ],

  Accessories: [
    { name: "Shoes", category: "womens-shoes" },
    { name: "Bags", category: "womens-bags" },
    { name: "Jewellery", category: "womens-jewellery" },
    { name: "Watches", category: "womens-watches" },
  ],

  Beauty: [
    { name: "Makeup", category: "beauty" },
    { name: "Skincare", category: "skin-care" },
    { name: "Parfume", category: "fragrances" },
  ],
};

subcategories[group].forEach((item) => {
  container.innerHTML += `
    <a href="productlist.html?category=${item.category}" class="categoryCard">
      <p>${item.name}</p>
    </a>
  `;
});
