import Penguin from '../objetos/penguin.js';
import Rat from '../objetos/rat.js';
import Ball from '../objetos/ball.js';


let gameMode;

export default class PlayScene extends Phaser.Scene {
	constructor() {
		super({ key: 'PlayScene'});

        
	}

    init(data) {
        gameMode = data.gameMode;
    }

    create() {
        console.log(gameMode);

        // -- Objetos
        // Background
        this.bg = this.make.image({ 
            key: 'background',
        }).setPosition(this.cameras.main.centerX, this.cameras.main.centerY).setOrigin(0.5).setScale(1, 1);

        // Table
        this.table = this.make.image({ 
            key: 'table',
        }).setPosition(115, 168).setOrigin(0).setScale(1, 1);

        // Score
        this.table = this.make.image({ 
            key: 'score',
        }).setPosition(373, 271).setOrigin(0).setScale(1, 1);

        // Pinguino
        this.penguin = new Penguin(this, 233, 424).setOrigin(0.5, 0);
        
        // Bolas
        this.ballPool = [];
        
        let ratBalls = 5;
        let penguinBalls = 5;
        
        for(var i = 0; i < ratBalls; i++)
        {
            let ball = new Ball(this, 140+(37*i), 165).setOrigin(0.5, 0);
            this.ballPool.push(ball);
        }
        for(var i = 0; i < penguinBalls; i++)
        {
            let ball = new Ball(this, 140+(47*i), 450).setOrigin(0.5, 0);
            this.ballPool.push(ball);
        }
        
        // Rata
        this.rat = new Rat(this, 233, 156, gameMode).setOrigin(0.5, 0);

        // Paredes
        // -- Izq
        this.paredIzq = this.physics.add.sprite(116, 315, null);
        this.paredIzq.body.setAllowGravity(false).setSize(10, 270); // Width / Height
        this.paredIzq.visible = false;
        this.paredIzq.body.setImmovable(true);
        // -- Der
        this.paredDer = this.physics.add.sprite(350, 315, null);
        this.paredDer.body.setAllowGravity(false).setSize(10, 270); // Width / Height
        this.paredDer.visible = false;
        this.paredDer.body.setImmovable(true);
        
        // -- Tiempo
        // tiempo de juego inicial
        this.gameTime = 90;

        // tiempo
        this.timerText = this.add.text(this.cameras.main.centerX, 20, this.gameTime,
        { fontFamily: 'babelgam', fontSize: 30, color: 'White' }).setOrigin(0);
        
        this.timerHUD();

        this.checkCollisions();
    }
    
    timerHUD() {
        const updateTimer = () => {
            this.gameTime -= 1; // disminuye contador
            this.timerText.destroy(); // borra texto anterior

            if(this.gameTime > 0) 
            {
                // crea texto nuevo
                this.timerText = this.add.text(this.cameras.main.centerX, 20, this.gameTime,
                { fontFamily: 'babelgam', fontSize: 30, color: 'White' }).setOrigin(0);
            }
        };

        // temporizador
        this.time.addEvent({
            delay: 1000,
            loop: true,
            callback: updateTimer,
            callbackScope: this
        });
    }

    update() {
        if(this.penguin.hasBall && this.penguin.pressSpace) {
            this.penguin.hasBall = false;
            console.log("lanzar");
        }
    }

    checkCollisions() {
        this.physics.add.collider(this.penguin, this.paredDer);
        this.physics.add.collider(this.penguin, this.paredIzq);
        this.physics.add.collider(this.ballPool, this.paredDer);
        this.physics.add.collider(this.ballPool, this.paredIzq);
        
        // golpe al penguin
        this.ballPool.forEach(obj => {
            this.physics.add.overlap(this.penguin, obj, () => {
                // recoger bolas
                if((obj.y >= 450) && (obj.body.velocity.y == 0) && this.penguin.pressSpace && !this.penguin.hasBall) 
                    {
                    console.log("coger bola");
                    //obj.destroy();
                    this.penguin.hasBall = true;
                    obj.setVelocity(0,-50);
                }
                // si tiene fuerza hacia abj -> hace daño al pinguino
                /*
                if()
                {
                
                }
                */
            });
        });
        
        
        // golpe al rat
        this.ballPool.forEach(obj => 
        {
            this.time.addEvent
            ({
                delay: 5000,
                loop: true,
                callback: () =>
                {
                    this.physics.add.overlap(this.rat, obj, () => 
                    {
                        if(obj.body.velocity.y < 0)
                        {
                            this.rat.stun = true;
                            console.log("au");
                        }
                        if(!this.rat.hasBall)
                        {
                            obj.setVelocity(0,50);
                        }
                    });
                }
            });
            
        });

        this.physics.add.collider(this.ballPool, this.ballPool);

    }
}