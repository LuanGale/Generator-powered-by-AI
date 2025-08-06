function answerRecipe(response) {
  let recipe = response.data.answer;
  new Typewriter("#result", {
    strings: recipe,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let apiKey = "1t58d76239ab654fd09eabc4co0daf97";
  let ingredientInput = document.querySelector("#search-input");
  let context =
    "You are an AI with vast knowledge in easy recipes that use only 5 ingredients and simple steps. Please generate a recipe in HTML, and only provide the basic HTML";
  let prompt = `Generate an easy recipe with ${ingredientInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let delayAnswer = document.querySelector("#result");
  delayAnswer.innerHTML = "Generating a recipe for you.. please wait";
  axios.get(apiUrl).then(answerRecipe);
}

let formElement = document.querySelector("#generator-form");
formElement.addEventListener("submit", generateRecipe);
