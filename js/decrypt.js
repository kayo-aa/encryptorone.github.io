decryptButton.addEventListener("click", function () {
  let decryption = "";
  let words = textarea.value;
  for (let index = 0; index < words.length; index++) {
    const letter = words[index];
    switch (letter) {
      case "a":
        decryption += "a";
        index += 1;
        break;
      case "e":
        decryption += "e";
        index += 4;
        break;
      case "i":
        decryption += "i";
        index += 3;
        break;
      case "o":
        decryption += "o";
        index += 3;
        break;
      case "u":
        decryption += "u";
        index += 3;
        break;

      default:
        decryption += letter;
        break;
    }
  }

  showContent(decryption);

  prepareOutput();
});
