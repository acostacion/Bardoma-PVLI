export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, player) {
        if(player == 1) super(scene, x, y, 'idleT');
        else super(scene, x, y, 'idleW');
        
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.player = player; // 1 o 2
        this.speed = 140; // velocidad de movimiento

        this.scene.add.existing(this);
		this.scene.physics.add.existing(this); // mete al pj en la escena y lo tienen en cuenta las fisicas
        this.body.setAllowGravity(false);
        this.body.setImmovable(true);
        this.body.setSize(16,16);
        this.body.setOffset(0,0);
        this.body.setCollideWorldBounds(true);

        // --- Config input y animaciones
        if (this.player == 1) {
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

        // --- Animaciones
        this.play(this.idleAnim); // animacion segun se genere -> idle
    }

    preUpdate(time, deltaTime) {
        super.preUpdate(time, deltaTime);

        // --- horizontal
        if(this.cursors.left.isDown) {
            this.body.setVelocityX(-this.speed);
            this.play(this.leftAnim);
        }

        if(this.cursors.right.isDown) {
            this.body.setVelocityX(this.speed);
            this.play(this.rightAnim);
        }

        if(Phaser.Input.Keyboard.JustUp(this.cursors.left) || Phaser.Input.Keyboard.JustUp(this.cursors.right)) 
        {
            this.body.setVelocityX(0);
            this.play(this.idleAnim);
        }

        // --- vertical
        if(this.cursors.up.isDown) {
            this.body.setVelocityY(-this.speed);
            this.play(this.idleAnim);
        }

        if(this.cursors.down.isDown) {
            this.body.setVelocityY(this.speed);
            this.play(this.idleAnim);
        }

        if(Phaser.Input.Keyboard.JustUp(this.cursors.up) || Phaser.Input.Keyboard.JustUp(this.cursors.down)) 
        {
            this.body.setVelocityY(0);
        }
    }

    shoot() {
        
    }
}