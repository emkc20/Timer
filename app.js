const startMinutes = 10;
let time = startMinutes * 60;

const countdownn = document.getElementById("countdown");

setInterval(updatecountdown, 1000);

function updatecountdown() {

    const minutes = Math.floor(time / 60);
    let second = time % 60;
 
    second = second < 10 ? "0" + second : second;

    

    countdownn.innerHTML = `${minutes} : ${second}`;
    time--;

}