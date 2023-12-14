const errorImg = document.getElementById('icon-error');
const errorMsg = document.querySelector('p.valid-email')
const input = document.getElementById('email');
const email = document.querySelector('input#email');

function validar(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validarEmail() {
    if (validar(email.value) == true) {
        errorMsg.style.display = 'block';
        errorMsg.innerHTML = 'Successful subscription!';
        errorMsg.style.color = 'green';
        errorImg.style.opacity = '0';
        input.style.border = '';
    } else {
        errorImg.style.opacity = '10';
        errorMsg.style.display = 'block';
        input.style.border = '2px solid red';
        email.focus();
    }    
}

