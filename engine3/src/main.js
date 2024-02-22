
class Player extends Component {

    start() {
        this.rb = this.getComponent(DynamicBoxCollider);
        this.grounded = false;

        this.rb.onCollisionEnter = (col) => {
            if (col.hit.normal.y == -1 && col.hit.normal.x == 0)
            this.grounded = true;
    }
}

    update() {
        if (Input.keyJustPressed('w'))
            this.rb.vel.y = -10;
            
            if (Input.keyJustPressed(' '))
            this.rb.vel.x = 10;
    }
}

function setup() {
    size(800, 600);

    new GameObject(width / 2, height - 5)
    .addComponent(new RectRenderer(width, 10, () => {
        noStroke(0);
        fill(0, 255, 0);
    }))
    .addComponent(new BoxCollider(width, 10))

    new GameObject(width / 2, height / 2)
    .addComponent(new Player())
    .addComponent(new RectRenderer(100,50))
    .addComponent(new DynamicBoxCollider(100, 50))
}

function draw() {
    background(51);
}