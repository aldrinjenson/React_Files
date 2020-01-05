function setup(){
    createCanvas(800, 600)
    background(120,70,240)
}

col = {
    r:125,
    g:0,
    b:0
}
let x,y,radius = 5;

function draw(){
    col.r = map(random(0, width),0,width,0,255)
    col.g = map(random(0, width),0,width,0,255)
    col.b = map(random(0, width),0,width,0,255)
    w = random(5, 50)

    x = random(0,width)
    y = random(0, height)
    noStroke()
    
    fill(col.r,col.g,col.b,100)
    ellipse(x, y, w)
    
}