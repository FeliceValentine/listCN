const placeholder = document.getElementById("placeholder");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const list = document.getElementById("list");
const delBut = document.getElementById("delBut");
const delF = document.getElementById("delf")

submit.addEventListener("click",() =>{
   list.innerHTML += `<li>${input.value}</li>`;
   input.value = "";
})

delBut.addEventListener("click",() => {
   list.removeChild(list.childNodes[list.childNodes.length - 1])
})

delF.addEventListener("click",() => {
   list.removeChild(list.childNodes[0])
})