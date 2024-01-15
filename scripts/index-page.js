import BandSiteApi from "./band-site-api.js";

const api_key = "88589c8e-76d1-4549-8549-6d117cc21e37";

const BandSite = new BandSiteApi(api_key);
BandSite.getComment();

const Form = document.querySelector(".comment-section__form");
Form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const newName = event.target.name - input;
  const newComment = event.target.comment - input;

  const comment = {
    name: newName.name,
    comment: newComment.comment,
    timestamp: new Date(),
  };
  await BandSite.postComment(comment);
  Form.reset();
  // comments.unshift(comment);
  await BandSite.getComment();
});

// comments.unshift({
//   name: newName.value,
//   date: Date.now(),
//   comment: newComment.value,
// });
// event.target.reset();
// createComment();
