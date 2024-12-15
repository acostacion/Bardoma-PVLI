
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
            this.shootAnim = 'shootT';
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
            this.shootAnim = 'shootW';
            this.cursors = scene.input.keyboard.addKeys({
                up: Phaser.Input.Keyboard.KeyCodes.UP,
                right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
                left: Phaser.Input.Keyboard.KeyCodes.LEFT,
                down: Phaser.Input.Keyboard.KeyCodes.DOWN,
                shoot: Phaser.Input.Keyboard.KeyCodes.ENTER,
                escape: Phaser.Input.Keyboard.KeyCodes.ESC
            });
        }

        this.speed = 100;

        this.play(this.idleAnim);
        
    }

    preUpdate(time, deltaTime){
        super.preUpdate(time, deltaTime); // llama al preupdate para ejecutar la animacion

        // -- LEFT.
        if(this.cursors.left.isDown){
            this.body.setVelocityX(-this.speed);
            this.play(this.leftAnim);
        }
        // -- RIGHT.
        if(this.cursors.right.isDown){
            this.body.setVelocityX(this.speed);
            this.play(this.rightAnim);
        }

        // -- LEFT RIGHT JUSTUP.
        if(Phaser.Input.Keyboard.JustUp(this.cursors.left) || Phaser.Input.Keyboard.JustUp(this.cursors.right)) 
        {
            this.body.setVelocityX(0);
            this.play(this.idleAnim);
        }

        // -- UP.
        if(this.cursors.up.isDown){
            this.body.setVelocityY(-this.speed);
            this.play(this.idleAnim);
        }
        // -- DOWN.
        if(this.cursors.down.isDown){
            this.body.setVelocityY(this.speed);
            this.play(this.idleAnim);
        }
        
        // -- UP DOWN JUSTUP.
        if(Phaser.Input.Keyboard.JustUp(this.cursors.up) || Phaser.Input.Keyboard.JustUp(this.cursors.down)) 
        {
            this.body.setVelocityY(0);
        }

        if(this.cursors.shoot.isDown){ // si apretas el shoot...

        }
        
    }

    shoot(){

    }
}