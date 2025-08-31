function meuScopo() {
    const form = document.querySelector('#form');
    const resultadoDoUsuario = document.querySelector('#resultadoDoUsuario');

    const infosUsuario = [];

    function dadosUsuario(evento) {
        evento.preventDefault();

        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

        infosUsuario.push({
            peso : Number(peso.value),
            altura : Number(altura.value)
        });
        resultadoDoUsuario.innerHTML = `Seu IMC é: ${contaImc()}.`
    };
    function contaImc (infosUsuario) {
        let imc = peso.value / (altura.value ** 2);
        if (peso.value <= 0) {
            return 'Adicione um peso válido'
        }
        else if (altura.value <= 0) {
            return 'Adicione uma altura válida'
        }
         else if (imc <= 18.5) {
            return 'Abaixo do peso'
        } else if (imc > 18.5, imc < 24.9) {
            return 'Peso normal'
        } else if (imc > 25, imc < 29.9) {
            return 'Sobrepeso'
        } else if (imc > 30.5, imc < 34.9) {
            return 'Obesidade grau 1'
        } else if (imc > 35, imc < 39.9) {
            return 'Obesidade grau 2'
        } else if (imc > 40) {
            return 'Obesidade grau 3'
        } 
         else {
            return 'Adicione as informações corretas'
        }
    };

    form.addEventListener('submit', dadosUsuario);
}
meuScopo()