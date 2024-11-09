document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Basic validation
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
    } else {
        // Placeholder for actual login logic
        alert("Login successful!");
        // Redirect to dashboard (for now, simulate this by logging a message)
        window.location.href = "dashboard.html"; // Later, connect this to actual authentication
    }
});
