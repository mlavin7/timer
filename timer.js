
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
          buttonField.innerHTML = 'Add title';
      
    
        }
        else {
          // clock is hidden. show it
          field.style.display = 'block';
          // change button text
          buttonField.innerHTML = 'Post and Hide Field';
        }
      }
        
  function callBothFunctions(){
    updateTitle();
    displayField();

  }

// this functions hat come i am making them with intewrnet help so i wil take detail notes of what every step do 
// as I research every step to be able to learn and not only 
// repourpose them 

// so this is the count down----v


  let countdownInterval; // here we will store the interval 
  //i am not sure but seems to be not declare in terms of being a striong or so
  //any ways we wil store here the interval 
  
  function startCountdown(){
    // this will clear the interval stored in " let countdownInterval "

    clearInterval(countdownInterval) 
    // clear Interval is a Method that cancels a timed, repeating action which was 
    // previously established by a call to setInterval()

   // next we need to target the time from the imput terminal 
   // and store it in some variables
   // v---we will use get elemet by id bexcatuse is the easiest way to target an unique element from the DOM
   
  const targetTimeImput = document.getElementById()



  }

