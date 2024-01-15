export default class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://project-1-api.herokuapp.com/";
  }

  async postComment(comment) {
    try {
      await axios.post(
        `${this.baseUrl}comments?api_key=${this.apiKey}`,
        comment
      );
    } catch (error) {
      console.error("Failed to post comment:", error);
    }
  }

  async getComment() {
    try {
      const response = await axios.get(
        `${this.baseUrl}comments?api_key=${this.apiKey}`
      );
      const comments = response.data;
      comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

      function createComment() {
        const commentCont = document.querySelector(".comments");
        commentCont.innerHTML = "";
        comments.forEach((comment) => {
          const commentEl = document.createElement("article");
          commentEl.classList.add("comments-details");
          commentCont.appendChild(commentEl);

          const commentImage = document.createElement("img");
          commentImage.classList.add("comments-details--image");
          commentImage.setAttribute("src", " ");
          commentEl.appendChild(commentImage);

          const commentContainer = document.createElement("section");
          commentContainer.classList.add("comments-details--sec");
          commentEl.appendChild(commentContainer);

          const commentName = document.createElement("p");
          commentName.classList.add("comments-details--sec-name");
          commentContainer.appendChild(commentName);
          commentName.innerText = comment.name;

          const dateFormat = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          };

          const commentDate = document.createElement("p");
          commentDate.classList.add("comments-details--sec-date");
          commentContainer.appendChild(commentDate);
          commentDate.innerText = new Date(
            comment.timestamp
          ).toLocaleDateString("en-US", dateFormat);

          const commentText = document.createElement("p");
          commentText.classList.add("comments-details--sec-text");
          commentContainer.appendChild(commentText);
          commentText.innerText = comment.comment;

          const Divider = document.createElement("hr");
          Divider.classList.add("comments__divider");
          commentCont.appendChild(Divider);
        });
      }
      createComment();
    } catch (error) {
      console.log("Failure to retrieve comments", error);
    }
  }

  async getShowDates() {
    try {
      const response = await axios.get(
        `${this.baseUrl}showdates?api_key=${this.apiKey}`
      );
      const showdates = response.data;
      console.log(showdates);

      function createShow() {
        const showCont = document.querySelector(".show-wrapper");
        showCont.innerHTML = "";
        showdates.forEach((showdate) => {
          const showEl = document.createElement("article");
          showEl.classList.add("show-details");
          showCont.appendChild(showEl);

          const showDate = document.createElement("section");
          showDate.classList.add("show-details__date");
          showEl.appendChild(showDate);

          const showDateLabel = document.createElement("p");
          showDateLabel.classList.add("show-details__date-label");
          showDate.appendChild(showDateLabel);
          showDateLabel.innerText = "Date";

          const dateFormat = {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "2-digit",
          };
          const showDateInput = document.createElement("h3");
          showDateInput.classList.add("show-details__date-input");
          showDate.appendChild(showDateInput);
          showDateInput.innerText = new Date(showdate.date).toLocaleDateString(
            "en-US",
            dateFormat
          );

          const showVenue = document.createElement("section");
          showVenue.classList.add("show-details__venue");
          showEl.appendChild(showVenue);

          const showVenueLabel = document.createElement("p");
          showVenueLabel.classList.add("show-details__venue-label");
          showVenue.appendChild(showVenueLabel);
          showVenueLabel.innerText = "Venue";

          const showVenueInput = document.createElement("p");
          showVenueInput.classList.add("show-details__venue-input");
          showVenue.appendChild(showVenueInput);
          showVenueInput.innerText = showdate.place;

          const showLocation = document.createElement("section");
          showLocation.classList.add("show-details__location");
          showEl.appendChild(showLocation);

          const showLocationLabel = document.createElement("p");
          showLocationLabel.classList.add("show-details__location-label");
          showLocation.appendChild(showLocationLabel);
          showLocationLabel.innerText = "Location";

          const showLocationInput = document.createElement("p");
          showLocationInput.classList.add("show-details__location-input");
          showLocation.appendChild(showLocationInput);
          showLocationInput.innerText = showdate.location;

          const showButton = document.createElement("Button");
          showButton.classList.add("show-details__button");
          showEl.appendChild(showButton);
          showButton.innerText = "Buy Tickets";

          const Divider = document.createElement("hr");
          Divider.classList.add("show__divider");
          showCont.appendChild(Divider);
        });
      }
      createShow();
    } catch (error) {
      console.error("Failed to get showdates:", error);
    }
  }
}
