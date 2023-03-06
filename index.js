// const button1 = document.querySelector(".button1");
// const button2 = document.querySelector(".button2");
// const input1 = document.querySelector("#input1");
// input1.value = "New text";
// console.log(button1);
// console.log(button2);
// console.log(input1);
// // input1.setAttribute("disabled", "disabled");
// // console.log(input1);
// // input1.removeAttribute("disabled", "disabled");
// // console.log(input1);

// function ClickOff() {
//   // input1.value.Classlist('')
//   // input1.classList.add("color");
//   // return (input1.setAttribute = `disabled`);
//   input1.setAttribute("disabled", "disabled");

//   // return +alert(`${input.value ** 2}`);
//   // debugger;
//   // var input1Value = input1.value;
//   // var input2Value = input2.value;
//   // input1.value = input2Value;
//   // input2.value = input1Value;
//   // input1.value = input2.value ? (input2.value = input1.value) : false;
//   // input2.value = input1.value;
//   // button.innerText = "sdsdsd";
// }
// // ClickOff();
// function ClickOn() {
//   // input1.value.Classlist('')
//   // input1.classList.add("color");
//   input1.removeAttribute("disabled", "disabled");
// console.log(input1);

//   // input1.setAttribute = ("disabled", "disabled");
//   // return +alert(`${input.value ** 2}`);
//   // debugger;
//   // var input1Value = input1.value;
//   // var input2Value = input2.value;
//   // input1.value = input2Value;
//   // input2.value = input1Value;
//   // input1.value = input2.value ? (input2.value = input1.value) : false;
//   // input2.value = input1.value;
//   // button.innerText = "sdsdsd";
// }

// // Click();

// !!!!!!!!!!!!!

const conteiner = document.querySelector(".conteiner");
const wrraper = document.querySelector(".wrraper");
const conteinerWrraperForImg = document.querySelector(
  ".conteiner_wrraper_for_img"
);
const conteinerWrraperForImg__1 = document.querySelector(
  ".conteiner_wrraper_for_img__1"
);
const conteinerWrraperForImg__2 = document.querySelector(
  ".conteiner_wrraper_for_img__2"
);
const conteinerWrraperForImg__3 = document.querySelector(
  ".conteiner_wrraper_for_img__3"
);
console.log(conteinerWrraperForImg__3);
const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");
console.log(btnLeft);
console.log(btnRight);
// console.log(conteinerWrraperForImg.children);
const arrImg = Array.from(conteinerWrraperForImg.children);
// console.log(arrImg);
function calculator() {
  let count = 0;
  for (let i = 0; i < arrImg.length; i++) {
    // debugger;
    // if (arrImg.length != count) {
    count++;
    console.log(count);
    // }
    // console.log(count);
  }
}
calculator();
// console.log(arrImg.length);
function clickLeft() {}

function clickRight() {}
