if (localStorage.getItem("isLoggedIn") !== "true") {
    alert("Please login first");
    window.location.href = "../index.html"; // back to login page
}
