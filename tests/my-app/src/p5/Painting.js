function setup(){
    createCanvas(800, 600)
    background(250,250,100)

}

function draw(){
    noStroke()
    fill(100,random(0, 255),100,100)
    ellipse(mouseX, mouseY, 17,17)

}


function mousePressed(){
    background(random(0,255),250,random(0, 255));
}