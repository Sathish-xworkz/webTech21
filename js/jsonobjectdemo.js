// let empsal=[2000,400,1200,398,900];
// console.log(empsal);
// console.log(empsal.map((sal)=>sal+200));

// // delete filter

// console.log(empsal.filter((sal)=>sal >500));

// console.log(empsal.reduce((emp1sal,emp2sal)=>emp1sal+emp2sal));

// let empname=['sathish','arun','renu'];
// console.log(empname);
// console.log(empname.map((empname)=>empname.concat('@xworkz.com')));

// let emp={
//     name:'sathish',
//     id:230,
//     skill:'developer',
//     sal:2000
// };

// console.log(emp);
// console.log(JSON.stringify(emp)); // javascript ->JSON

// let empJson='{"name":"sathish","id":230,"skill":"developer","sal":2000}';

// console.log(JSON.parse(empJson)); // JSON->javascript


let employee=[
    {name:'sathish',id:789,sal:9000,skill:'dev'},
    {name:'santhosh',id:7789,sal:39000,skill:'mgr'},
    {name:'renu',id:5789,sal:8000,skill:'test'},
    {name:'vinoda',id:1789,sal:92000,skill:'dev'},
    {name:'yogi',id:7389,sal:6000,skill:'test'}
];

document.getElementById('empdata').innerHTML=employee[0].name;

console.log(employee);
console.log(employee[0]);
console.log(employee[0].name);

console.log(employee.filter((emp)=>emp.skill=='dev'));

console.log(JSON.stringify(employee));

//find age cal

// CRUD ->
// c-> insert 
// R- select 
// U -update 
// D -delete 