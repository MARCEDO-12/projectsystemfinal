// ---------- SIGN UP ----------
document.querySelector(".sign-up form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const password = this.querySelector('input[type="password"]').value.trim();

    if (!name || !email || !password) {
        alert("Please fill all fields");
        return;
    }

    const user = {
        name,
        email,
        password
    };

    localStorage.setItem("userAccount", JSON.stringify(user));
    alert("Sign Up successful! Please Sign In.");

    document.getElementById("container").classList.remove("active");
});


// ---------- SIGN IN ----------
document.querySelector(".sign-in form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = this.querySelector('input[type="email"]').value.trim();
    const password = this.querySelector('input[type="password"]').value.trim();

    const savedUser = JSON.parse(localStorage.getItem("userAccount"));

    if (!savedUser) {
        alert("No account found. Please Sign Up first.");
        return;
    }

    if (email === savedUser.email && password === savedUser.password) {
        alert("Welcome " + savedUser.name + "!");
        localStorage.setItem("isLoggedIn", "true");

        // 🔗 Redirect to Laptop Store page
        window.location.href = "../HTML/index.html"; 
    } else {
        alert("Incorrect email or password");
    }
});

