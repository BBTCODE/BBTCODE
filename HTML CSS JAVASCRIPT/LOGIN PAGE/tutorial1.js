
function checkcredential()
{
    let email = "dbprajapati92@gmail.com";
    let password = "12345678";

    let userinputemail = "", userinputpassword = "";


    userinputemail = document.getElementById('email').value;
    userinputpassword = document.getElementById('password').value;

    if(userinputemail == '')
    {
      alert("enter your email id");
      return false;
    }
    if (userinputpassword == '')
    {
        alert("enter your password");
        return false;
    }
    if(userinputpassword.length < 8)
    {
      alert("your password should greather than 8 characters")
    }
    
    if(email.toLowerCase() == userinputemail.toLowerCase() && password == userinputpassword)
    {
        window.location.href = "https://www.hotstar.com/in";
    }
    else
    {
        alert("Email or password is Incorrect!!!");
        return false;
    } 
}

document.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submit").click();
  }
});
