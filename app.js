alert('Bem vindo ao jogo do número secreto.');

let secretNumber = 8;
let chute;
let tentativa = 1;

while(chute != secretNumber) {
    chute = prompt('Digite um número entre 1 e 10');
    if (chute == secretNumber) {
        alert (`Você acertou, o número é ${secretNumber}.Você precisou de ${tentativa} tentativas.`);
    } else {
        if (chute > secretNumber) {
            alert(`O número secreto é menor que ${chute}.`);
        } else {
            alert(`O número secreto é maior que ${chute}.`);
        }
        tentativa++;
    }
} 

