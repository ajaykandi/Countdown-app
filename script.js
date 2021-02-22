
// date for the count down
const dt_text =  "january 1 , 2022";

const dayE1 = document.getElementById('days');
const hoursE1 = document.getElementById("hours");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");




function countdown(date){
    const total_secs =  new Date(dt_text);
    const  Current_date = new Date();

    const diff = Math.floor(total_secs - Current_date)/1000;

    const days = Math.floor(diff/3600/24); 
    const hours = Math.floor((diff / 3600 ) %24); 
    const minutes = Math.floor(diff / 60) % 60;
    const Seconds = Math.floor(diff % 60);

    dayE1.innerHTML = formattime(days);
    hoursE1.innerHTML = formattime(hours);
    minutesE1.innerHTML = formattime(minutes);
    secondsE1.innerHTML = formattime(Seconds);
    
}
function formattime(time){
    return time < 10 ? `0${time}` : time; 
}

countdown();
setInterval(countdown ,1000);
