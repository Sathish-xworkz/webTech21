// function mytime(){
//     let time=new Date();
//     document.getElementById('time').innerHTML=time.toLocaleTimeString();
// }

// // window.setInterval;
// // window.setTimeout;
// // setinterval its call eact time same func == loop
// // settimeout  only once call function 

// setInterval(mytime,2000);

// function gotoPage(){
//     window.location.href="https://developer.mozilla.org/en-US/docs/Web/API/setTimeout";
// }

// // setTimeout(gotoPage,9000);
//Arrow function expressions

//1

let hi=()=>console.log('hi hello arow function');

hi();

let add=(a,b)=>a+b;

console.log(add(2,4));
setInterval(()=>{
    let time=new Date();
     document.getElementById('time').innerHTML=time.toLocaleTimeString();
      
},1000);
//---------------------

function dispResult(res){
    document.getElementById('val').innerHTML=res;  
}

function add1(a,b){
 let c=a+b;
 dispResult(c);   
}
add1(2,5);

//call back function 
// passing fun name as argument 

function sub(a,b,disp){
    let c=a-b;
    disp(c);
}
sub(20,4,dispResult)
//-----------------------
/*
array ** 
js array can hold any type of data 
no size limit = dynamic groeable
support some methods=function to manipulate..
*/
//{}, []

// let arr=[];
// let array2=[23,5,6,7];
// Array(4,6,7,8,9);

// let arra =[];
// arra[0]=90;
// arra[2]='sathish';
// arra[3]=new Date();
// arra[4]=function(){console.log('hi');};

// console.log(arra);
// console.log(arra[3]);
// console.log(arra[30]);

// let arr=[3,5,6,7,8,34,'sathish','java'];

// console.log(arr);
// arr.push(90);
// arr.push(190);
//arr.unshift(10);

// arr.pop();
// arr.pop();

// arr.shift();
// arr.shift();
// console.log(arr.slice(0,5));
// console.log(arr.slice(2,7));
// let ar1=[3,60];
// console.log(arr.concat(ar1));

// delete perticular element, 
//  replace elemenet 
//  add new value to specf index 

// let res=arr.splice(5,2);
// let res=arr.splice(5,1,'santhosh');
// let res=arr.splice(5,0,'santhosh');
// console.log(res);
// console.log(arr);
// console.log(arr.splice(6,1,'Arun'));

let marks=[30,50,60,25,78];
console.log(marks.reduce((a,b)=>a+b));
// function myfilter(a){
//     return a>35;
// }

// let res=arr.filter(myfilter);


// console.log(res);
// console.log(arr.filter((a)=>a>35));
console.log(marks);
console.log(marks.map((a)=>a+5));
console.log(marks.map((a)=>Math.sqrt(a)));
