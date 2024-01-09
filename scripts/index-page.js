const Comments = [
  {
    name: "Connor Walton",
    date: 1613500200000,
    siteComment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: 1610130600000,
    siteComment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: 1606847400000,
    siteComment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

function CreateComment() {
  const commentCont = document.querySelector(".comments");
  commentCont.innerHTML = "";
  Comments.forEach((comment) => {
    const commentEl = document.createElement("article");
    commentEl.classList.add("comment-details");
    commentCont.appendChild(commentEl);

    const commentImage = document.createElement("img");
    commentImage.classList.add("comment-details--image");
    commentImage.setAttribute("src", "");
    commentEl.appendChild(commentImage);

    const commentContainer = document.createElement("section");
    commentContainer.classList.add("comment-details--sec");
    commentEl.appendChild(commentContainer);

    const commentName = document.createElement("p");
    commentName.classList.add("comment-details--sec-name");
    commentContainer.appendChild(commentName);
    commentName.innerText = comment.name;

    const commentDate = document.createElement("p");
    commentDate.classList.add("comment-details--sec-date");
    commentContainer.appendChild(commentDate);
    commentDate.innerText = new Date(comment.date).toLocaleDateString("en-US");

    const commentText = document.createElement("p");
    commentText.classList.add("comment-details--sec-text");
    commentContainer.appendChild(commentText);
    commentText.innerText = comment.siteComment;

    const Divider = document.createElement("hr");
    Divider.classList.add("comments__divider");
    commentCont.appendChild(Divider);
  });
}
CreateComment();

const Form = document.querySelector(".comment-section__form");

Form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newName = event.target.name;
  const newComment = event.target.comment;
  Comments.unshift({
    name: newName.value,
    date: Date.now(),
    comment: newComment.value,
  });
  event.target.reset();
  CreateComment();
});
