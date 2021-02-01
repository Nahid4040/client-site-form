const  form = document.getElementById("form");
const  username = document.getElementById("username");
const  email = document.getElementById("email");
const  confirm = document.getElementById("confirm");
const  password = document.getElementById("password");

form.addEventListener('submit',(ev) => {
    ev.preventDefault();

    checkInputs();
})

function checkInputs(){
    //get the values from the inputs

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmValue = confirm.value.trim();


    if(usernameValue===''){
        //show error
        //add error class
        setErrorFor(username,'Username cannot be blank');
    } else {
        //add succes class
        setSuccesFor(username);
    }

    if(emailValue==='') {
        setErrorFor(email,'Email cannot be blank');
    } else { setSuccesFor(email);
    }

    if(passwordValue==='') {
        setErrorFor(password,'password cannot be blank');
    } else { setSuccesFor(password);
    }

if(confirmValue==='') {
        setErrorFor(confirm,'confirm password cannot be blank');
    }else if(passwordValue!==confirmValue){
        setErrorFor(confirm,'confirm password does not macth');
    }
    else{ setSuccesFor(confirm);
    }


}

function setErrorFor(input,message) {
    const form = input.parentElement; //.form-control
    const smal = form.querySelector("smal"); // loktir niyom
 
    //add error message inside smal
    smal.innerText = message;

      //add error class
     
      form.className = 'form-control error';

}
 

function   setSuccesFor(input) {
    const form = input.parentElement;
     form.className = 'form-control succes';
 }

