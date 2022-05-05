const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

// const titles = students[i=0]
function convertArrayToObject(arr){
for(i=0;i<arr.length;i++){
const obj = arr.slice(i).map(([name,skill,scores]) => ({ name,skill,scores }) )
return obj;
 }
}
console.log(convertArrayToObject(students))