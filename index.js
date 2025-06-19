const api = "1eba88f42fbf44c584b3610b3e8d23a5";
const userInput = document.querySelector(".userInput");
const localInput = document.getElementById("localInput");
const container = document.querySelector(".container");

userInput.addEventListener("submit", async (event) => {
   event.preventDefault();

   const cidade = localInput.value;

   if (cidade) {
      try {
         const climaDados = await pegarDadosCidade(cidade);
         exibirDados(climaDados);
      } catch (error) {
         console.error(error);
         displayError(error);
      }
   } else {
      displayError("Por favor, digite uma cidade");
   }
});

async function pegarDadosCidade(cidade) {
   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${api}`;
   const response = await fetch(apiUrl);

   if (!response.ok) {
      throw new Error("Dados não encontrados");
   }

   return await response.json();
}

function exibirDados(dados) {
   const {
      name: city,
      main: { temp, humidity },
      weather: [{ id }],
   } = dados;

   container.textContent = "";
   container.style.display = "flex";

   const nomeCidade = document.createElement("h1");
   const tempCidade = document.createElement("h2");
   const umidDisplay = document.createElement("h4");
   const emoji = document.createElement("p");

   nomeCidade.textContent = city;
   tempCidade.textContent = `${(temp - 273.15).toFixed(1)}°C`;
   umidDisplay.textContent = `Umidade: ${humidity}%`;
   emoji.textContent = encontrarEmoji(id);
   emoji.classList.add("emoji");

   container.appendChild(nomeCidade);
   container.appendChild(tempCidade);
   container.appendChild(umidDisplay);
   container.appendChild(emoji);
}

function encontrarEmoji(idClima) {
   switch (true) {
      case idClima >= 200 && idClima < 300:
         return "🌩️";
         break;
      case idClima >= 300 && idClima < 400:
         return "🌧️";
         break;
      case idClima >= 500 && idClima < 600:
         return "🌧️";
         break;
      case idClima >= 600 && idClima < 700:
         return "❄️";
         break;
      case idClima >= 700 && idClima < 800:
         return "🌫️";
         break;
      case idClima === 800:
         return "☀️";
         break;
      case idClima >= 801 && idClima < 810:
         return "☁️";
         break;
      default:
         return "❓";
   }
}

function displayError(mensagem) {
   const errorDisplay = document.createElement("p");
   errorDisplay.textContent = mensagem;
   errorDisplay.classList.add("errorDisplay");

   container.textContent = "";
   container.style.display = "flex";
   container.appendChild(errorDisplay);
}
