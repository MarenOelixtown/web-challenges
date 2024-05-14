console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  /* const formElements = event.target.elements; */
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  const a = parseInt(data.age);
  const b = parseInt(data.badness);
  const ageBadnessSum = a + b;

  console.log(a, b);
  console.log('The age-badness-sum of "firstName" is ' + ageBadnessSum);

  event.target.firstName.focus();
  event.target.reset();
});
