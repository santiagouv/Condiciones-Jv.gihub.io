// Condiciones1

let bg = document.getElementById('retro');

function retro() {
    if (bg.classList.contains('border')) {
        bg.classList.remove('border');
    } else {
        bg.classList.add('border');
    }
}

// Condiciones2

function comprar() {
    const sticker1 = document.querySelector('#sticker1');
    const sticker2 = document.querySelector('#sticker2');
    const sticker3 = document.querySelector('#sticker3');

    const suma = parseInt(sticker1.value) + parseInt(sticker2.value) + parseInt(sticker3.value);

    if (suma > 10) {
        var wrong = 'Excede el maximo de stickers';
        document.getElementById('take').innerText = wrong;
    } else {
        var correct = `Gracias, Tienes ${suma} Stickers.`;
        document.getElementById('take').innerText = correct;
    }
}

// Condiciones3

function validar() {
    const pass1 = document.querySelector('#pass1').value;
    const pass2 = document.querySelector('#pass2').value;
    const pass3 = document.querySelector('#pass3').value;

    if (pass1 == 1 && pass2 == 8 && pass3 == 2) {
        var msg1 = 'La password 1 es correcta';
        document.getElementById('answer').innerText = msg1;
    } else if (pass1 == 8 && pass2 == 2 && pass3 == 1) {
        var msg2 = 'La password 2 es correcta';
        document.getElementById('answer').innerText = msg2;
    } else {
        var msg3 = 'La password es incorrecta';
        document.getElementById('answer').innerText = msg3;
    }
}