const openModel = document.querySelector(".openModel") as HTMLButtonElement
const modelContent = document.querySelector(".modalContent") as HTMLDivElement
const parentEle = document.querySelector(".parent") as HTMLDivElement
const xmark = document.querySelector(".fa-xmark") as HTMLDivElement

openModel.onclick = () => {
    modelContent.style.display = "grid"
    parentEle.style.backgroundColor = "rgba(73, 166, 233, 0.5)"
}
xmark.onclick = () => {
    modelContent.style.display = "none"
    parentEle.style.backgroundColor = "transparent"
}