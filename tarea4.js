console.log("TAREA #4")
/* Exercise #4 (sugerencia filter() e includes())
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
CREA UN PROGRAMA DE LOOPS DE 2 ARRAYS , IF ES EL COMUN RECURSO IMPRIME AFUERA DE LA CONSOLA 
*/
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

const commonCourses = student1Courses.filter(course => student2Courses.includes(course));

if (commonCourses.length > 0) {
  console.log('Cursos comunes:', commonCourses.join(', '));
} else {
  console.log('No hay cursos comunes.');
}
