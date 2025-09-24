// Sample destination data
const destinations = [
  { name: "Kerala Backwaters" },
  { name: "Goa Beaches" },
  { name: "Rajasthan Desert Safari" },
  { name: "Manali Hill Station" },
  { name: "Shimla Travel" },
  { name: "Andaman Islands" },
  { name: "Agra Taj Mahal" },
  { name: "Darjeeling Tea Gardens" }
];

const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");

// Function to display results
function displayResults(filteredDestinations) {
  results.innerHTML = ""; // Clear previous results
  if (filteredDestinations.length === 0) {
    results.innerHTML = "<p>No destinations found.</p>";
    return;
  }

  filteredDestinations.forEach(dest => {
    const card = document.createElement("div");
    card.classList.add("result-card");
    card.textContent = dest.name;
    results.appendChild(card);
  });
}

// Event listener for search input
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = destinations.filter(dest =>
    dest.name.toLowerCase().includes(query)
  );
  displayResults(filtered);
});

// Display all destinations initially
displayResults(destinations);
