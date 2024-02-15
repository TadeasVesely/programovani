
function setup() {
    createCanvas(400, 400);
    background(51);

    new GameObject(width / 2, height - 10)
    .addComponent(new RectRender(width, 10, () => {
        fill(0,0,255);
        noStroke();
    }))

    Engine.start();
}

function draw() {
    background(51);

    Engine.update();

}

{}