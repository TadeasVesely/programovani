class Enemy {
    constructor(pos) {
        this.pos = pos;
    }

    update() {
        var dir = p5.Vector.sub(player, this.pos);
        dir.setMag(3);
        this.pos.add(dir);

    }

    draw() {
        fill(255, 0, 0);
        circle(this.pos.x, this.pos.y, enemySize);

    }
}