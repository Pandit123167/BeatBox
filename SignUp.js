function Data() {
    // Get the values of all fields
    let firstName = document.getElementById("First").value;
    let lastName = document.getElementById("Last").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("PassWord").value;
    let confirmPassword = document.getElementById("ConfirmPassword").value;
    let checkbox = document.getElementById("check").checked;

    // Regular expressions for validation
    let namePattern = /^[A-Za-z]+$/;           // Only letters for First and Last name
    let numberPattern = /^\d{10}$/;             // Only 10-digit numbers for phone number
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Basic email pattern
    let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/; // Password with at least one number, one uppercase, one lowercase, and minimum 6 characters

    // Validate First Name (not empty, then letters)
    if (firstName === "") {
        alert("Please fill the First Name.");
        return false;  
    } else if (!namePattern.test(firstName)) {
        alert("First name must contain only letters.");
        return false;  
    }

    // Validate Last Name (not empty, then letters)
    if (lastName === "") {
        alert("Please fill the Last Name.");
        return false;  
    } else if (!namePattern.test(lastName)) {
        alert("Last name must contain only letters.");
        return false;  
    }

    // Validate Phone Number (not empty, then 10 digits)
    if (number === "") {
        alert("Please fill the Phone Number.");
        return false; 
    } else if (!numberPattern.test(number)) {
        alert("Phone number must be exactly 10 digits.");
        return false;  
    }

    // Validate Email (not empty, then valid format)
    if (email === "") {
        alert("Please fill the Email.");
        return false;  
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;  
    }

    // Validate Password (not empty, then strength)
    if (password === "") {
        alert("Please fill the Password.");
        return false;  
    } else if (!passwordPattern.test(password)) {
        alert("Password must be at least 6 characters long, contain at least one number, one uppercase letter, and one lowercase letter.");
        return false;  
    }

    // Validate Confirm Password (not empty, must match Password)
    if (confirmPassword === "") {
        alert("Please confirm your password.");
        return false;  
    } else if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;  
    }

    // Validate Checkbox (must be checked)
    if (!checkbox) {
        alert("Please accept the Terms of Service and Privacy Policy.");
        return false;
    }

    // If all validations pass, allow form submission
    alert("You are successfully registered!");
    return true;
}