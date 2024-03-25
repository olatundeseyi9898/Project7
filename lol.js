function ValidateEmail() {
    // var inputValue = document.getElementById("email").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
      window.location.href = "thanks.html";
      // document.getElementById("displayValue").textContent = inputValue;
      // alert(inputValue);
      return true;
    }
    else {
      // alert("You have entered an invalid email address!");
      document.getElementById("error").style.display = "block";
      // document.getElementById("email").focus();
      document.getElementById("email").style.border = "1px solid red";
      document.getElementById("email").style.backgroundColor = "red";
      document.getElementById("error").style.color = "red";
      return false;
    }
  }