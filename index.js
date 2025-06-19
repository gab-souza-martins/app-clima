const api = "1eba88f42fbf44c584b3610b3e8d23a5";
const userInput = document.querySelector(".userInput");
const localInput = document.getElementById("localInput");
const container = document.querySelector(".container");

userInput.addEventListener("submit", async (event) => {
   event.preventDefault();

   const cidade = userInput.value;

   if (cidade) {
      try {
         const climaDados = await pegarDadosCidade(cidade);
      } catch (error) {
         console.error(error);
         displayError(error);
      }
   } else {
      displayError("Por favor, digite uma cidade");
   }
});

async function pegarDadosCidade(cidade) {}

function displayError(mensagem) {
   const errorDisplay = document.createElement("p");
   errorDisplay.textContent = mensagem;
   errorDisplay.classList.add("errorDisplay");

   container.textContent = "";
   container.style.display = "flex";
   container.appendChild(errorDisplay);
}
