const guess=document.querySelector('.guess');
const button=document.querySelector('.check');
const input=document.querySelector('input');
const reMainchance=document.querySelector('.chance');
chance=10;
let randomNumber=Math.floor(Math.random()*100);
console.log(randomNumber)
button.addEventListener('click',()=>{
    chance--;
    let inputValue=input.value;
    if(inputValue==randomNumber){
        [guess.textContent,button.disabled]=["Congratulations",true];
        [button.textContent,guess.style.color]=["Replay","#333"];
    } else if(inputValue>randomNumber && inputValue<100){
        [guess.textContent,reMainchance.textContent]=["Your number is high",chance];
        guess.style.color="#333";
    }else if(inputValue<randomNumber && inputValue>0){
        [guess.textContent,reMainchance.textContent]=["Your number is low",chance];
        guess.style.color="#333";
    }else{
        [guess.textContent,reMainchance.textContent]=["Your number is invalid",chance];
        guess.style.color="#DE0611";
    }
    if(chance==0){
        [button.textContent,input.disabled,inputValue]=["Replay",true,""];
        [guess.textContent,guess.style.color]=["You lost the game","#DE0611"];
    }
    if(chance<0){
        window.location.reload();
    }
})