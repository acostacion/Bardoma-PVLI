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
            let ball = new Ball(this, 140+(47*i), 165).setOrigin(0.5, 0);
            this.ballPool.push(ball);
        }
        for(var i = 0; i < penguinBalls; i++)
        {
            let ball = new Ball(this, 140+(47*i), 450).setOrigin(0.5, 0);
            this.ballPool.push(ball);
        }
        
        // Rata
        this.rat = new Rat(this, 233, 156, gameMode).setOrigin(0.5, 0);
        
        // -- Tiempo
        // tiempo de juego inicial
        this.gameTime = 90;

        // tiempo
        this.timerText = this.add.text(this.cameras.main.centerX, 20, this.gameTime,
        { fontFamily: 'babelgam', fontSize: 30, color: 'White' }).setOrigin(0);
        
        this.timerHUD();
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
}