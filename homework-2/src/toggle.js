const timer = document.getElementById('timer');
const dateCalcForm= document.getElementById('datecalc');
const timer_btn = document.getElementById('timer_btn');
const date_btn = document.getElementById('date_btn');

timer_btn.addEventListener('click', event=>{
    timer.style.display='block';
    dateCalcForm.style.display= 'none';
})

date_btn.addEventListener('click', event=>{
    timer.style.display='none';
    dateCalcForm.style.display= 'block';
})
