


/*

] ======= ( Script para animación dropdown ) ======= [

*/

let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}


document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
    inputNumber.oninput = () =>{
        if(inputNumber.value.lenght > inputNumber.maxlenght) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxlenght);
    };
});




/*

] ======= ( Script para animación del formulario ) ======= [

*/

let hiddenbutton = document.querySelector('.showbtn');

let formulario = document.querySelector('.contact');

let closebutton = document.querySelector('.closebtn');


hiddenbutton.onclick = function(){
    formulario.classList.toggle('show')
}

closebutton.onclick = function(){
    formulario.classList.toggle('show')
}



/*

] =========== ( Script para animación Fade Efect ) =========== [

*/


const observer = new IntersectionObserver( (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));






/*

] ======= ( Script para detectar si se introdujo un Correo ) ======= [

*/


let enviado = document.getElementById('botoncito');


let sas = document.getElementById('correo');

sas.onchange = function(){
    enviado.classList.toggle('show')
}