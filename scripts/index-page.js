import bandSiteApi from "./band-site-api.js";

const apiKey = "88589c8e-76d1-4549-8549-6d117cc21e37";

const bandSite = new bandSiteApi(apiKey);

bandSite.getComment();

const form = document.querySelector(".comment-section__form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const newName = event.target.name.value;
  const newComment = event.target.comment.value;
  const comment = {
    name: newName,
    comment: newComment,
  };
  console.log(comment);
  await bandSite.postComment(comment);
  form.reset();
  await bandSite.getComment();
});
