
var entry = document.getElementById("submit_btn");
entry.addEventListener('click', displayDetails);

var row = 1;

function ClearFields() {

    document.getElementById("uname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked =false;
}

function displayDetails() {
    var name = document.getElementById("uname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var gender = document.getElementsByName("gender"); 


    if (!name || !email || !phone) {
        alert("Please fill the details.");
        return;
    }

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    
    var i;
    for(i=0;i<=gender.length;i++){
        if(gender[i].checked){
            val= gender[i].value;

            cell1.innerHTML = name;
            cell2.innerHTML = email;
            cell3.innerHTML = phone;
            cell4.innerHTML = val;
         
        }
    }

    row++;
    document.getElementById('elementId').value='';
}
