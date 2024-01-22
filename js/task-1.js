let categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach((category) => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    let items = category.lastElementChild.children;
    console.log(`Elements: ${items.length}`);
});
