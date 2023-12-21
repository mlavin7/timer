let hoursValue= document.getElementById("hours"); 
let minutesValue = document.getElementById("minutes"); 
let secondsValue = document.getElementById("seconds"); 
let countbackNameValue = document.getElementById("countBackName")
let dinamicTitleText = document.getElementById("dinamicTitle")
let countbackNameField = document.getElementById("countBackName");
let countdownTextContent = document.getElementById('countdown'); 
let countdownIntervalsecondsValue; 
let sound = new Audio('./spooky-gongwav-14904 (2).mp3')


//this funcion will pudate the title of the counter, replacing the previous one in the elemet
function updateTitle(){
  console.log(countbackNameValue)
    let title= countbackNameValue.value; 
    dinamicTitleText.textContent = title
    

}

function toggleInput() {
  // Get the input element
  let inputElement = countbackNameValue;

  // Check if the input element exists
  if (inputElement) {
       // Toggle the dispdocument.getElementById("hours").valuelay propertydocument.getElementById("hours").value; 
      if (inputElement.style.display === "none") {
          // If currently hidden, show it
          inputElement.style.display = "";
      } else {
          // If currently visible, hide it
          inputElement.style.display = "none";
      }
    }}
    //countdownInterval; 

        
  function callBothFunctions(){
    updateTitle();
    toggleInput();

  }

  let countdownInterval;

  function startCountdown() {
  
    let hours = hoursValue.value; 
    let h = 0;
    if (hours !== "") h = parseInt(hours);
     
        
    let minutes= minutesValue.value;  
    let m = 0;
    if (minutes !== "") m = parseInt(minutes);
  
          
    let seconds =secondsValue.value; 
    let s = 0;
    if (seconds !== "") s = parseInt(seconds);
     
    
    let totalTime = h * 3600 + m * 60 + s;
    
    

    countdownInterval = setInterval(function() { //<< here i call the interval stored outside the function

      let hoursLeft = Math.floor(totalTime / 3600);
      let minutesLeft = Math.floor((totalTime % 3600) / 60);
      let secondsLeft = totalTime % 60; 

      document.getElementById('countdown').textContent = 
          hoursLeft + ' hours ' + ' ' + minutesLeft + ' minutes ' +' ' + secondsLeft + ' seconds';

      if (totalTime <= 0) {
        clearInterval(countdownInterval);
        countdownTextContent.textContent= 'Countdown Finished';
        sound.play(); 
        
      } else {
        totalTime--;
      }

    }, 1000);}

  

  
  function stopCountdown() {
      clearInterval(countdownInterval); 
      countdownTextContent.textContent = 'Countdown Stoped';
            }



