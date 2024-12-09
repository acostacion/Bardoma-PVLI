export default class PenguinScene extends Phaser.Scene {
	constructor() {
		super({ key: 'PenguinScene'});
	}

	preload () {
        this.load.image('bg', './assets/background.png');
	}

	create() {
        // background.
        this.bg = this.add.image(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            'bg'
        );

        this.timer = this.time.addEvent({
            delay: 91000, // espera 90 segs.
            callback: () => 
            {
                // lo que pasa si llega a 0.
            }
        }); 

        this.timerText = this.add.text(
            this.bg.x,
            this.bg.y - 50,
            90,
            {
                fontFamily: 'Babelgam',
                fontSize: 30,
                color: 'white'
            }

        ).setDepth(1);
    }

    update(){
        this.timerText.setText(Math.trunc(this.timer.getRemaining()/1000)); // /1000 para q sean segundos y trunc para quitar decimales.
        
    }
  } 