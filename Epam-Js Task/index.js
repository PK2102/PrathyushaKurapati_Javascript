var btn = document.getElementById('register').addEventListener('click', function() {
  formValidation();
});

function formValidation() {

  var user_name = document.getElementById('username');
  var emailid = document.getElementById('emailid');
  var password = document.getElementById('password');
  var mobileno = document.getElementById('mobileno');
  var male = document.getElementById('male');
  var female = document.getElementById('female');
  var student = document.getElementById('student');
  var company = document.getElementById('company');

  if (allLetter(user_name)) {

    if (ValidateEmail(emailid)) {

      if (password_validation(password, 7, 12)) {

        if (mobile_validation(mobileno)) {

          if (checkgendervalue(male, female)) {

            if (checkAccountvalue(student, company)) {

              swal("Good job!", "You Registered Successfully!", "success");
            }

          }

        }


      }

    }

  }

}

function allLetter(uname) {
  var letters = /^[A-Za-z]+$/;
  var result = false;
  if (uname.value.match(letters))
    result = true;
  else
    alert('Username must have alphabet characters only');

  return result;

}

function ValidateEmail(uemail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var result = false;
  if (uemail.value.match(mailformat))
    result = true;

  else
    alert("You have entered an invalid email address!");

  return result;

}

function password_validation(passid, mx, my) {
  var passid_len = passid.value.length;
  var result = true;
  if (passid_len == 0 || passid_len >= my || passid_len < mx) {
    alert("Password should not be empty / length be between " + mx + " to " + my);
    // passid.focus();
    result = false;
  }
  return result;
}

function mobile_validation(mobileno) {
  var mobile_length = mobileno.value.length;
  var result = false;
  var numbers = /^[0-9]+$/;
  if (mobile_length == 10) {
    //alert("Provide a valid phone number should be 10 numbers");
    if (mobileno.value.match(numbers)) {
      result = true;
    } else {
      alert("Provide a valid phone number ");
      result = false;
    }
  } else {
    alert("Provide a valid phone number ");
    result = false;
  }

  return result;
}

function checkgendervalue(male, female) {
  var x = 0;
  var result = true;
  if (male.checked)
    x++;
  else if (female.checked)
    x++;
  if (x == 0) {
    result = false;
    alert("Please select a field male/female");
  }
  return result;
}

function checkAccountvalue(student, company) {
  var x = 0;
  var result = true;
  if (student.checked)
    x++;
  else if (company.checked)
    x++;
  if (x == 0) {
    result = false;
    alert("Please select a field student/company");
  }
  return result;
}
