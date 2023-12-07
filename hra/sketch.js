const playerSize = 30;
const playerSpeed = 5;

const enemySize = 30;

var player;

var enemies = [];

function setup() {
    createCanvas(800, 600);

    player = createVector(width / 2, height / 2);

    for (var i = 0; i < 300; i++) {
        var randomPos = createVector(random(width), random(height));
        var enemy = new Enemy(randomPos)
        enemies.push(enemy);
    }
}

function draw() {
    background(220);

    var dir = createVector();
    if (Input.keyPressed('a')) dir.x -= 1;
    if (Input.keyPressed('d')) dir.x += 1;
    if (Input.keyPressed('w')) dir.y -= 1;
    if (Input.keyPressed('s')) dir.y += 1;
    dir.setMag(playerSpeed);
    player.add(dir);

    for (const enemy of enemies) {
        enemy.update()
    }

    fill(255);
    circle(player.x, player.y, playerSize);

    for (var enemy of enemies)
        enemy.draw();

        for (var bullet of bullets)
            bullet.draw();

    function mousePressed() {
        bullets.push(new Bullet(player));
    }

    if (player.x>800)
        player.x=0
    if (player.x<0)
        player.x=800
    if (player.y>600)
        player.y=0 
    if (player.y<0)
        player.y=600

    for (const enemy of enemies) {
        enemy.draw()
    }
}
