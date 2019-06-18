		  var fname = document.getElementById('fname').value;
        var lname = document.getElementById('lname').value;
        var age = document.getElementById('age').value;
        var button = document.getElementById("buttonAdd");

function addRow(){                
        var fname = document.getElementById('fname').value;
        var lname = document.getElementById('lname').value;
        var age = document.getElementById('age').value;
                  
        var table = document.getElementsByTagName('table')[0];               
              
        var newRow = table.insertRow(table.rows.length);
                                   
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
            
        cell1.innerHTML = fname;
        cell2.innerHTML = lname;
        cell3.innerHTML = age;
            }

function resetArea(){
    	var resetArea = document.getElementById("fname");
    	var resetArea1 = document.getElementById("lname");
    	var resetArea2 = document.getElementById("age");

    if(resetArea){
        resetArea.value = "";
   }
   	if(resetArea1) {
   		resetArea1.value= "";
   }
   	if(resetArea2) {
   		resetArea2.value= "";
   }
}

button.addEventListener("click", function(){
	addRow();
	resetArea()
});



