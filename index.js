const api = "1eba88f42fbf44c584b3610b3e8d23a5";
const userInput = document.querySelector(".userInput");
const localInput = document.getElementById("localInput");
const container = document.querySelector(".container");

userInput.addEventListener("submit", (event) => {
   event.preventDefault();

   const cidade = userInput.value;

   if (cidade) {
   } else {
      displayError("Por favor, digite uma cidade");
   }
});

function displayError(mensagem) {
   const errorDisplay = document.createElement("p");
   errorDisplay.textContent = mensagem;
   errorDisplay.classList.add("errorDisplay");
}
