
class Player extends Component {

    start() {
        this.rb = this.getComponent(DynamicBoxCollider);
        this.grounded = false;

        this.rb.onCollisionEnter = (col) => {
            if (col.hit.normal.y == -1 && col.hit.normal.x == 0)
                this.grounded = true;
        }

        this.rb.onCollisionExit = (col) => {
            if (col.hit.normal.y == -1 && col.hit.normal.x == 0)
                this.grounded = false;
        }
    }

    update() {
        if (Input.keyJustPressed('w') && this.grounded)
            this.rb.vel.y = -600;

        let mov = 0
        if (Input.keyPressed('d'))
            mov = 600;

        if (Input.keyPressed('a'))
            mov = -600;

        this.rb.vel.x = mov
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
        .addComponent(new RectRenderer(100, 50))
        .addComponent(new DynamicBoxCollider(100, 50))

    new GameObject(width - 500 / 2, height - 150)
        .addComponent(new RectRenderer(100, 20))
        .addComponent(new BoxCollider(100, 20))

    new GameObject(width - 1300 / 2, height - 75)
        .addComponent(new RectRenderer(100, 20))
        .addComponent(new BoxCollider(100, 20))

    new GameObject(width - 1000 / 2, height - 230)
        .addComponent(new RectRenderer(100, 20))
        .addComponent(new BoxCollider(100, 20))

    new GameObject(width - 150 / 2, height - 300)
        .addComponent(new RectRenderer(100, 20))
        .addComponent(new BoxCollider(100, 20))

    new GameObject(width - 1100 / 2, height - 350)
        .addComponent(new RectRenderer(100, 20))
        .addComponent(new BoxCollider(100, 20))

    new GameObject(width - 1130 / 2, height - 430)
        .addComponent(new RectRenderer(100, 20))
        .addComponent(new BoxCollider(100, 20))

    new GameObject(width - 1160 / 2, height - 510)
        .addComponent(new RectRenderer(100, 20))
        .addComponent(new BoxCollider(100, 20))
}

function draw() {
    background(51);
}