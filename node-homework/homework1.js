//Од дадената низа, треба да се отпечати име и презиме на студентот со највисок просек,
//студентот со најнизок просек,
// и средна вредност (просек) на целата генерација (сите студенти)

// var people = [
// 	{ime: "Pero", prezime:"Perovski", prosek: 6.2},
// 	{ime: "Janko", prezime:"Jankovski", prosek: 7.1},
// 	{ime: "Stanko", prezime:"Stankovski", prosek: 8.3},
// 	{ime: "Petko", prezime:"Petkovski", prosek: 9.81},
// 	{ime: "Ivana", prezime:"Ivanovska", prosek: 6},
// 	{ime: "Gordana", prezime:"Gordanovska", prosek: 6.1},
// 	{ime: "Cveta", prezime:"Cvetkoska", prosek: 9.2}
// ];

// //да се отпечати име и презиме на студентот со највисок просек
//     var scores = [];
//     var a;
//     for(var i = 0; i < people.length; i++) {
//         scores.push(people[i].prosek);
//     }
//     var highestScore = scores.reduce((prev, curr) => prev > curr ? a = prev : curr);
//     var filtered = people.filter(person => person.prosek >= a);
//     console.log("The highest score belongs to " + filtered[0].ime + " " + filtered[0].prezime + " with a score of: " +highestScore);
   
// //студентот со најнизок просек,
//     var b;
//     var lowestScore = scores.reduce((prev, curr) => curr < prev ? b = curr : prev);
//     var filtered = people.filter(person => person.prosek <= b);  
//     console.log("The lowest score belongs to " + filtered[0].ime + " " + filtered[0].prezime + " with a score of: " +lowestScore);
    
// //и средна вредност (просек) на целата генерација (сите студенти)
//     var average = scores.reduce((prev, curr) => {                               
//     return prev + curr;
//     });
//     var result = average / scores.length;
//     console.log("The average score of all students is: " + result);


    var students = [
        {ime: "Pero", prezime:"Perovski", prosek: 6.2},
        {ime: "Janko", prezime:"Jankovski", prosek: 7.1},
        {ime: "Stanko", prezime:"Stankovski", prosek: 8.3},
        {ime: "Petko", prezime:"Petkovski", prosek: 9.81},
        {ime: "Ivana", prezime:"Ivanovska", prosek: 6},
        {ime: "Gordana", prezime:"Gordanovska", prosek: 6.1},
        {ime: "Cveta", prezime:"Cvetkoska", prosek: 9.2}
    ];

students.sort((a, b) =>  (a.prosek > b.prosek) ? 1 : -1);
console.log(students);


var min = students[0].ime + " " + students[0].prezime + " " +  students[0].prosek;
console.log(min);

// var last = students.slice(-1)[0]

// console.log(last);