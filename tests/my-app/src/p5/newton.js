function setup(){
    createCanvas(800, 600)
}

let fall = false
let apple_y = 350
let cloud_x = 50;
let vel = 2;

let col = {
    r:55,
    g:30,
    b:15
}

function draw(){
    background(col.r,col.g,col.b)
    fill('brown')

    // tree
    rect(600, 300, 50, 250)
    fill(0,255,0)
    ellipseMode(CENTER)
    ellipse(590, 300,125)
    noStroke()
    ellipse(660, 300,125)
    ellipse(625, 250,125)
    fill(240,0,0)
    ellipse(580, apple_y, 25)

    if(fall && apple_y <= 550){
        apple_y += 5;
    }

    // cloud
    fill(50,50,255)
    ellipse(cloud_x, 50, 100, 60)
    ellipse(cloud_x+50, 50, 60, 45)

    cloud_x += vel;
    col.b = map(cloud_x, 0, width, 0, 255)
    if(cloud_x >= 700 || cloud_x <= 50)
        vel *= -1;

   
}

function mousePressed(){
    if(apple_y <= 550)
        fall = true;

}
    