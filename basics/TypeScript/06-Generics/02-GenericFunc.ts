/*
interface Person{
    name:string;
    email:string;
}

//Without Generics
function myIdentity(person: Person): void {
    console.log("My name is "+person.name);
    console.log("My mail id is "+person.email);
    console.log("My VoterId is "+1236);
}


//With Generics.
function showIdentity<T>(arg: T): T {
    return arg;
}


/!*=======================================*!/

function getIdentity<Person>(p): number{
    console.log("My name is "+p.name);
    console.log("My mail id is "+p.email);

    return Math.floor(Math.random()*1000);
}
let person: Person = {name: "Thomus", email: "Thomus@someone.com"};
let personId = getIdentity(person);
console.log(person.name + " is found in database with id "+personId);


interface Employee{
    name:string;
    email:string;
}
let emp: Employee = {name: "Carl", email: "Carl@someemp.com"};
let empId = getIdentity(emp);

// expecting number as output from this function
let empId2 = getIdentity<number>(emp);
console.log(emp.name + " is found in database with id "+empId);



interface Person{
    name:string;
    email:string;
}

//Without Generics
function myIdentity(person: Person): void {
    console.log("My name is "+person.name);
    console.log("My mail id is "+person.email);
    console.log("My VoterId is "+1236);
}

//With Generics.
function showIdentity<T>(arg: T): T {
    return arg;
}
*/


/*=======================================*/
interface Person{
    name:string;
    email:string;
}
/*generics input type*/
function getIdentity<T>(ele: T): number{
    if(ele['name']){
        console.log("My name is "+ele['name']);
    }
    if(ele['email']){
        console.log("My mail id is "+ele['email']);
    }

    return Math.floor(Math.random()*1000);
}

let person: Person = {name: "Thomus", email: "Thomus@someone.com"};
let personId = getIdentity(person);
console.log(person.name + " is found in database with id "+personId);




interface Employee{
    name:string;
    email1:string;
}
let emp: Employee = {name: "Carl", email1: "Carl@someemp.com"};
let empId = getIdentity(emp);
console.log(emp.name + " is found in database with id "+empId);

let empId2 = getIdentity(55);
console.log(empId);

