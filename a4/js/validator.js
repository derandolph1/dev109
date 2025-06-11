function isValid() {
  var errorMessages = "";
  var formValid = 0;  

  //First Name: Create variable
  var validFirstname=false;
  
  // Read value from HTML
  var firstname = document.getElementById("firstname").value;
  
  // Do validation - Error message created if the input is blank or greater than 20 characters
  if (firstname==null || firstname==="" || firstname.length > 20) {
    errorMessages +="<p>First name is required and must be less than 20 characters.</p>";
    formValid += 1;
  // Send error message to HTML
   document.getElementById("errorMessages").innerHTML = errorMessages;

  // Return status of each field
  }
  else{
   validFirstname = true;
  }
  return (validFirstname);
  
  //Last Name: Create variable
  var validLastName = false;
  
  // Read value from HTML
  var lastname = document.getElementById("lastname").value;
  
  // Do validation - Error message created if the input is blank or greater than 20 characters
  if (lastname==null || lastname==="" || lastname.length > 20) {
    errorMessages +="<p>Last name is required and must be less than 20 characters.</p>";
    formValid += 1;
  }
  else {
   validLastName = true;
  }
  // Send error message to HTML
   document.getElementById("errorMessages").innerHTML = errorMessages;
   // Return status of each field
   // return (validLastname);
  
  // Email: Create variables  
  var userEmail = document.getElementById("email").value;
  var atpos = userEmail.indexOf("@");
  var dotpos = userEmail.lastIndexOf(".");
  
  //Validate @ and . positions and email length
  if (atpos < 1 || dotpos < atpos+2 || dotpos+2 >= userEmail.length) {
    // send error message. For example:  errorMessages = "<p>Invalid email</p>";
    errorMessages +="<p>Invalid email address.</p>";
    formValid += 1;
    // Return status of each field
    //return false;
  }  
  else{
      //return true;    
  } 
  // Send error message to HTML
   document.getElementById("errorMessages").innerHTML = errorMessages;
  
   //Phone Number: Create variable and read value from HTML
  var phone = document.getElementById("phone").value;
  var numbers=/^[0-9]+$/;
  
   // Validate. Error if phone is not a number, greater than 15 digits, or blank.
  if (phone===null||phone ==="" ||phone.length>15|| !phone.match(numbers)){
    
  //send error message.
  errorMessages = "<p>Invalid phone number.</p>";  
    formValid += 1;
    // Return status of each field
    //return false;
  }
  else{
    //return true; 
  }
  
  // Send error message to HTML
   document.getElementById("errorMessages").innerHTML = errorMessages;
  
  // Username: Create variable and read value from HTML
  var username = document.getElementById("username").value;
  
  // Validate that user name is less than 12 charactkers
  if (username.length > 12){
    
  // Send error message to HTML
    errorMessages = "<p>Username must be less than 12 characters.</p>";
    document.getElementById("errorMessages").innerHTML = errorMessages;
    formValid += 1;
    // Return status of each field
    //return false;
  }
  else{
    //return true;
  }
    
 // Read value from HTML and assign to variable
  var pswd1 = document.getElementById("pswd1").value;
  var pswd2 = document.getElementById("pswd2").value;
  var pswd=/^[A-Za-z0-9\W]+$/;
  
  // Do validation
  if (!pswd.test(pswd1) || pswd1.length > 12){
    errorMessages = "<p>Invalid password. Password must contain an uppercase character, lowercase character, numbers and special character.</p>";
    document.getElementById("errorMessages").innerHTML = errorMessages;
    formValid += 1;
    
    // Return status of each field
    //return false;
  }
  else if (pswd1 != pswd2){
    
  // Send error message to HTML
    errorMessages = "<p>Passwords do not match.</p>";
    formValid += 1;
    document.getElementById("errorMessages").innerHTML = errorMessages;    
  
    // Return status of each field
    //return false;
  }
  else{
    //return true;
  }
 // Address: Read value from HTML and assign to variable 
    var address = document.getElementyId("address").value;
  
    //Validate field is not blank
    if (address == null || address == ""){      
      errorMessages = "<p>Address is required.</p>";
      formValid += 1;
      
      // Send error message to HTML
      document.getElementById("errorMessages").innerHTML = errorMessages;    
      
    // Return status of each field
    //return false;
  } else{
    //return true;
  }
  
  // City: Read value from HTML and assign to variable
    var city = document.getElementyId("city").value;
  
    //Validate that default option is not the current value.
    if (city === "00"){      
      errorMessages = "<p>City is required.</p>";
      formValid += 1;
      
      // Send error message to HTML
      document.getElementById("errorMessages").innerHTML = errorMessages;      
      
    // Return status of each field
    //return false;
  } else{
     // return true;
  }
  
 // Country: Read value from HTML and assign to variable  
  var country = document.getElementById("country").value;
  
  if (country === "000"){
    errorMessages = "<p>Country is required.</p>";
    formValid += 1;
    
    // Return status of each field
    //return false;
  } else{
    //return true;
  }
    document.getElementById("errorMessages").innerHTML = errorMessages;
  
 // Zip Code: Read value from HTML and assign to variable
  var country = document.getElementById("country").value;
  var zip = document.getElementById("zip").value;
  
  // Verify that country is USA
  if (country === "001"){
  // validate Zipcode according to the rules
    if (zip == null || zip == "" || zip.length != 5 || zip == isNaN){
      errorMessages = "<p>Invalid. Zip code must have be five digits.</p>";
      formValid += 1;
      
    // Return status of each field
    //return false;
    }
    else{
      //return true;
    }
  }
  else{
      //return true;
  }  
  document.getElementById("errorMessages").innerHTML = errorMessages;
  
  if (formValid > 0){
    return false;
  }
  else{
    return true;
  }
}
    /*if (firstName() //&&
       // lastName()
    )
    return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}

fname.addEventListener('blur', fName, false);
function firstName(){
    //1) Create variable
    var validFirstname=false;

    //2) read value from HTML
    var firstname = document.getElementById("fname").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("First name valid")
        };

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;

    //5) return status of each field
    return (validFirstname);*/
