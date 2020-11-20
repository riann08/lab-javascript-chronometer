const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  printSeconds();
  printMinutes();
}

function printMinutes() {
  // ... your code goes here
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  // ... your code goes here
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here

  const li = document.createElement ("li");
  li.innerHTML = Chronometer.splitClick();
  splits.appendChild(li);
}

function clearSplits() {
  // ... your code goes here
  chronometer.splitClick(); 
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.classList.add("start");
  btnLeft.classList.remove("stop");
  btnLeft.textContent = "START";
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.classList.add("reset");
  btnRight.classList.remove("split");
  btnRight.textContent = "RESET";
}

function setStartBtn() {
  // ... your code goes 
  btnLeft.classList.add ("stop");
  btnLeft.classList.remove("start"); 
  btnLeft.textContent = "STOP";
}

function setResetBtn() {
  // ... your code goes here
  btnRight.classList.add("split");
  btnRight.classList.remove("reset");
  btnRight.textContent = "SPLIT";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeft.classList.contains("start")) {
    setStartBtn();
    chronometer.startClick(printTime);
  } else {
    setStopBtn(); 
    chronometer.stopClick(printTime);
  }
  
  });

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if (btnRight.classList.contains("reset")) {
    setResetBtn();
    chronometer.splitClick();
  } else {
    setSplitBtn(); 
    chronometer.resetClick();  
  }
});