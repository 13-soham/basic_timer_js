var h1 = document.querySelector("h1");
var btnStart = document.querySelector("#start");
var btnStop = document.querySelector("#stop");
var flag;
btnStart.addEventListener("click", ()=>{
    var count = 0;
    flag = setInterval(()=>{
        h1.textContent = count;
        count++;
    }, 1000);
});
btnStop.addEventListener("click", ()=>{
    clearInterval(flag);
    h1.textContent = "0";
});