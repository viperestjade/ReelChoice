document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    const email = document.getElementById("newEmail").value;
    const password = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Simple validation
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // You can later connect this with backend/local storage
    alert("Account successfully created!");

    // Redirect to homepage or login page
    window.location.href = "ReelChoiceHomepage/ReelChoiceHomepage.html";
});

function goBack() {
    window.location.href = "../index.html";
}
