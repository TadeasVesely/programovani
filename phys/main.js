
class Circle {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(random(-10, 10), 0);
    }

    draw() {
        this.vel.add(gravity)

        this.pos.add(this.vel)

        if (this.pos.y > height) {
            this.vel.y *= (-0.95)
            this.pos.y = height
        }

        fill(255);
        circle(this.pos.x, this.pos.y,10);
    
    }
}


let circles = [];

let gravity;

function setup() {
    createCanvas(400, 400);

    for(let i = 0; i < 100; i++) {
        circles.push(new Circle(random(width), random(height)))
    }

    gravity = createVector(0, 0.5);

}

function draw() {
    background(0)

    for (const circle of circles) {
        circle.draw()
    }

}
