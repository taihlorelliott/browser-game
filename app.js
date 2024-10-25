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
        yesButton.addEventListener('click', (event) => {
            const hallwayYes = function() {
                 display.textContent = `You hear a loud bang from the kitchen and 
                 foot steps coming toward you. You live alone. Do you run?` 
// next event listener here!
            yesButton.addEventListener('click', (event) => {
                const kevinYes = function() {
                    display.textContent = `You start running towards the back door, 
                    when you remember Kevin. Do you go back for Kevin?` 
// next event listener here!
                yesButton.addEventListener('click', (event) => {
                     const safetyYes = function() {
                        display.textContent = `Kevin knew you 
                        would never leave him, after all he is your only friend.  
                        You dart into the bathroom scoop up Kevin. You run with Kevin 
                        in your arms and make it to safety!` 

                        optionButtons.forEach((button) => {
                            button.style.display = "none"; 
                         })
// next event listener here!
}
//has to go outside of the function "light yes"
safetyYes();
});
}
//has to go outside of the function "light yes"
kevinYes();
noButton.addEventListener('click', (event) => {
    const abondonNo = function() {
       display.textContent = `You decided to abandon Kevin, poor choice!
       Game Over.` 

       optionButtons.forEach((button) => {
           button.style.display = "none"; 
        })
// next event listener here!
}
//has to go outside of the function "light yes"
abondonNo();
});
});
}
//has to go outside of the function "light yes"
hallwayYes();
noButton.addEventListener('click', (event) => {
    const defendNo = function() {
       display.textContent = `You decide to face the footsteps.  Which was a poor choice. 
       You have never take self defence and have no wepons.  Game Over.` 

       optionButtons.forEach((button) => {
           button.style.display = "none"; 
        })
// next event listener here!
}
//has to go outside of the function "light yes"
defendNo();
});
});
}
//has to go outside of the function "light yes"
lightYes();
    noButton.addEventListener('click', (event) => {
        const aliveYes = function() {
            display.textContent = `Good idea!  You grab Kevin and run to the back door, 
            you made it out alive!` 

            optionButtons.forEach((button) => {
                button.style.display = "none"; 
             })

// next event listener here!
}
//has to go outside of the function "light yes"
aliveYes();
});
});
}
//has to go outside of the function "investigate yes"    
investigateYes();
noButton.addEventListener('click', (event) => {
    const escapeNo = function() {
       display.textContent = `You decide to leave the light off, 
       you feel your cat Kevin brush passed you.  You decide to not chance it. 
       If Kevin is running so are you.  You and Kevin escape!` 

       optionButtons.forEach((button) => {
        button.style.display = "none"; 
     })
// next event listener here!
}
//has to go outside of the function "light yes"
excapeNo();
});

});

noButton.addEventListener('click', (event) => {
    const investigateNo = function() {
       display.textContent = `You run to find your cat Kevin. You 
       scoop him up into your arms and escape to safety!` 

       optionButtons.forEach((button) => {
           button.style.display = "none"; 
        })
// next event listener here!
}
//has to go outside of the function "light yes"
investigateNo();
});




// makes "no button" function
// noButton.addEventListener('click', (event) => {
//     firstNo();
// });
// const firstNo = function() {
//     display.textContent = `You decide to think nothing of it and return 
//     to sleep.  A few moments later there is a knock on your bedroom door. 
//     You live alone. Do you hide?` 
// }
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