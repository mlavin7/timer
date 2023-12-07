
function updateTitle(){
    let title= document.getElementById("countBackName").value
    document.getElementById("dinamicTitle").textContent = title

}

function displayField(){
    let field= document.getElementById("countBackName")// get the field
    let displaySetting = field.style.display;// get the current value of the field display property
   
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


let countdownInterval;

  function startCountdown() {
  
    let hours = document.getElementById("hours").value; 
    let h = 0;
    if (hours !== "") h = parseInt(hours);
  
    console.log(h);
    
    let minutes= document.getElementById("minutes").value; 
    let m = 0;
    if (minutes !== "") m = parseInt(minutes);
  
    console.log(m);
  
    let seconds = document.getElementById("seconds").value; 
    let s = 0;
    if (seconds !== "") s = parseInt(seconds);
  
    console.log(s);
    let totalTime = h * 3600 + m * 60 + s;

    countdownInterval = setInterval(function() {
      let hoursLeft = Math.floor(totalTime / 3600);
      let minutesLeft = Math.floor((totalTime % 3600) / 60);
      let secondsLeft = totalTime % 60;

      document.getElementById('countdown').textContent = 
        'Time Left: ' + hoursLeft + 'h ' + minutesLeft + 'm ' + secondsLeft + 's';

      if (totalTime <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').textContent = 'Countdown Finished!';
      } else {
        totalTime--;
      }

    }, 1000);}
  // Initial update
  

  function stopCountdown() {
    clearInterval(countdownInterval);
          document.getElementById('countdown').textContent = 'Countdown Finished!';  }



