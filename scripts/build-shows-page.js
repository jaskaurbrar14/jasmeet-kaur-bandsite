import BandSiteApi from "./band-site-api.js";

const api_key = "88589c8e-76d1-4549-8549-6d117cc21e37";

const BandSite = new BandSiteApi(api_key);

BandSite.getShowDates();

const showCont = document.querySelector(".show-wrapper");
showCont.addEventListener("click", (event) => {
  const newShowEl = event.target;
  newShowEl.classList.add("show-details--highlight");
});
