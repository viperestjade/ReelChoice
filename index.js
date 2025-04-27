document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Stop page from refreshing

    // Simple fake validation (you can replace this)
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(email && password) {
        // Simulate "successful" login
        window.location.href = "ReelChoiceHomepage.html"; // teleport to homepage
    } else {
        alert("Please enter both email and password.");
    }
});
