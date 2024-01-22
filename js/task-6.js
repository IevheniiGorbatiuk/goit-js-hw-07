function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");
let numberOfSquares = 0;
function createBoxes(amount){
  if(amount > 0 && amount <=100){
    let squares = [];
    let width = 30;
    let height = 30;
    for(let i = 0; i < amount; i++){
      squares.push(`<div style = "width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()};"></div>`);
      width += 10;
      height += 10;
    }
    squares = squares.join("");
    boxes.insertAdjacentHTML("beforeend", squares);
  }else return;
}
function destroyBoxes(){
  boxes.innerHTML = "";
}  
createBtn.addEventListener("click", () =>{
  destroyBoxes();
  createBoxes(numberOfSquares);
});
input.addEventListener("blur", event =>{
  numberOfSquares = event.currentTarget.value;
  event.currentTarget.value = "";
});
destroyBtn.addEventListener("click", destroyBoxes);


