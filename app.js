const buttonStart = document.querySelector('#Start');
const display = document.querySelector('.display');
const optionButtons = document.querySelectorAll('.option');
const yesButton = document.querySelector('#yes');
const noButton = document.querySelector('#no');
    
// hides all option buttons
optionButtons.forEach((button) => {
   button.style.display = "none"; 
})
// this hides the start button after you click it
buttonStart.addEventListener('click', (event) => {
    nextStep();
    buttonStart.style.display = "none";
});
// takes you to first scenario
const nextStep = function() {
    display.textContent = `One dark morning in the middle of the night
     is where our story starts.  You hear a noise that wakes you from
     a deep sleep. Should you investigate?` 
    optionButtons.forEach((button) => {
        button.style.display = "inline"; 
     })
     
}
// makes "yes button" function
yesButton.addEventListener('click', (event) => {
    const investigateYes = function() {
        display.textContent = `You decide to investigate the noise and 
        open your bedroom door to a dark hallway. Do you turn on the light?` 
    
    // makes "second yes" function
    yesButton.addEventListener('click', (event) => {
        const lightYes = function() {
            display.textContent = `You turn on the light and and your cat, Kevin,
            runs past you and into the bathroom, covered in blood. Do you proceed
            down the hallway?` 
// next event listener here!
        }
//has to go outside of the function "light yes"
lightYes();
});
}
//has to go outside of the function "investigate yes"    
investigateYes();
});
// makes "no button" function
noButton.addEventListener('click', (event) => {
    firstNo();
});
const firstNo = function() {
    display.textContent = `You decide to think nothing of it and return 
    to sleep.  A few moments later there is a knock on your bedroom door. 
    You live alone. Do you hide?` 
}
// makes "second yes" function
// yesButton.addEventListener('click', (event) => {
//     secondYes();
// });
// const secondYes = function() {
//     display.textContent = `You turn on the light and and your cat, Kevin,
//     runs past you and into the bathroom, covered in blood. Do you proceed
//     down the hallway?` 
// }
// buttonA.forEach((button) => {
//     button.addEventListener('click', (event) => {
//       optionA();
//       button.style.display = "none";
//     });
//   });
// const optionA = function() {
//     display.textContent = 'second line of story select option 1 or 2'   
// }
//if the user sees this and they click a button then the display will change to the first prompt