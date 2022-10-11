//  let car={
//     name:'bmw',
//     color:'blue',
//     type:'first',
//     modal:2022,
//     start:function(){
//         console.log('car is starting...');
//     }
// }

// console.log(car.name);
// console.log(car.modal);
// console.log(car.start);
// car.start();
// //add
// car.price=709009;
// console.log(car);

// // delete 

// delete car.type;
// console.log(car);
// // loop all the keys 

// const mycarkeys=Object.keys(car);

// console.log(Object.keys(car));
// console.log(mycarkeys[2]);
// console.log(car[mycarkeys[2]]);
// console.log(car['modal']);

// // key and value 
// for(let carkeys in car){
//     console.log(carkeys+'----'+car[carkeys]);
// }

// let person={
//     place:'hassan'
// };
// console.log(person);

// person.fname='Arun';
// person.lname='kumar';
// person.age=32;
// person.walk=function(){
//     console.log('walking...');
// }
// console.log(person);
// person.walk();
// document.write(person.fname)

//console.log(this);
// let a=this;
// console.log(a);

// function add(){
//     console.log(this);
// }
// add();

// let person={
//     fname:'sathish',
//     lname:'kumar',
//     disp:function(){
//         console.log(this.fname);
//     },
//     fullname:function(){
//  return this.fname+this.lname;
//     }
// }

// person.disp();
// let res=person.fullname();
// console.log(res);

// student , employe ,
//Template Literals

// var name='sathish';
// let basic=2000;
// let hra=1000;

// // console.log('hello 
// // hi
// // ');

// console.log('name'+name+'Basic'+basic+'HAR'+hra+'Total'+(basic+hra));
// console.log(`name:${name}basic:${basic} Hra:${hra}Total:${basic+hra}`);
// console.log(`hello
//             hi
//              from
//              to
//              place`);

/// predefined objects in javascript
/*
string
date
array
math
numbers
Regexp

*/
// let s='java developers';
// console.log(s);
// console.log(s.length);
// console.log(s.toLocaleUpperCase());
// console.log(s.substring(1,5));
// console.log(s.concat('@xworkz'));
// console.log(s.indexOf('d'));
// console.log(s.charAt(3));

// date ---

// console.log(new Date());
// console.log(new Date().getMonth()+1);
// console.log(new Date().getDay());
// console.log(new Date().getFullYear());

// let d=new Date();

// console.log(d.getTime());
// console.log(d.toDateString());
// console.log(d.toLocaleTimeString());
// console.log(d.toLocaleDateString());

// console.log(new Date('2021/06/09'));
// console.log(new Date('06'));

console.log(Math.sqrt(25));
console.log(Math.floor(23.890));
console.log(Math.round(23.890));
console.log(Math.random());
console.log(Math.floor(Math.random()*1000));
console.log(Math.max(10,34,5555,67654));
console.log(Math.min(10,34,5555,67654));




