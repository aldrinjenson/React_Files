let height=600, width=600,speed = 5;

function setup(){
    createCanvas(height,width)

}

class circle{
    constructor(vel_x){
        this.x = 50;
        this.y = 50;
        this.radius = 45;
        this.vel_x = vel_x;
        this.vel_y = 0
    }
}

circle1 = new circle(5)
circle2 = new circle(10)
circle3 = new circle(15)
circle4 = new circle(20)

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
    ellipse(circle1.x, circle1.y, circle1.radius)
    fill('lightgreen')
    ellipse(circle2.x, circle2.y, circle2.radius)
    fill("lightyellow")
    ellipse(circle3.x, circle3.y, circle3.radius)
    fill(200,50,50)
    ellipse(circle4.x, circle4.y, circle4.radius)
    
    move(circle1)
    move(circle2)
    move(circle3)
    move(circle4)

}

function move(obj){
    obj.x += obj.vel_x ;
    obj.y += obj.vel_y;

    if(obj.x >= width-obj.radius){
        obj.vel_y = speed 
        obj.vel_x = 0
    }
        
    if(obj.y >= height-obj.radius){
        obj.vel_y = 0
        obj.vel_x = -speed
    }
    
    if(obj.x <= obj.radius){
        obj.vel_x = 0
        obj.vel_y = -speed
    }

    if(obj.y <= obj.radius && obj.x <= width-obj.radius){
        obj.vel_y = 0
        obj.vel_x = speed
    }

}