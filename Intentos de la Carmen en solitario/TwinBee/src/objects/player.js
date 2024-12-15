
export default class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, mode){
        if(mode == 0){
            super(scene, x, y, 'idleT');
        }
        else{
            super(scene, x, y, 'idleW');
        }

        this.scene = scene;
        this.x = x;
        this.y = y;
        this.mode = mode;

        // Mete el objeto en la escena con físicas.
        this.scene.add.existing(this);
        this.scene.physics.world.enable(this);
        this.setSize(16,16);
        this.body.setOffset(0, 0); // para central el collider en la pos relativa del sprite.

        this.body.setCollideWorldBounds(true); // Para que no se salga de los límites del mundo.

        if (this.mode === 0) {
            this.idleAnim = 'idleT';
            this.leftAnim = 'izqT';
            this.rightAnim = 'derT';
            this.cursors = scene.input.keyboard.addKeys({
                up: Phaser.Input.Keyboard.KeyCodes.W,
                right: Phaser.Input.Keyboard.KeyCodes.D,
                left: Phaser.Input.Keyboard.KeyCodes.A,
                down: Phaser.Input.Keyboard.KeyCodes.S,
                shoot: Phaser.Input.Keyboard.KeyCodes.SPACE,
                escape: Phaser.Input.Keyboard.KeyCodes.ESC
            });
        }
        else {
            this.idleAnim = 'idleW';
            this.leftAnim = 'izqW';
            this.rightAnim = 'derW';
            this.cursors = scene.input.keyboard.addKeys({
                up: Phaser.Input.Keyboard.KeyCodes.UP,
                right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
                left: Phaser.Input.Keyboard.KeyCodes.LEFT,
                down: Phaser.Input.Keyboard.KeyCodes.DOWN,
                shoot: Phaser.Input.Keyboard.KeyCodes.ENTER,
                escape: Phaser.Input.Keyboard.KeyCodes.ESC
            });
        }

        this.play(this.idleAnim);
        
    }

    preUpdate(time, deltaTime){
        super.preUpdate(time, deltaTime); // llama al preupdate para ejecutar la animacion

        // antes de empezar el movimiento velocity 0.
        this.body.setVelocity(0);

        if(this.cursors.left.isDown){
            this.body.setVelocityX(-100);
            this.play(this.leftAnim);
        }
        if(this.cursors.right.isDown){
            this.body.setVelocityX(100);
            this.play(this.rightAnim);
        }
        if(this.cursors.up.isDown){
            this.body.setVelocityY(-100);
            this.play(this.idleAnim);
        }
        if(this.cursors.down.isDown){
            this.body.setVelocityY(100);
            this.play(this.idleAnim);
        }
        else{
            this.play(this.idleAnim);
        }
    }

    create(){ 
        
        
    }

    update(){
         
    }
}