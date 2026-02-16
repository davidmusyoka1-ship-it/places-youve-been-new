// Array to store places
let places = [];

// Add a test place so the box is never empty
const testPlace = new Place("Nairobi", "KICC", "December", "Beautiful skyline");
places.push(testPlace);

// Grab DOM elements
const form = document.getElementById("placeForm");
const placesList = document.getElementById("placesList");
const placeDetails = document.getElementById("placeDetails");

// Function to display places
function displayPlaces() {
  placesList.innerHTML = "";

  places.forEach((place, index) => {
    const li = document.createElement("li");
    li.textContent = place.location;
    li.classList.add("place-item");

    li.addEventListener("click", () => {
      placeDetails.innerHTML = `
<h3>${place.location}</h3>
<p><strong>Landmark:</strong> ${place.landmark}</p>
<p><strong>Season:</strong> ${place.season}</p>
<p><strong>Notes:</strong> ${place.notes}</p>
      `;
    });

    placesList.appendChild(li);
  });
}

// Initial display
displayPlaces();

// Handle form submission
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const location = document.getElementById("location").value;
  const landmark = document.getElementById("landmark").value;
  const season = document.getElementById("season").value;
  const notes = document.getElementById("notes").value;

  const newPlace = new Place(location, landmark, season, notes);
  places.push(newPlace);

  displayPlaces();
  form.reset();
});
