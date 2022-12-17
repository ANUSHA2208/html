var attempts = 3;
function login()
{
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    if(user.length===0 && pass.length===0)
    {
        document.getElementById("err3").innerHTML="Enter Required details";
        // alert("ij");
        return false;
    }
    else if(user.length===0)
    {
        document.getElementById("err1").innerHTML="enter username"
    }
   else if(pass.length===0)
   {
    document.getElementById("err2").innerHTML="enter password"
   }
   else if(user== "admim" && pass=="123")
   {
    alert("Login Successfull");
    window.location="table.html"
    return false;
   }
   else
   {
    attempts--;
    document.getElementById("err3").innerHTML="you have "+ attempts + "attempts left";


    if(attempts==0)
    {
        document.getElementById("user").disabled = true;
        document.getElementById("pass").disabled = true;
        document.getElementById("btn").disabled=true;
        return false;
    }
   }
}



