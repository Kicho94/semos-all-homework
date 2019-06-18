var students = [
	{ 
		name: "Stefan",
		lastName: "Gorgevik",
		age: 25
	},
	{ 
		name: "Jovica",
		lastName: "Gorgevik",
		age: 25
	}
]
var table = document.getElementById("table");

for(var i = 0;i < students.length; i++) {
	var tr = document.createElement("tr");
	for(var j in students[i]) {
		var td = document.createElement("td");
		td.innerText = students[i][j];
		tr.append(td);
	}
	table.append(tr);
}


