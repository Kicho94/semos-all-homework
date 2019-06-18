var students = [
    {Name: "Name1",
     Surname: "Surname1",
     Age: "Age1"
    },
    {Name: "Name2",
     Surname: "Surname2",
     Age: "Age2"
    },
    {Name: "Name3",
     Surname: "Surname3",
     Age: "Age3"
    },
    {Name: "Name4",
     Surname: "Surname4",
     Age: "Age4"
    }
]

function add_data() {
        var html = "<tbody>";
    for (var i = 0; i < students.length; i++) {
        html += "<tr>"
        html+="<td>"+students[i].Name+"</td>";
        html+="<td>"+students[i].Surname+"</td>";
        html+="<td>"+students[i].Age+"</td>";
        html += "</tr>"
    }
    html+="</tbody>";
    document.getElementById("tab").innerHTML = html;
}

add_data();



document.getElementsByTagName('button')[0].addEventListener("click", function () {
    var name = prompt("Enter Name");
    var surname = prompt("Enter Surname");
    var age = prompt("Enter Age");

    var new_student = {};
    new_student.Name = name;
    new_student.Surname = surname;
    new_student.Age = age;

    students.push(new_student);
    console.log(students);
    add_data();
})
