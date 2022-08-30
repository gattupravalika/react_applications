let selectedRow=null;

function add(){
    let formData = readFormData();
   if(selectedRow == null) insertrows(formData);
   
   
}

function readFormData(){
    var array={}

 array["firstname"]=document.getElementById("fname").value;
   array["lastname"]=document.getElementById("lname").value;
    array["EmplyeeId"]=document.getElementById("EmplyeeName").value;
    array["designation"]=document.getElementById("Designation").value;
    array["salary"]=document.getElementById("salary").value;
    return array;
    //  array{[firstname,lastname,EmplyeeId,designation,salary]}
    // add(array) 
}
function insertrows(data){
        
    var table = document.getElementById("table");

    var row = table.insertRow();
    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    cell1.innerHTML =data.firstname ;
    cell2.innerHTML =data.lastname ;
    cell3.innerHTML =data.EmplyeeId;
    cell4.innerHTML =data.designation;
    cell5.innerHTML= data.salary;
    

    cell6.innerHTML = '<button id="btnEdit" class="btn btn-success" onclick="onEdit(this)">Edit</button>'; 
   cell7.innerHTML ="<button id='btnDel'  class='btn btn-danger'>Delete</button>";

}

    function onEdit(td) {
        selectedRow = td.parentElement.parentElement.parentElement;
   
    document.getElementById("firstname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("EmplyeeId").value = selectedRow.cells[2].innerHTML;
    document.getElementById("designation").value = selectedRow.cells[3].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[4].innerHTML;
}
function update(array){
    selectedRow.cell[0].innerHTML =array.firstname;
    selectedRow.cell[1].innerHTML =array.lastname;
    selectedRow.cell[2].innerHTML =array.EmplyeeId;
    selectedRow.cell[3].innerHTML =array.salary;
    selectedRow.cell[4].innerHTML =array.designation;
   
}
