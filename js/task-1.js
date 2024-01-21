let categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach((categorie) => {
    console.log(`Category: ${categorie.firstElementChild.textContent}`);
    let items = categorie.lastElementChild.children;
    console.log(`Elements: ${items.length}`);
});
