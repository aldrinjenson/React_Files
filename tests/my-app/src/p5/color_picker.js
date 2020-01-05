let w = 600, h = 400
function setup(){
    createCanvas(w, h)

}
let r = 0,b=255,g = 0;
function draw(){
    background(r,g,b)
    r = map(mouseX, 0, w, 0, 255)
    b = map(mouseX, 0, w, 225, 0)
    g = map(mouseY, 0, h, 0, 255)
   
    
}