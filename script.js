const email = document.getElementById(email);
const myForm= document.getElementById(myForm);
const errorElement= document.getElementById(error);



myForm.addEventListener('submit',e=> {
    e.preventDefault();

    validateInputs();
});

const setError = (element,message ) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('error');
    
    errorDisplay.innerText= invalid; 
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const isValidEmail = email=>{
const re = /^[A-Za-z\._\-0-9]*[A-Za-z]*[\.][a-z]{2,4}$/
return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
const emailValue = email.value.trim();
};


if(emailValue === ''){
    setError(email, 'Email is required');
}else if(!isValidEmail(emailValue)){
            setError(email, 'Provide a valid email address');        
    }else{
        setSuccess(email);
    }


