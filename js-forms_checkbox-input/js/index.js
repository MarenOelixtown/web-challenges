console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideSuccessMessage() {
  successMessage.setAttribute("hidden", "");
}
function showSuccessMessage() {
  successMessage.removeAttribute("hidden");
}

tosCheckbox.addEventListener("input", (event) => {
  if (event.target.checked === true) {
    hideTosError();
  } else {
    showTosError();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  if (tosCheckbox.checked === false) {
    return;
  } else {
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  showSuccessMessage();
  /*  alert("Form submitted"); */
});
