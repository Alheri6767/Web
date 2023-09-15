const myForm = document.getElementById("form");
myForm.addEventListener('submit', function(e){
    let Email = document.forms["form"]["email"].value;
    let Password = document.forms["form"]["password"].value;
    let emailRegex  = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if(Email == ""  && Password == ""){
      alert("pls enter  valid login details");
      //return True;
    }
      if (Email  =="" && passwordRegex.test(Password)){
        alert("Enter your email");
        //return True;
    }
    if(Password =="" && emailRegex.test(Email)){
      alert("Enter your password");
      //return True;
  }
      else if(emailRegex.test(Email) && passwordRegex.test(Password)){
      alert("login successful");
      //return True ;
    }
    else if (emailRegex.test(Email) && !passwordRegex.test(Password)){
    alert("Password is not stronger password");
    }
    else if (passwordRegex.test(Password) && !emailRegex.test(Email) ){
      alert("Enter a valid email");
      }
    e.preventDefault();
  });