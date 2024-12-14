export default class Penguin extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
		super(scene, x, y, 'penguin');
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.speed = 140; // velocidad de movimiento

        this.scene.add.existing(this);
		this.scene.physics.add.existing(this); // mete al pj en la escena y lo tienen en cuenta las fisicas
        this.body.setAllowGravity(false);
        this.body.setImmovable(true);
        this.body.setSize(40,40);

        // --- Animaciones
		this.play('idleP'); // animacion segun se genere -> idle

		// Seteamos las teclas para mover al personaje
		this.aKey = this.scene.input.keyboard.addKey('A');
		this.dKey = this.scene.input.keyboard.addKey('D');
		this.spaceKey = this.scene.input.keyboard.addKey('SPACE'); // coger bola
    }

    create() {

    }

    preUpdate(time, deltaTime) {
        super.preUpdate(time, deltaTime); // llama al preupdate para ejecutar la animacion

        // ---- input ----
        // A -> mueve en el eje -X
        if(this.aKey.isDown && (this.x - this.width) > 115)
        {
            this.body.setVelocityX(-this.speed);
        }
        // D -> mueve en el eje X
        if(this.dKey.isDown && this.x + this.width < 351)
        {
            this.body.setVelocityX(this.speed);
        }

        // dejar A o D -> para
        // Phaser.Input.Keyboard.JustUp y Phaser.Input.Keyboard.JustDown nos aseguran detectar la tecla una sola vez (evitamos repeticiones)
		if(Phaser.Input.Keyboard.JustUp(this.aKey) || Phaser.Input.Keyboard.JustUp(this.dKey)) 
        {
            /*
			if(this.anims.currentAnim.key !== 'attack' && this.anims.isPlaying === true){
				this.play('idle');
			}*/
			this.body.setVelocityX(0);
		}
    }

    update() {
        
    }
}