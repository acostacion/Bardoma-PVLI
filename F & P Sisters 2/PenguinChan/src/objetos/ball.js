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

    preUpdate(time, deltaTime) {
        super.preUpdate(time, deltaTime);
        
    }

    update(){
        
    }
}