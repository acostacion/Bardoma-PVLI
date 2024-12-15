export default class Ball extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y){
        super(scene, x, y, 'ball');

        this.scene = scene;
        this.x = x;
        this.y = y;

        // Mete el objeto en la escena con físicas.
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.setBounce(4);
        this.setCircle(this.body.halfWidth);
        this.body.setAngularDrag(50); // rotación angular con el airew y tal.


    }

    preUpdate(){
        if(this.y < 165 || this.y > 450){
            this.body.setVelocityY(0);
        }
    }

    
}