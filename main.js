// ## Requirements

// - You should use setInterval. 
// - The hand should move round the clock every second (!) and should complete a full revolution in 60 seconds. 
// - You should adjust the rotation of the hand using the transform property as demonstrated in `main.js`. 



//          const hand = document.querySelector(".hand");
                // this is a DOM.
//          hand.style.transform = `rotate(90deg)`; // example of how to rotate the hand
                // this rotates the DOM 90 degrees (quarter turn)

/*
METHOD : 
Every second, rotate second hand 6 degrees clockwise.

BREAKDOWN.

set a variable to count from 0 every second increments by 1.  (counting, 0, 1, 2, 3, 4, 5, 6...)
Each time it changes, tick the hand round 6 degrees. 
        therefore use setInterval to loop.
        interval is 1000ms
        each time interval acts, variable.style.transform = rotate(6deg)
*/

/* step 1 , sort out the counter. In a console log, every 1000ms , tick up by 1. */

let count = 0
const tickTock = document.querySelector("#seconds")


function incrementCount() {
        count++
        return tickTock.style.transform = `rotate(${count*6}deg)`, 
        console.log(count)
}
setInterval (incrementCount, 1000)


let countMin = 0
const tickTockMin = document.querySelector("#minutes")

// created variable called clockMinutes
let clockMinutes = function incrementCount() {
        countMin++
        return tickTockMin.style.transform = `rotate(${countMin*6}deg)`, 
        console.log(countMin)
}
setInterval (clockMinutes, 60000)
// now says clockMinutes, not incrementCount.


                                // this works! Hurrah!
                                // count of 0, 1, 2, 3... is multiplied by 6 to make a rotation of 0, 6, 12, 18 degrees.
                                //used string interpolation to make the clock dynamic


//

// querySelector of the hand (class = hand)
// rotate 6 deg for every 1000 count
//  const tickTock = document.querySelector(".hand")

//  function onTheClock () {

//  }

 

// function countUp () {
//         console.log("1")
//         setInterval(incrementCount, 1000)
// };

//what's happening in setinterval