var occupation = new Array ('Junior developer', 
                            'Middle developer',
                            'Senior developer', 
                            'Junior QA',
                            'Middle QA', 
                            'Senior QA', 
                            'Project manager');

var firstName = prompt("Ваше імя: ");
var names = new Array(7); 
function getNames  () {
for (var i = 1; i <= 7; i++) {
    names [i] = firstName;
}  }
names [0] = prompt("Ваше імя: ");
names [2] = prompt("Ваше імя: ");
names [3] = prompt("Ваше імя: ");
names [4] = prompt("Ваше імя: ");
names [5] = prompt("Ваше імя: ");
names [6] = prompt("Ваше імя: ");
console.log(names);
getNames  ();