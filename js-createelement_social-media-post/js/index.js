console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPost = document.createElement("article");
newPost.classList.add("post");

const postText = document.createElement("p");
postText.classList.add("post__content");
postText.textContent = "This is a second post message.";
newPost.append(postText);

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");
newPost.append(postFooter);

const user = document.createElement("span");
user.classList.add("post__username");
user.textContent = "@username";
postFooter.append(user);

const button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("data-js", "like-button");
button.classList.add("post__button");
button.textContent = "♥ Like";
button.addEventListener("click", handleLikeButtonClick);
postFooter.append(button);

document.body.append(newPost);
