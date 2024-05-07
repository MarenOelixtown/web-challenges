console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 0;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogshenfolge verwendet werden, z. B.
const numberOfHotdogs = 4;
if (numberOfHotdogs >= 1000000) {
  console.log("Hotdog-Price: 0.10 Euro");
} else if (numberOfHotdogs >= 100) {
  console.log("Hotdog-Price: 1 Euro");
} else if (numberOfHotdogs >= 5) {
  console.log("Hotdog-Price: 1.50 Euro");
} else {
  console.log("Hotdog-Price: 2 Euro");
}

// Part 4: Daytime
const currentHour = 12;
const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";
const coachName = "Bernd";

const greeting = "Hello " + (coachName === userName ? userName : "coach") + "!";

console.log(greeting);
