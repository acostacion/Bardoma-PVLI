export default class Ball extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
		super(scene, x, y, 'ball');
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.speed = 140; // velocidad de movimiento

        this.scene.add.existing(this);
		this.scene.physics.add.existing(this);
        this.body.setAllowGravity(false);
        this.body.setSize(16,16);
    }

    create() {

    }

    preUpdate() {
        if(this.y <= 165) 
        {
            this.body.setVelocity(0);
            this.y = 165;
            //this.body.enable = false;
        }
        else if(this.y >= 450)
        {
            this.body.setVelocity(0);
            this.y = 450;
            //this.body.enable = false;
        }
        else
        {
            //this.body.enable = true;
        }
    }
}