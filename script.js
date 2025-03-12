const name_=document.getElementById("name");
const password=document.getElementById("password");
const btn=document.getElementById("btn");
const form=document.getElementById("form");
const error=document.getElementById("error");


form?.addEventListener('submit',(e)=>{
    let messages=[];

    if(name_.value.length=='' || name_.value==null){
       messages.push("Name is Required!!");
    }

    if(password.value.length<6){
        messages.push("Password must be at least 6 characters");
    }

    if(password.value.includes("@")){
        messages.push("Password cannot contain @ sign");
    }

    
    if(messages.length>0){
        e.preventDefault(); //if error then we stop from submitting the form
        error.innerText=messages.join(", ");
        
    }
})