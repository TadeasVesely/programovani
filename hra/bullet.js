class Bullet {
    constuctor(pos) {
        this.pos = pos;

        var mouse = createVector(mouseX, mouseY);
        this.dir = p5.Vector.sub(mouse, this.pos);
        this.dir.setMag(5);
    }

    update() {
        this.pos.add(this.dir);
    }

    draw() {
        circle(this.pos.x, this.pos.y, 5);
    }
}
