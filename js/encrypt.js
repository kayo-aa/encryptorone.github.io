encryptButton.addEventListener("click", function () {
  let encryption = "";
  let words = textarea.value;
  for (let index = 0; index < words.length; index++) {
    const letter = words[index];
    switch (letter) {
      case "a":
        encryption += "ai";
        break;
      case "e":
        encryption += "enter";
        break;
      case "i":
        encryption += "imes";
        break;
      case "o":
        encryption += "ober";
        break;
      case "u":
        encryption += "ufat";
        break;

      default:
        encryption += letter;
        break;
    }
  }

  showContent(encryption);

  prepareOutput();
});
