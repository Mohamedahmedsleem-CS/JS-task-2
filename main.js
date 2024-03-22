// ==================> task1  <===============
function formValidate(event){
  event.preventDefault();
  var userName = document.getElementById("userName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var error = document.getElementById( "error" );
  var text = "";

  if (userName.length < 3 ){
    // alert ("Username should have more than two characters!");
    text = "Username should have more than ten characters!"
    error.innerHTML = text;
    error.style.color = 'red';
    return false;
  }
 if(email.indexOf("@")== -1 || email.length <3){
    text = "Please enter a valid e-mail address";
    error.innerHTML = text;
    error.style.display= "block";
    error.style.color = 'red';
    return false;
  }
  if(isNaN(phone)||phone.length!=3){
    text = "Phone number is not correct, please check it!";
    error.innerHTML = text;
    error.style.display= "block";
    error.style.color = 'red';
    return false;
  }
  document.getElementById("myForm").submit();
}

// ==================> task2  <===============


function updateTime() {
  const clockElement = document.getElementById("clock");
  const currentTime = new Date();

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  clockElement.textContent = formattedTime;
}

function padZero(value) {
  return value.toString().padStart(2, "0");
}

updateTime(); // Initial call to display current time

// Update the time every second
// The setInterval() method is used to execute a function repeatedly at specified time intervals
setInterval(updateTime, 1000);

// ==================> task3  <===============


let startTime;
let stopwatchInterval;
let running = false;

function startStopwatch() {
  if (!running) {
    startTime = Date.now();
    stopwatchInterval = setInterval(updateStopwatch, 10);
    running = true;
  }
}

function stopStopwatch() {
  if (running) {
    clearInterval(stopwatchInterval);
    running = false;
  }
}

function resetStopwatch() {
  stopStopwatch();
  document.getElementById("s_clock").textContent = "00:00:00";
}

function updateStopwatch() {
  const elapsedTime = Date.now() - startTime;
  const milliseconds = Math.floor(elapsedTime % 1000 / 10);
  const seconds = Math.floor(elapsedTime / 1000 % 60);
  const minutes = Math.floor(elapsedTime / 1000 / 60 % 60);
  const formattedTime = `${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds)}`;
  document.getElementById("s_clock").textContent = formattedTime;
}

function padZero(value) {
  return value.toString().padStart(2, "0");
}
