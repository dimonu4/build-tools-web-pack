const timerField= document.getElementById('timer');

export function timerouter(zeroMinutes,minutes,zero,seconds){
    timerField.elements[0].value=`${zeroMinutes}${+minutes}:${zero}${seconds}`;
}