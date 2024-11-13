alert('Bem vindo ao jogo do número secreto.');
let maxNumber = 100
let secretNumber = parseInt (Math.random() * maxNumber + 1);
let chute;
let tentativa = 1;

while(chute != secretNumber) {
    chute = prompt(`Escolha um número entre 1 e ${maxNumber}`);
    if (chute == secretNumber) {
        break;
        
    } else {
        if (chute > secretNumber) {
            alert(`O número secreto é menor que ${chute}.`);
        } else {
            alert(`O número secreto é maior que ${chute}.`);
        }
        tentativa++;
    }
} 

let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
alert (`Você acertou, o número é ${secretNumber}. Você precisou de ${tentativa} ${palavraTentativa}.`);

/*if (tentativa > 1) {
    alert (`Você acertou, o número é ${secretNumber}. Você precisou de ${tentativa} tentativas.`);
} else {
    alert(`Você acertou, o número é ${secretNumber}. Você precisou de ${tentativa} tentativa.`);
}*/