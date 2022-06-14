const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);



let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let reslt = document.getElementById('result');

const Guess = {
    max: 10,
    attemptsNumber: 0,
    numberDrawn: function radonValor(){
        return Math.round(Math.round() * this.max);
    },
};

let numberDrawn = Guess.numberDrawn();

function upatempt(attempt, value){
    attempt.innerHTML = 'tentativa: ' + value
};

function handleSubmit(e) {
    e.preventDefult();

    let kick = document.getElementById('kick').value;
    if (!kick) {
        alert('Digite algum valor')
        return;
        
    } ;
    upatempt(attempt, ++Guess.attemptsNumber);

    if(numberDrawn == kick){
        play();
        status.innerHTML = 'parabes, voce acertou ';
        
        reslt.style.transition = '0.4s' ;
        reslt.style.backgroundColor = '#37c98';
        reslt.style.color = '#fff';
        clier()
    } 
        else if (numberDrawn > kick ){
            status.innerHTML = 'o numero é maior';
            status.style.color = '#de4251';
            clier()
        }
        else if ( numberDrawn < kick){
            status.innerHTML = 'o numero é menor';
            status.style.color = '#de4251';
            clier()
        }

        };

function play(){
    document.getElementById('btnstart').style.display ='flex';

};

function restart(){
    document.location.reload(true);
};

function clier() {
    document.getElementById('kick').value = '';
};
