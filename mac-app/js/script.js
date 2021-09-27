let btnClose = document.getElementById("right-panel__close-btn");
let rightPanel = document.getElementById("right-panelJs");
let chat = document.getElementById("chat");

btnClose.onclick = function () {
  rightPanel.classList.toggle("active");
  btnClose.classList.toggle("active");
  chat.classList.toggle("active-right");
};

let nav = document.getElementById("nav");
let firstChannel = document.getElementById("left-panel__group1");

firstChannel.onclick = function () {
  nav.classList.toggle("active");
  firstChannel.classList.toggle("active");
  chat.classList.toggle("active-left");
};
