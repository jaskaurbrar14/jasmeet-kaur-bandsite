const Shows = [
  {
    date: 1630866600000,
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: 1632162600000,
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: 1634236200000,
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: 1636137000000,
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: 1637865000000,
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: 1639506600000,
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];
function CreateShow(i) {
  const showCont = document.querySelector(".show-wrapper");
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
    day: "numeric",
  };
  const showDateInput = document.createElement("h3");
  showDateInput.classList.add("show-details__date-input");
  showDate.appendChild(showDateInput);
  showDateInput.innerText = new Date(Shows[i].date).toLocaleDateString(
    "en-US",
    dateFormat
  );
  // venue
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
  showVenueInput.innerText = Shows[i].venue;

  // location
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
  showLocationInput.innerText = Shows[i].location;

  const showButton = document.createElement("Button");
  showButton.classList.add("show-details__button");
  showEl.appendChild(showButton);
  showButton.innerText = "Buy Tickets";

  const Divider = document.createElement("hr");
  Divider.classList.add("show__divider");
  showCont.appendChild(Divider);
}
for (let i = 0; i < Shows.length; i++) {
  CreateShow(i);
}

const showCont = document.querySelector(".show-wrapper");
showCont.addEventListener("click", (event) => {
  const newShowEl = event.target;
  newShowEl.classList.add("show-details--highlight");
});
