
// TODO's
//* 1. Create circle div
//* 2. Write functions to randomize RGB value and assign to circle div
//? 3. Append multiple circles to main wrapper div.
//? 4. Randomize rgb values of all circles
//? 5. Build front-end inputs to allow users to choose:
        //? - number of circles
        //? - time interval
        //? - change all together or individually

function randomRGB(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return changeColor( r, g, b ); 
};
function changeColor( r, g, b ){
    let color = `rgb( ${r}, ${g}, ${b} )`;
    console.log(color)
    document.querySelector('.rgb-circle').style.background = `${color}`;
};

setInterval(() => {randomRGB()}, 500);

let count = 0;
let numCircles = 200;
let circle = `<div class="rgb-circle"></div>`
let displayCircles = [];

while( count < numCircles){
    count++
    console.log("counting", count);
    displayCircles.push(circle);
} 
console.log(displayCircles)

$('#rgb-wrapper').html(displayCircles);





