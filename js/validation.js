// function validate() {
//   //  alert('hi')
//     // let username = document.getElementById("user").value;
//     let username = document.getElementById("user");
//     let errormsg=document.getElementById("error");

//     if (username.value == "") {
//         username.style.border='2px solid red';
//         errormsg.style.color='red'
//         errormsg.innerHTML='please enter username'
//         //alert("please enter username")
//     } else if (username.value.length < 3 || username.value.length > 7) {
//         alert("enter username min 3 char and max 7 char only")
//     }else {
//     alert('Valid username')
//     }
// }

function userValidate() {
    //alert('validate..')
    let userpattren = /^[A-Za-z]{3,6}$/;
    let princamt = /^[0-9]{1,7}$/;

    let user = document.getElementById("username");
    let princ = document.getElementById('princlpe');
    let rate = document.getElementById('rate');


    // let res= userpattren.test(user.value);
    // console.log(res);
    if (!userpattren.test(user.value)) {
        alert('invalid username')
        return false;
    }
    else if (!princamt.test(princ.value)) {
        alert('enter only numbers');
        return false;
    }
    else if (!princamt.test(rate.value)) {
        alert('enter only numbers');
        return false;
    }
    return true



}