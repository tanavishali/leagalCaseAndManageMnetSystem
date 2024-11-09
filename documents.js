document
  .getElementById("upload-document-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get document details from form
    const title = document.getElementById("document-title").value.trim();
    const category = document.getElementById("document-category").value;
    const fileInput = document.getElementById("document-file");
    const fileName = fileInput.value.split("\\").pop();

    // Check if all fields are filled
    if (title && category && fileName) {
      // Create new list item for the document
      const newDocument = document.createElement("li");
      newDocument.innerHTML = `<strong>${title}</strong> - Category: ${category}`;

      // Append new document to the document list
      document.getElementById("document-list").appendChild(newDocument);

      // Clear form fields
      document.getElementById("upload-document-form").reset();
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
