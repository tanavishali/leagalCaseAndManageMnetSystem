document
  .getElementById("add-case-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get case information from form
    const caseName = document.getElementById("case-name").value.trim();
    const clientName = document.getElementById("case-client").value.trim();
    const caseType = document.getElementById("case-type").value;
    const courtDate = document.getElementById("court-date").value;

    // Check if all fields are filled
    if (caseName && clientName && caseType && courtDate) {
      // Create new list item for the case
      const newCase = document.createElement("li");
      newCase.innerHTML = `<strong>${caseName}</strong> - Client: ${clientName} - Type: ${caseType} - Date: ${courtDate}`;

      // Append new case to the case list
      document.getElementById("case-list").appendChild(newCase);

      // Clear form fields
      document.getElementById("add-case-form").reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
//  for menu humberg
function toggleMenu() {
  const mobileNav = document.getElementById("mobile-nav");
  if (mobileNav.style.display === "block") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "block";
  }
}
