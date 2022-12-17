var attempt = 3; 

function validate()
{
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

if(username.length === 0 && password.length===0)
{
  alert("enter required details");
}
else if(username.length===0)
{
 alert("enter username");
}
else if(password.length===0)
{
  alert("enter password");
}else if ( username == "admin" && password == "123")
{
alert ("Login successfully");
window.location = "add.html"; // Redirecting to other page.
return false;
}
else
{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0)
{
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}



  function reset()
  {
    document.getElementById("x").value="0";
    document.getElementById("y").value="0";
    document.getElementById("sum").value="0";
  }

  function add()
  {
    var x = Number(document.getElementById("x").value);
    var y =Number(document.getElementById("y").value);
    var sums = x + y;

document.getElementById("sum").value=String(sums);
  }


  