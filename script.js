
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

function randomRGB2(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return changeColor2( r, g, b ); 
};

function changeColor( r, g, b ){
    let color = `rgb( ${r}, ${g}, ${b} )`;
    console.log(color);
    // document.querySelector('.rgb-circle').style.background = `${color}`;
    $('.rgb-circle').css('background-color', `${color}`);
    
};

function changeColor2( r, g, b ){
    let color = `rgb( ${r}, ${g}, ${b} )`;
    console.log(color);
    // document.querySelector('.rgb-circle').style.background = `${color}`;
    $('.rgb-circle2').css('background-color', `${color}`);
   
};

function runRandoms(){
    randomRGB();
    randomRGB2();
};

setInterval(() => {runRandoms()}, 200);

let count = 0;
let numCircles = 40;
let circle = `<div class="rgb-circle"></div>`;
let circle2 = `<div class="rgb-circle2"></div>`;
let displayCircles = [];
let displayCircles2 = [];


while( count < numCircles){
    count++
    console.log("counting", count);
    displayCircles.push(circle);
    console.log("counting2", count);
    displayCircles2.push(circle2);
}; 


//! write a for each loop and append the changeColor function
//! combine random rgb and change color functions into one 

let allCircles = displayCircles + displayCircles2;
console.log(allCircles);

//$('#rgb-wrapper').html(displayCircles);
$('#rgb-wrapper').html(allCircles);






