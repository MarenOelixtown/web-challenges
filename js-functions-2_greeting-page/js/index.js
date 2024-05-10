console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting(dayTime) {
  // Code here

  if (dayTime >= 6 && dayTime < 13) {
    return "Good Morning";
  }
  if (dayTime >= 13 && dayTime <= 18) {
    return "Good Afternoon";
  }
  if (dayTime > 18 && dayTime <= 22) {
    return "Good Evening";
  }
  if ((dayTime > 22 && dayTime <= 24) || (dayTime >= 0 && dayTime < 6)) {
    return "Good Night";
  }
}

function getDayColor(weekDay) {
  // Code here
  if (weekDay === 1) {
    return "darkgray";
  }
  if (weekDay > 1 && weekDay < 5) {
    return "lightblue";
  }
  if (weekDay === 5 || weekDay === 6) {
    return "hotpink";
  }
}

display.textContent = getGreeting(new Date().getHours());
document.body.style.backgroundColor = getDayColor(new Date().getDay());
