document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop page from refreshing

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Example hardcoded email and password
    if (email === "admin@email.com" && password === "1234") {
        window.location.href = "ReelChoiceHomepage/ReelChoiceHomepage.html"; 
    } else {
        alert("Incorrect email or password.");
    }
});

function goBack() {
    window.location.href = "index.html";
}
