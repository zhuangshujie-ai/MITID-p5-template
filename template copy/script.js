let randomButton = document.querySelector("#randomize");

randomButton.addEventListener("click", function() {
    background(73);
    generateStacks(5);
})

function setup(){
    // function that runs only once
    createCanvas(800, 500);
    noStroke();

    background(73);
    generateStacks();
}

function draw(){
    // function that runs repeatedly
   
//stackOfCircle(100, 200, "#450b0b");
//stackOfCircle(400, 300, "#0b450b");
    }


function generateStacks(stackAmount){
for(let i = 0; i < stackAmount; i++){
    let randomX = random(0, 800);
    let randomY = random(0, 500);
    let randomColor = random(0, 255);
    stackOfCircle(randomX, randomY, randomColor);
    }
}





function stackOfCircle(posX, posY, color){
    fill(color);
    for(let i = 0; i < 10; i++){
    circle(posX, posY + i * 10, 20);
    }
}

function mousePressed(){  
    fill("#FF0000");
    circle(mouseX, mouseY, 50);
}