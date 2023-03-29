const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const repasword=document.getElementById('repassword');

function error(input,message){
    input.className='form-control is-invalid';
    const div=input.nextElementSibling;
    div.innerText=message;
    div.className='invalid-feedback';
}

function success(input){
    input.className='form-control is-valid';
}

function checkRequired(inputs){
    inputs.forEach(function(input){
    if(input.value===""){
        error(input,`${input.id} is required.`)
    }
    else{
        success(input);
    }
    })
    
}

function checkLength(input,min,max){
    if(input.value.length < min){
        error(input,`${input.id} must have a minimum of ${min} characters`);
    }
    else if(input.value.length > max){
        error(input,`${input.id} must have a maximum of ${max} characters`);
    }
    else{
        success(input);
    }
}

function checkPasswords(input1,input2){
    if(input1.value !== input2.value){
        error(input2, `passwords don't match`);
    }
}

function checkPhone(input){
    var exp=/^\d{10}$/;
    if(!exp.test(input.value)){
        error(input,'The phone number must have 10 characters');
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault();

    checkRequired([username,email,password,repasword,phone]);
    checkLength(username,7,15);
    checkLength(password,7,12);
    checkPasswords(password,repasword);
    checkPhone(phone);
});

