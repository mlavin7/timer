
function updateTitle(){
    let title= document.getElementById("countBackName").value
    document.getElementById("dinamicTitle").textContent = title

}

function displayField(){
    let field= document.getElementById("countBackName")// get the field
    let displaySetting = field.style.display;// get the current value of the field display property
    let buttonField = document.getElementById('fieldButton')
        if (displaySetting == 'block') {
          // clock is visible. hide it
          field.style.display = 'none';
          // change button text
         
      
    
        }
        else {
          // clock is hidwidthen. show it
          field.style.display = 'block';
          // change button text
          
        }
      }
        
  function callBothFunctions(){
    updateTitle();
    displayField();

  }

// countdown

let targetTime; //target time will store whats is in the imput
let countdownInterval; // will store the interval

function startCountdown() {
  // Get the target time from the input field
  const inputTime = document.getElementById('targetTime').value;

  // Validate the input format (days:hours:minutes:seconds)
  const regex = /^(\d+):(\d{1,2}):(\d{1,2}):(\d{1,2})$/; 
  
  const match = inputTime.match(regex); // check that the imput match the rules of the regulat exporession

  if (!match) {
    alert('Invalid input format. Please use the format "days:hours:minutes:seconds".');
    return;
  } // if do not mack deploy an alert estating the format ( as is gonna be in the place holder

  const [, days, hours, minutes, seconds] = match; // here we create an object


  // Calculate the target date and time
  const currentDate = new Date();
  targetTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + parseInt(days, 10), parseInt(hours, 10), parseInt(minutes, 10), parseInt(seconds, 10));
  
  // Update the countdown every second
  countdownInterval = setInterval(updateCountdown, 1000);

  // Initial update
  updateCountdown();
}

function stopCountdown() {
  clearInterval(countdownInterval);
  document.getElementById('countdown').innerHTML = 'Countdown stopped!';
}

function updateCountdown() {
  const currentDate = new Date().getTime();
  const timeRemaining = targetTime.getTime() - currentDate;

  if (timeRemaining <= 0) {
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerHTML = 'Countdown expired!';
  } else {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days} days : ${hours} hours : ${minutes} minutes : ${seconds} seconds`;
  }
}