export default class Rat extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, gameMode) {
		super(scene, x, y, 'rat');
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.speed = 30; // velocidad de movimiento
        this.gameMode = gameMode;

        this.scene.add.existing(this);
		this.scene.physics.add.existing(this); // mete al pj en la escena y lo tienen en cuenta las fisicas
        this.body.setAllowGravity(false);
        this.body.setImmovable(true);
        this.body.setSize(32,32);

        // --- Animaciones
		this.play('idleR'); // animacion segun se genere -> idle

		// Seteamos las teclas para mover al personaje
		this.rightKey = this.scene.input.keyboard.addKey('S'); // parar animación
		this.leftKey = this.scene.input.keyboard.addKey('D'); // derecha
		this.downKey = this.scene.input.keyboard.addKey('SPACE'); // atacar

        if(this.gameMode == 0) { this.body.setVelocityX(-this.speed); }

        // tiene bola
        this.hasBall = false;

        // le acaban de golpear
        this.stun = false;
    }

    preUpdate(time, deltaTime) {
        super.preUpdate(time, deltaTime);
        
        // 1P
        if(this.gameMode == 0) {

            if(this.stun) {
                this.body.setVelocityX(0);
                this.scene.time.addEvent
                ({
                    delay: 5000,
                    loop: false,
                    callback: () =>
                    {
                        this.stun = false;
                        this.body.setVelocityX(-this.speed);

                        if(((this.body.velocity.x == -this.speed) && (this.x - this.width) < 115)) 
                        {
                            this.body.setVelocityX(this.speed);
                        }
                    }
                });
            }
            else
            {
                console.log(this.stun);
                if(((this.body.velocity.x == -this.speed) && (this.x - this.width) < 115))
                {
                    this.body.setVelocityX(this.speed);
                }
                // si esta yendo hacia la der
                if(((this.body.velocity.x == this.speed) && (this.x + this.width) > 352))
                {
                    this.body.setVelocityX(-this.speed);
                }
            }

            // si esta yendo hacia la izq
            

        }
        // VS
        else {

        }         
    }


    update(){
        
    }

}