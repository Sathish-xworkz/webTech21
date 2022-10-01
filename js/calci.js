console.log('hi');
function add(a,b){
    console.log(a+b);
}

function sub(a,b) {
   // document.write(a-b)
    console.log(a-b);
}

function getkeyPresByUser(event){
    console.log(event);
    alert(event.key)
    if(event.keyCode===13){
        alert('successfully login..')
    }else{
        alert('please press enter key')
    }
}

function imgover(){
    alert('your over on image..')
}

function getPlace(){

let place=document.getElementById('place').value;

alert("selected place:"+ place);
}

