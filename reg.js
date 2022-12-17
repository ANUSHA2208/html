function get()
{
    var a = document.getElementById("name").value;
    var b = document.getElementById("class").value;
    var c = document.getElementById("marks-1").value;
    var d = document.getElementById("marks-2").value;
    var e = document.getElementById("marks-3").value;


    var table = document.getElementsByTagName('table')[0];
    var newRow = table.insertRow(1);
    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);
    var cell5=newRow.insertCell(4);


    cell1.innerHTML=a;
    cell2.innerHTML=b;
    cell3.innerHTML=c;
    cell4.innerHTML=d;
    cell5.innerHTML=e;
}
function delet()
{
    var table = document.getElementsByTagName('table')[0];
    var deleteRow = table.deleteRow(1);

}


function reset()
{
    document.getElementById("name").value="";
    document.getElementById("class").value="";
    document.getElementById("marks-1").value="";
    document.getElementById("marks-2").value="";
    document.getElementById("marks-3").value="";
}