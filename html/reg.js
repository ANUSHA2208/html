function get()
{
    var a = document.getElementById("user").value;
    var b = document.getElementById("age").value;

    var table = document.getElementsByTagName('table')[0];
    var newrow = table.insertRow(1);
    var cell1 = newrow.insertCell(0);
    var cell2 = newrow.insertCell(1);

cell1.innerHTML=a;
cell2.innerHTML=b;



}

function delet()
{
    var table = document.getElementsByTagName('table')[0];
    var deleteRow = table.deleteRow(1);

}
