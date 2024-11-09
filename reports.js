document
  .getElementById("generate-report-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const reportType = document.getElementById("report-type").value;
    const reportContent = document.getElementById("report-content");

    // Clear previous report content
    reportContent.innerHTML = "";

    // Generate a sample report based on the selected type
    if (reportType === "client-activity") {
      reportContent.innerHTML = `
            <h3>Client Activity Report</h3>
            <ul>
                <li>John Doe - Last Interaction: 2023-10-01</li>
                <li>Jane Smith - Last Interaction: 2023-11-05</li>
                <li>Robert Brown - Last Interaction: 2023-09-20</li>
            </ul>
        `;
    } else if (reportType === "case-progress") {
      reportContent.innerHTML = `
            <h3>Case Progress Report</h3>
            <ul>
                <li>Case A - Status: In Progress - Last Update: 2023-10-10</li>
                <li>Case B - Status: Completed - Last Update: 2023-11-02</li>
                <li>Case C - Status: Pending - Last Update: 2023-09-25</li>
            </ul>
        `;
    } else if (reportType === "appointment-summary") {
      reportContent.innerHTML = `
            <h3>Appointment Summary Report</h3>
            <ul>
                <li>John Doe - Scheduled: 2023-10-01 at 10:00 AM</li>
                <li>Jane Smith - Scheduled: 2023-11-05 at 2:00 PM</li>
                <li>Robert Brown - Scheduled: 2023-09-20 at 1:30 PM</li>
            </ul>
        `;
    } else {
      reportContent.innerHTML =
        "<p>No report available for the selected type.</p>";
    }
  });
// menu responsive toggle
function toggleMenu() {
  const mobileNav = document.getElementById("mobile-nav");
  if (mobileNav.style.display === "block") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "block";
  }
}
