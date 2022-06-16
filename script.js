const nom = document.getElementById("nom");
const sname = document.getElementById("sname");
const age = document.getElementById("age");
const ville = document.getElementById("ville");
const form = document.getElementById("form");
const errorElement = document.getElementById('error');

form.addEventListener('submit',(e)=>{
    let messages = [];
         
    if(nom.value.length >20){
        messages.push('* le nom ne depasse pas 20 caractere')
    }
    if(sname.value.length >20){
        messages.push('* le prénom ne depasse pas 20 caractere')
    }
    if(age.value >40){
        messages.push('* age ne depasse pas 40 ans')
    }
    if(ville.value != 'tunis'){
        messages.push('* la ville doit etre tunis')
    }


    if(messages.length > 0){
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
    
    
});
