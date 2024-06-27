console.log("TAREA #5")

/* Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to move "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
 */

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(people); // Prints the original array

people.splice(people.indexOf("Dani"), 1); // Removes "Dani"
people.splice(people.indexOf("Juan"), 1); // Removes "Juan"

people.splice(people.indexOf("Luis"), 1); // Removes "Luis" from current position
people.unshift("Luis"); // Adds "Luis" to the front

people.push("YourName"); // Adds your name to the end

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Maria") {
        break;
    }
}

console.log(people.indexOf("Maria")); // Prints the index of "Maria"

console.log(people); // Prints the final array with 4 people

let personas = ["Maria", "Dulce", "Arturo", "Alexis", "Lulu"];


console.log(personas);


personas.splice(personas.indexOf("Maria"), 1);
console.log(personas); 


personas.splice(personas.indexOf("Dulce"), 1);
console.log(personas); 


personas.splice(personas.indexOf("Arturo"), 1);
personas.unshift("Luis");
console.log(personas); 


personas.push("Arturo");
console.log(personas); 


for (let i = 0; i < personas.length; i++) {
    console.log(personas[i]);
    if (personas[i] === "Maria") {
        break;
    }
}


console.log(personas.indexOf("Maria")); // 1


console.log(personas); 
