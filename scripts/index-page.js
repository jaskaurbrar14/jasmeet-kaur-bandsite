import BandSiteApi from "./band-site-api.js";

const api_key = "88589c8e-76d1-4549-8549-6d117cc21e37";

const BandSite = new BandSiteApi(api_key);
BandSite.getComment();

const Form = document.querySelector(".comment-section__form");
Form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const newName = event.target.name.value;
  const newComment = event.target.comment.value;

  const comment = {
    name: newName,
    comment: newComment,
  };
  console.log(comment);
  await BandSite.postComment(comment);
  Form.reset();
  await BandSite.getComment();
});
