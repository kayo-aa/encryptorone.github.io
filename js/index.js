let encryptButton = document.querySelector("#encrypt");
let decryptButton = document.querySelector("#decrypt");
let textarea = document.querySelector("#content");
let copyButton = document.getElementById("copy");
let p = document.getElementById("p");

function showContent(content) {
  p.textContent = content;
  if (window.innerWidth >= 718) {
    //innerWidth es un método propio de window que devuelve el ancho de la pantalla
    p.setAttribute("style", "font-weight: 400; font-size: 32px;");
  } else {
    p.setAttribute("style", "font-weight: 400; font-size: 24px;");
  }
}

function removeItem(id) {
  let element = document.getElementById(id);
  element.setAttribute("style", "display: none");
}

function prepareOutput() {
  removeItem("h2");
  removeItem("ilustration");

  textarea.value = "";
  copyButton.setAttribute("style", "display: inline-block;");

  let sectionOutput = document.querySelector(".output");
  sectionOutput.setAttribute(
    "style",
    "display: flex; flex-direction: column; justify-content: space-between;"
  );
}

copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(p.textContent);
});