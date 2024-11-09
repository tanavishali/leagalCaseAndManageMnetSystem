document
  .getElementById("add-appointment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get appointment details from form
    const clientName = document
      .getElementById("appointment-client")
      .value.trim();
    const appointmentDate = document.getElementById("appointment-date").value;
    const appointmentTime = document.getElementById("appointment-time").value;
    const appointmentPurpose = document
      .getElementById("appointment-purpose")
      .value.trim();

    // Check if all fields are filled
    if (
      clientName &&
      appointmentDate &&
      appointmentTime &&
      appointmentPurpose
    ) {
      // Create new list item for the appointment
      const newAppointment = document.createElement("li");
      newAppointment.innerHTML = `<strong>${clientName}</strong> - Date: ${appointmentDate} - Time: ${appointmentTime} - Purpose: ${appointmentPurpose}`;

      // Append new appointment to the appointment list
      document.getElementById("appointment-list").appendChild(newAppointment);

      // Clear form fields
      document.getElementById("add-appointment-form").reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
// for menu toggle
function toggleMenu() {
  const mobileNav = document.getElementById("mobile-nav");
  if (mobileNav.style.display === "block") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "block";
  }
}
