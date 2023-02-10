const dispaly=document.querySelector('#counter_preview');
const incrementBtn=document.querySelector('#Increment');
const decrementBtn=document.querySelector('#Decrement');
const resetBtn=document.querySelector('#Reset');


incrementBtn.addEventListener('click',increment);
decrementBtn.addEventListener('click',decrement);
resetBtn.addEventListener('click',reset);

let value=0;
 function increment(){
    value+=1;
    dispaly.textContent=value;
    console.log('hello world')
 }

 function decrement(){
    value-=1;
    dispaly.textContent=value;
 }

 function reset(){
    value=0;
    dispaly.textContent=value;
 }