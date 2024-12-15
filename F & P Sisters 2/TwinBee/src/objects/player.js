
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
            this.leftAnim = 'leftW';
            this.rightAnim = 'rightW';
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

        if(this.cursors.left.isDown){
            this.body.setVelocityX(-100);
            this.play(this.leftAnim);
        }
        else if(this.cursors.right.isDown){
            this.body.setVelocityX(100);
            this.play(this.rightAnim);
        }
        else if(this.cursors.up.isDown){
            this.body.setVelocityY(-100);
            this.play(this.idleAnim);
        }
        else if(this.cursors.down.isDown){
            this.body.setVelocityY(100);
            this.play(this.idleAnim);
        }
        else if(this.cursors.shoot.isDown){

        }

        if(this.cursors.left.isUp){
            this.body.setVelocityX(0);
            this.play(this.idleAnim);
        }
        else if(this.cursors.right.isUp){
            this.body.setVelocityX(0);
            this.play(this.idleAnim);
        }
        else if(this.cursors.up.isUp){
            this.body.setVelocityY(0);
            this.play(this.idleAnim);
        }
        else if(this.cursors.down.isUp){
            this.body.setVelocityY(0);
            this.play(this.idleAnim);
        }
        else if(this.cursors.shoot.isUp){

        }
    }

    create(){ 
        
        
    }

    update(){
         
    }
}