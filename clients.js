document
  .getElementById("add-client-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get client information from form
    const name = document.getElementById("client-name").value.trim();
    const email = document.getElementById("client-email").value.trim();
    const phone = document.getElementById("client-phone").value.trim();
    const address = document.getElementById("client-address").value.trim();

    // Check if all fields are filled
    if (name && email && phone && address) {
      // Create new list item
      const newClient = document.createElement("li");
      newClient.innerHTML = `<strong>${name}</strong> - ${email} - ${phone}`;

      // Append new client to the client list
      document.getElementById("client-list").appendChild(newClient);

      // Clear form fields
      document.getElementById("add-client-form").reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
// menu toggle responsive
function toggleMenu() {
  const mobileNav = document.getElementById("mobile-nav");
  if (mobileNav.style.display === "block") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "block";
  }
}
