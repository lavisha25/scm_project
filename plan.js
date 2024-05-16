// Sample Netflix login page simulation

// Dummy user credentials (replace with real authentication logic)
const validUsername = "user@example.com";
const validPassword = "password123";

// Function to simulate login process
function login(username, password) {
    // Check if username and password match
    if (username === validUsername && password === validPassword) {
        // Successful login
        console.log("Login successful!");
        // Redirect to Netflix home page
        window.location.href = "https://www.netflix.com/";
    } else {
        // Failed login
        console.log("Invalid username or password. Please try again.");
    }
}

// Sample usage:
const usernameInput = "user@example.com"; // User input from login form
const passwordInput = "password123"; // User input from login form

// Call login function with user input
login(usernameInput, passwordInput);
