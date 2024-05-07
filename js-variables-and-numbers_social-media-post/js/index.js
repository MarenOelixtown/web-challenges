console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const titlePost = "First post";
const textPost = "This is the text of the first post.";
let numberOfLikes = 0;
const authorPost = "Username";
const isReported = false;
// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log("titlePost: ", titlePost);
console.log("textPost: ", textPost);
console.log("numberOfLikes: ", numberOfLikes);
console.log("authorPost: ", authorPost);
console.log("isReported: ", isReported);

numberOfLikes++;
console.log("numberOfLikes: ", numberOfLikes);

// --^-- write your code here --^--
