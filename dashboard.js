function toggleMenu() {
  const mobileNav = document.getElementById("mobile-nav");
  if (mobileNav.style.display === "block") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "block";
  }
}
// Sample data for dashboard (replace with real data when backend is ready)
const dashboardData = {
  totalClients: 25,
  ongoingCases: 8,
  upcomingAppointments: 3,
  pendingDocuments: 5,
  recentActivities: [
    "Added new client: John Doe",
    "Updated case status for Case B",
    "Scheduled appointment with Jane Smith",
  ],
  upcomingAppointmentsList: [
    "John Doe - Court Date: 2023-10-12",
    "Jane Smith - Consultation: 2023-10-15",
    "Robert Brown - Follow-up: 2023-10-20",
  ],
};

// Populate dashboard with sample data
document.getElementById("client-count").innerText = dashboardData.totalClients;
document.getElementById("case-count").innerText = dashboardData.ongoingCases;
document.getElementById("appointment-count").innerText =
  dashboardData.upcomingAppointments;
document.getElementById("document-count").innerText =
  dashboardData.pendingDocuments;

// Display recent activities
const activityList = document.getElementById("activity-list");
activityList.innerHTML = "";
dashboardData.recentActivities.forEach((activity) => {
  const li = document.createElement("li");
  li.innerText = activity;
  activityList.appendChild(li);
});

// Display upcoming appointments
const appointmentList = document.getElementById("appointment-list");
appointmentList.innerHTML = "";
dashboardData.upcomingAppointmentsList.forEach((appointment) => {
  const li = document.createElement("li");
  li.innerText = appointment;
  appointmentList.appendChild(li);
});
