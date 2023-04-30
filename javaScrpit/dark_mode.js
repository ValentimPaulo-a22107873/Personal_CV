const buttonDark = document.querySelector('.dark_mode_button');
var element = document.body;

var counter = 1;

buttonDark.addEventListener('click', () => {

    element.classList.toggle("dark-mode");
    if(counter === 1){
        buttonDark.innerHTML = 'Escuro';
        buttonDark.style.cursor = 'pointer';
        counter = 0;
    }
    else{
        buttonDark.innerHTML = 'Claro';
        buttonDark.style.cursor = 'pointer';
        counter = 1;
    }
})

