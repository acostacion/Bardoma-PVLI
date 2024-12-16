export default class Penguin extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y){
        super(scene, x, y, 'penguin');

        this.scene = scene;
        this.x = x;
        this.y = y;
        this.play('idleP');

        // Mete el objeto en la escena con físicas.
        this.scene.add.existing(this);
        this.scene.physics.world.enable(this);
        //this.scene.physics.add.existing(this);

        //this.body.moves = false; // CONGELA EL OBJETO, pero permite colisión.

        this.speed = 100;

        this.aKey = this.scene.input.keyboard.addKey('A'); // izq
		this.dKey = this.scene.input.keyboard.addKey('D'); // der
		this.spaceKey = this.scene.input.keyboard.addKey('SPACE'); // agarrar

        this.isBallPicked = false; //inicialmente no la ha cogido.
        this.pressedSpace = false;  // inicialmente no la ha presionado.
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

        if(this.spaceKey.isDown){
            this.pressedSpace = true;
        }
        
        if(Phaser.Input.Keyboard.JustUp(this.spaceKey)){
            this.pressedSpace = false;
        }
    }


    create(){
         
    }

    update(){
         
    }
}