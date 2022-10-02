
function add() {
    let t1 = parseInt(document.getElementById("no1").value);
    let t2 = parseInt(document.getElementById("no2").value);
    //    console.log(t1);
    //    console.log(t1.type);
    //    console.log(t1.id);
    //    console.log(t1.value);
    let res=t1 + t2;
  document.getElementById("resboxt").value=res;
    let msg = document.getElementById("res");
    if(res>100){
    msg.style.color = "red";
    msg.style.border = "2px solid blue";
    msg.style.width = "200px";
    
    }else{
    msg.style.color = "green";
    }
    msg.style.fontSize = "30px";
    msg.innerHTML = "Rresult:" + res;



    // console.log(t1+t2);
}
function passTextToJs() {
    let heading = document.getElementById("heading").innerHTML = "hi";
    console.log(heading);
}

function hide(){
let p=document.getElementById("p1");
p.setAttribute('type','password');
}

function show() {
    let p=document.getElementById("p1"); 
    p.setAttribute('type','text'); 
}