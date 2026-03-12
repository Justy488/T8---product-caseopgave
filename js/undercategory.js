"use strict";

const params = new URLSearchParams(window.location.search);
const group = params.get("group");

const container = document.querySelector("#subcategoryContainer");

const subcategories = {
  Clothes: [
    { name: "Tops", category: "tops" },
    { name: "Kjoler", category: "womens-dresses" },
  ],

  Accessories: [
    { name: "Sko", category: "womens-shoes" },
    { name: "Tasker", category: "womens-bags" },
    { name: "Smykker", category: "womens-jewellery" },
    { name: "Ure", category: "womens-watches" },
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
