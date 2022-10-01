//function and types in js

// function add(){
//     console.log(10+2);
//     document.write(10+3);
// }
// add(); // invoking

// function add(a,b){
//     console.log(a+b);
// }

// add(2,9);

// function add(a,b){
//     let c=a+b;
//     return c;
// }
// const res=add(2,6);
// console.log(res);

//---------------------nested function----

function A(a){
    function B(b){
        function C(c){
            console.log(a+b+c);
            return a+b;
        }
        let r1=C(4);
        return r1;
    }
   return  B(3);
}
// var s;
// console.log(s);
// console.log(a);

// Sub();
//C(4);
// let r=A(2);
// console.log(r);

// function add(){
//     return 3+4;
// }

// console.log(add);
// console.log(add());

// anonymous function means fun without name  


// let sum=function (a,b){
//     console.log(a+b);
// }
// console.log(sum);
// sum(3,6)

//===================
// IIF immeadita invok function[ self invoke]

(function(){
    console.log(1+90);
})();

(function(a,b){
    console.log(a+b);
})(20,9);