import{timerouter} from './timerouter.js';
import 'howler';
import src from './sound.mp3'

const timerField= document.getElementById('timer');
const start= document.getElementById('start_btn');
const stop = document.getElementById('stop_btn');
const timerInput= document.getElementById('timer_field');
let interval;
let zero=0;
let zeroMinutes=0;

var sound = new Howl({
    src: [src]
  });

let [minutes,seconds]=timerField.elements[0].value.split(':');

timerInput.addEventListener('change', event=>{
    [minutes,seconds]=timerField.elements[0].value.split(':');
})

stop.addEventListener('click',event=>{
    event.preventDefault();
    clearInterval(interval)
})

start.addEventListener('click',event=>{
    event.preventDefault();
        timer();
      
})

function timer(){
    interval= setInterval(startTimer,1000);
}
function startTimer(){
    if(seconds!=0){
        seconds--;
        }
    if(seconds>=10||seconds==0)
    {
        zero="";
    }else{
        zero=0;
    }
    if(minutes>=10)
    {
        zeroMinutes="";
    }else{
        zeroMinutes=0;
    }
        timerouter(zeroMinutes,minutes,zero,seconds);
    if(seconds==0){
        if(minutes>0){
            minutes--;
            seconds = 60;
            return
        }
        clearInterval(interval);
        sound.play()
    }   
}