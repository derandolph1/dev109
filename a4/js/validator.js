function isValid(e) {

    var errorMessages = "Please correct the following errors:<ul>";
    var formValid = 0;

    //First Name: Create variable. Read value from HTML.
    var firstname = document.getElementById("firstname").value;
    var reName = /^[A-Za-z]+$/

    // First Name: Error message created if the input is blank or greater than 20 characters
    if (firstname == null || firstname === "") {
        // Add error message to variable
        errorMessages += "<li>First name is required.</li>";
        formValid += 1;
    } else if (!reName.test(firstname)) {
        // Add error message to variable
        errorMessages += "<li>First name can only contain letters.</li>";
        formValid += 1;
    } else if (firstname.length > 20) {
        // Add error message to variable
        errorMessages += "<li>First name must be less than 20 characters.</li>";
        formValid += 1;
    }

    //Last Name: Create variable
    var validLastName = false;

    // Read value from HTML
    var lastname = document.getElementById("lastname").value;

    // Do validation - Error message created if the input is blank or greater than 20 characters
    if (lastname == null || lastname === "") {
        // Add error message to variable
        errorMessages += "<li>Last name is required.</li>";
        formValid += 1;
    } else if (!reName.test(lastname)) {
        // Add error message to variable
        errorMessages += "<li>Last name can only contain letters.</li>";
        formValid += 1;
    } else if (lastname.length > 20) {
        // Add error message to variable
        errorMessages += "<li>Last name must be less than 20 characters.</li>";
        formValid += 1;
    }

    // Email: Create variables  
    var userEmail = document.getElementById("email").value;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");

    //Validate @ and . positions and email length
    if (userEmail == null || userEmail === "") {
        // Add error message to variable
        errorMessages += "<li>Email address is required.</li>";
        formValid += 1;
    } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        // Add error message to variable
        errorMessages += "<li>Invalid email address.</li>";
        formValid += 1;
    }

    //Phone Number: Create variable and read value from HTML
    var phone = document.getElementById("phone").value;
    var numbers = /^[0-9]+$/;

    // Validate. Error if phone is not a number, greater than 15 digits, or blank.
    if (phone === null || phone === "") {
        // Add error message to variable
        errorMessages += "<li>Phone number is required.</li>";
        formValid += 1;
    } else if (phone.length > 15) {
        // Add error message to variable
        errorMessages += "<li>Phone number cannot contain more than 15 digits.</li>";
        formValid += 1;
    } else if (!phone.match(numbers)) {
        // Add error message to variable
        errorMessages += "<li>Invalid phone number.</li>";
        formValid += 1;
    }

    // Address: Read value from HTML and assign to variable 
    var address = document.getElementById("address").value;

    //Validate field is not blank
    if (address == null || address == "") {
        errorMessages += "<li>Address is required.</li>";
        formValid += 1;
    }

    // City: Read value from HTML and assign to variable
    var city = document.getElementById("city").value;

    //Validate that default option is not the current value.
    if (city == null || city === "") {
        // Add error message to variable
        errorMessages += "<li>City is required.</li>";
    }

    var state = document.getElementById("state").value;

    //Validate that default option is not the current value.
    if (state === "00") {
        // Add error message to variable
        errorMessages += "<li>State is required.</li>";
        formValid += 1;
    }

    // Country: Read value from HTML and assign to variable
    var country = document.getElementById("country").value;

    if (country === "000") {
        errorMessages += "<li>Country is required.</li>";
        formValid += 1;
    }

    // Zip Code: Read value from HTML and assign to variable
    var country = document.getElementById("country").value;
    var zip = document.getElementById("zip").value;

    // Verify that country is USA
    if (country === "001") {
        // validate Zipcode according to the rules
        if (zip == null || zip == "") {
            // Add error message to variable
            errorMessages += "<li>Zip code is required.</li>";
            formValid += 1;
        } else if (zip.length != 5 || zip === isNaN) {
            // Add error message to variable
            errorMessages += "<li>Invalid. Zip code must contain five digits.</li>";
            formValid += 1;
        }
    }

    // Username: Create variable and read value from HTML
    var username = document.getElementById("username").value;

    // Validate that user name is entered and 12 characters or less
    if (username == null || username === "") {
        // Add error message to variable
        errorMessages += "<li>Username is required.</li>";
        formValid += 1;
    } else if (username.length > 12) {
        // Add error message to variable
        errorMessages += "<li>Username must be less than 12 characters.</li>";
        formValid += 1;
    }

    // Read value from HTML and assign to variable
    var pswd1 = document.getElementById("pswd1").value;
    var pswd2 = document.getElementById("pswd2").value;
    //Regular Expression for password validation. Lowercase, Uppercase, digits, special characters, minimum of 6, maximum of 12.
    var pswd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*]).{6,12}$/

    // Do validation
    if (pswd1 == null || pswd1 === "") {
        // Add error message to variable
        errorMessages += "<li>Password is required.</li>";
        formValid += 1;
    } else if (pswd1.length > 12) {
        // Add error message to variable
        errorMessages += "<li>Password cannot contain more than 12 characters.</li>";
        formValid += 1;
    } else if (pswd.test(pswd1) != true) {
    // Add error message to variable
    errorMessages += "<li>Invalid password. Password must contain an uppercase character, lowercase character, numbers and one of the following special characters: !@#$%&*</li>";
    formValid += 1;
    } else if (pswd1 != pswd2){    
    // Add error message to variable
    errorMessages += "<li>Passwords do not match.</li>";
    formValid += 1;
    }

    //Check if errors are greater than zero and display messages.
    if (formValid > 0) {
    // Send error message to HTML
      errorMessages += "</ul>";
      document.getElementById("errorMessages").innerHTML = errorMessages;
      return false;
    } else {
        //If no errors return true.
        return true;
    }
    }
//Event listener on customer info form. Call validation function and prevent submission if it doesn't return true. If true, proceed to thank you page.
document.getElementById("customerinfo").addEventListener("submit", (e) => {
    e.preventDefault();
    if (isValid() == true) {
        window.location.href = "ty.html";
    };
});
