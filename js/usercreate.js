function create(){
    let username=document.getElementById("username").value ;
    let password=document.getElementById("password").value ;

    localStorage.setItem('user',username);
    localStorage.setItem('pass',password);
    window.location.href="userLogin.html";
    alert('user account created..')
}