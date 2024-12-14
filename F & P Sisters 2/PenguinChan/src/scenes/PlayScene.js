let mode = 0; // gamemode 0 es p1.

import Ball from '../objetos/bola.js';
import Rat from '../objetos/rat.js';
import Penguin from '../objetos/penguin.js';
export default class PlayScene extends Phaser.Scene {
	constructor() {
		super({ key: 'PlayScene'});

	}

    init(data){
        mode = data.mode;
    }

    create(){ 
        this.bg = this.add.image(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            'bg'
        );

        this.table = this.add.image(
            115,
            168,
            'table'
        ).setOrigin(0);

        this.score = this.add.image(
            373,
            271,
            'score'
        ).setOrigin(0);

        this.penguin = new Penguin(this, 233, 424).setOrigin(0.5, 0);
        this.rat = new Rat(this, 233, 156, mode).setOrigin(0.5, 0); // 233 = a+b/2 con 0.5 para q sea el medio
 
        // Paredes
        // -- Izq
        this.paredIzq = this.physics.add.sprite(116, 315, null);
        this.paredIzq.body.setAllowGravity(false).setSize(10, 270); // Width / Height
        this.paredIzq.visible = false;
        // -- Der
        this.paredDer = this.physics.add.sprite(350, 315, null);
        this.paredDer.body.setAllowGravity(false).setSize(10, 270); // Width / Height
        this.paredDer.visible = false;

        let ratBalls = 5;
        let penguinBalls = 5;
        this.ballArray = [];

        for(let i = 0; i < ratBalls; i++){
            
            let ball = new Ball(this, 140+(47*i), 165).setOrigin(0.5, 0);
            this.ballArray.push(ball);
        }
        for(let i = 0; i < penguinBalls; i++)
        {
            let ball = new Ball(this, 140+(47*i), 450).setOrigin(0.5, 0);
            this.ballArray.push(ball);
        }
        
        // UI.
        this.timer = this.time.addEvent({
            delay: 91000, // espera 90 segs.
            callback: () => 
            {
                // lo que pasa si llega a 0.
            }
        }); 

        this.timerText = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY - 240,
            90,
            {
                fontFamily: 'Babelgam',
                fontSize: 30,
                color: 'white'
            }

        ).setDepth(1);

        this.collisions();
    }

    update(){
        this.timerText.setText(Math.trunc(this.timer.getRemaining()/1000)); // /1000 para q sean segundos y trunc para quitar decimales.
        if(this.ball){
            this.ball.update();
        }
        
    }

    collisions(){
        this.physics.add.collider(this.penguin, this.paredDer);
        this.physics.add.collider(this.penguin, this.paredIzq);
        this.physics.add.collider(this.ballArray, this.ballArray);
        this.physics.add.collider(this.ballArray, this.paredIzq);
        this.physics.add.collider(this.ballArray, this.paredDer);

        this.ballArray.forEach(obj =>  {
            this.physics.add.overlap(this.penguin, obj, ()=>{

                if((obj.y >= 450)&&(obj.body.velocity.y == 0) && !this.penguin.isBallPicked && this.penguin.pressedSpace){
                    console.log('hapillao')
                    this.penguin.isBallPicked = true;
                    //obj.setPosition(this.penguin.x, this, this.penguin.y);
                    //let angle = Phaser.Math.Angle(0);
                    this.physics.velocityFromRotation(angle, 100, obj); 
                }
            });

            this.physics.add.overlap(this.penguin, obj, ()=>{

            });
        })
    }
}