export default class Rat extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, mode){
        super(scene, x, y, 'rat'); // super solo tiene escena, x, y, key

        this.scene = scene;
        this.x = x;
        this.y = y;
        this.mode = mode;
        this.play('idleR');

        // Mete el objeto en la escena con físicas.
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

        this.body.setAllowGravity(false); // fisicas
        this.body.setImmovable(true);
        //this.body.moves = false; // CONGELA EL OBJETO, pero permite colisión.

        this.speed = 100;

        if(this.mode == 0){
            this.body.setVelocityX(this.speed);
        }
    }

    create(){
         
    }

    preUpdate(time, deltaTime){
        super.preUpdate(time, deltaTime);
        if(this.mode == 0){ // 1 PLAYER.
            if(this.x < 115 && this.body.velocity.x == -this.speed){
                this.body.setVelocityX(this.speed);
            }
            if (this.x > 351 && this.body.velocity.x == this.speed){
                this.body.setVelocityX(-this.speed);
            }

        }
        else{ // VS PLAYER.

        }
    }

    update(){
        

        
    }
}