function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Make a POST request to your authentication endpoint
  fetch("login.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((responses) => {
      const response = responses.find(
        (result) => result.status === "success" || result.status === "error"
      );
      if (response.status === "success") {
        console.log("Login successful:", response);
        // Handle successful login, e.g., redirect to another page
      } else {
        console.error("Login error:", response.message);
        // Display an error message to the user
        alert("Login failed. Please check your credentials.");
      }
    })
    .catch((error) => {
      console.error("Error fetching simulated response:", error);
    });
}
