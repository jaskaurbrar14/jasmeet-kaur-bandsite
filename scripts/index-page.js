// const Comments = [
//   {
//     name: "Connor Walton",
//     date: 1613500200000,
//     siteComment:
//       "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
//   },
//   {
//     name: "Emilie Beach",
//     date: 1610130600000,
//     siteComment:
//       "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
//   },
//   {
//     name: "Miles Acosta",
//     date: 1606847400000,
//     siteComment:
//       "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
//   },
// ];

import BandSiteApi from "./band-site-api.js";

const api_key = "88589c8e-76d1-4549-8549-6d117cc21e37";

const BandSite = new BandSiteApi(api_key);
BandSite.getComment();

const Form = document.querySelector(".comment-section__form");
Form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const newName = event.target.name;
  const newComment = event.target.comment;

  const comment = {
    name: newName,
    comment: newComment,
  };
  await BandSite.postComment(comment);
  Form.reset();
  // comments.unshift({
  //   name: newName.value,
  //   date: Date.now(),
  //   comment: newComment.value,
  // });
  await BandSite.getComment();
});

// comments.unshift({
//   name: newName.value,
//   date: Date.now(),
//   comment: newComment.value,
// });
// event.target.reset();
// createComment();
