function randomRGB(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return changeColor( r, g, b ); 
};
function changeColor( r, g, b ){
    let color = `rgb( ${r}, ${g}, ${b} )`;
    console.log(color)
    document.getElementById('rgb-circle').style.background = `${color}`;
};

setInterval(() => {randomRGB()}, 500);





