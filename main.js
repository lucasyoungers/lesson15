// start by constructing a variable that is an array of objects, this is our data.
let people = [{
    "id": 1,
    "firstName": "Frank",
    "lastName": "Herbert",
    "job": "Lead Software Engineer",
    "Skills": ["JavaScript", "C#", "SQL", "HTML", "CSS", "SCRUM Master"],
    "Salary": 120196
},
{
    "id": 2,
    "firstName": "Joan",
    "lastName": "Armorett",
    "job": "Jr Software Developer",
    "Skills": ["JavaScript", "HTML", "CSS"],
    "Salary": 70000
},
{
    "id": 3,
    "firstName": "John",
    "lastName": "Mosses",
    "job": "Software Engineer",
    "Skills": ["JavaScript", "C#", "SQL", "HTML", "CSS"],
    "Salary": 101234
},
{
    "id": 4,
    "firstName": "Janet",
    "lastName": "Lee",
    "job": "Software Engineer",
    "Skills": ["JavaScript", "C#", "HTML", "CSS", "Technical Writer"],
    "Salary": 86000
},
{
    "id": 5,
    "firstName": "Garry",
    "lastName": "Funny",
    "job": "Quality Assurance Engineer",
    "Skills": ["JavaScript", "C#", "QA", "C#"],
    "Salary": 89100
},
{
    "id": 6,
    "firstName": "Karen",
    "lastName": "Enoch",
    "job": "Jr Software Engineer",
    "Skills": ["JavaScript", "C#", "HTML", "CSS"],
    "Salary": 70000
},
{
    "id": 7,
    "firstName": "Jason",
    "lastName": "Keel",
    "job": "Quality Assurance Engineer",
    "Skills": ["JavaScript", "C#", "SQL"],
    "Salary": 98000
}
];

function exercise1() {
    // Return one random person from the array of people.
    let randomPerson = people[Math.floor(Math.random() * people.length)];
    // This code is missing a map call to return only an array of firstName and lastName
    document.getElementById("1").innerText = `Answer: ${JSON.stringify(randomPerson)}`;
}

function exercise2() {
    // Return the people sorted by the number if skills they have.
    let answer = ["Not Implemented"];
    document.getElementById("2").innerText = `Answer: ${JSON.stringify(answer)}`;
}

function exercise3() {
    // Return the people sorted by their name, starting with lastName then firstName.
    let answer = ["Not Implemented"];
    // if you do a filter on person.Skills you can test for a specific skill.
    document.getElementById("3").innerText = `Answer: ${JSON.stringify(answer)}`;
}

function exercise4() {
    // Return an array of the people with the fields: name, job and salary. Make name the combination of first and last name and the salary a random number between 60000 and 120000
    let answer = ["Not Implemented"];
    // you can use the method of .includes(substring) on a string to find if a string is found inside a string.
    document.getElementById("4").innerText = `Answer: ${JSON.stringify(answer)}`;
}
