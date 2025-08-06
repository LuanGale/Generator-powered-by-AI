function generateRecipe(event) {
  event.preventDefault();
  new Typewriter("#result", {
    strings: "Recipe ingredients & instructions",
    autoStart: true,
    delay: 20,
  });
}

let formElement = document.querySelector("#generator-form");
formElement.addEventListener("submit", generateRecipe);
