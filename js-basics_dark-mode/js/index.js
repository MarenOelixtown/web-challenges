console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const switchDark = document.querySelector('[data-js="dark-mode-button"]');
switchDark.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

const switchLight = document.querySelector('[data-js="light-mode-button"]');
switchLight.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

const toggleMode = document.querySelector('[data-js="toggle-button"]');
toggleMode.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
