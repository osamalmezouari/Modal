"use strict";
const openModel = document.querySelector(".openModel");
const modelContent = document.querySelector(".modalContent");
const parentEle = document.querySelector(".parent");
const xmark = document.querySelector(".fa-xmark");
openModel.onclick = () => {
    modelContent.style.display = "grid";
    parentEle.style.backgroundColor = "rgba(73, 166, 233, 0.5)";
};
xmark.onclick = () => {
    modelContent.style.display = "none";
    parentEle.style.backgroundColor = "transparent";
};
