let speed = 5,i;

function setup(){
    createCanvas(600 ,600)

}

class circle{
    constructor(){
        this.x = 50;
        this.y = 50;
        this.radius = 45;
    }
}

// circle1 = new circle(5)
// circle2 = new circle(10)
// circle3 = new circle(15)
// circle4 = new circle(20)

let snow;

for(i=0;i<5;i++){
    snow[i] = new circle()
}

// let circle2 = {
//     x:50,
//     y:50,
//     radius:45,
//     vel_x:speed+5,
//     vel_y:0
// }

function draw(){
    background(218,160,221)

    fill('lightblue')
    ellipse(snow[1].x, snow[1].y, snow[1].radius)
    fill('lightgreen')
    ellipse(snow[2].x, snow[2].y, snow[2].radius)
    fill("lightyellow")
    ellipse(snow[3].x, snow[3].y, snow[3].radius)
    fill(200,50,50)
    ellipse(snow[4].x, snow[4].y, snow[4].radius)
    
    
    move(snow[1])
    move(snow[2])
    move(snow[3])
    move(snow[4])

}

function move(obj){
    obj.y += speed

    if(obj.y >= height ){
        obj.y = 0;
        obj.x = random(0, width)
    }

}