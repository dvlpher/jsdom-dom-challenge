let counter = document.getElementById("counter");
let timer = setInterval(setTimer, 1000);
let timer_is_on = 0;
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const pauseBtn = document.getElementById("pause");
let isItPaused = false;

function setTimer() {
  counter.innerText = parseInt(counter.innerText) + 1;
}

minusBtn.addEventListener(
  "click",
  (minusOne = () => {
    console.log("I've clicked the minus button");
    counter.innerText = parseInt(counter.innerText) - 1;
  })
);

plusBtn.addEventListener(
  "click",
  (addOne = () => {
    console.log("I've clicked the plus button");
    counter.innerText = parseInt(counter.innerText) + 1;
  })
);
function pauseIt(e) {
  clearInterval(timer);
  console.log("I've clicked the pause button");
  if (isItPaused === false) {
    pauseBtn.innerText = "resume";
    isItPaused = true;
    minusBtn.disabled = true;
    plusBtn.disabled = true;
  } else if (isItPaused === true) {
    pauseBtn.innerText = "pause";
    isItPaused = false;
    setInterval(setTimer, 1000);
    minusBtn.disabled = false;
    plusBtn.disabled = false;
  }
}
pauseBtn.addEventListener("click", pauseIt);
//   (pauseTimer = () => {
// console.log("I've clicked the pause button");
// pauseBtn.innerText = "resume";
// pauseIt();
// clearInterval(counter);
//   })

// startBtn.addEventListener("click", function startCount() {
//     if (!timer_is_on) {
//       timer_is_on = 1;
//       startTimer();
//     }
//   }

//   function stopCount() {
//     clearTimeout(t);
//     timer_is_on = 0;
//   }
