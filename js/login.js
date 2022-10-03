function login(){
  
    // localStorage.setItem('username','renu');

   let username= document.getElementById('username').value;
   let password= document.getElementById('password').value;
 let reguser= localStorage.getItem('user');
 let regpass= localStorage.getItem('pass');
   if(username===reguser && password===regpass){
    alert('login sucessfully' );
     window.location.href='Home.html';
    //window.location.href='https://www.flipkart.com/';
   }else{
    alert('invalid user/pass')
   }

}