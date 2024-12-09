export default class MainMenu extends Phaser.Scene {
	constructor() {
		super({ key: 'MainMenu'});
	}

	preload () {
        this.load.image('ball', './assets/ball16.png');
	}

	create() {
        // Texto del Título con borde de color aleatorio
        let title = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY - 100,
            'Penguin-chan \nWars',
            {
                fontFamily: 'Babelgam',
                fontSize: 60,

                color: 'blue',
                stroke: 'white',   
                strokeThickness: 5
            }
        ).setOrigin(0.5, 0.5);

        

        // Alineacion y profundidad del texto.
        title.setAlign('center').setDepth(1);

        // Botones
        this.playButton = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY + 20,
            '1P. Game',
            {
                fontFamily: 'Babelgam',
                fontSize: 30,
                color: 'white'
            }

        ).setOrigin(0.5, 0.5).setInteractive();

        this.playButtonTwo = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY + 60,
            'VS. Game',
            {
                fontFamily: 'Babelgam',
                fontSize: 30,
                color: 'white'
            }

        ).setOrigin(0.5, 0.5).setInteractive();

        // Bola selectora.
        this.ball = this.add.image(
            this.playButton.x - 80,
            this.playButton.y,
            'ball'
        ).setOrigin(0.5);

        // 0 -> playButton 
        // 1 -> playButtonTwo.
        this.selectedButton = 0; // podría hacerse tmb con booleanos o strings...

        this.input.keyboard.on('keydown-S', () =>{
            if(this.selectedButton === 0){
                this.selectedButton = 1; // cambia de botón.
                this.ball.setPosition(this.playButtonTwo.x - 80, this.playButtonTwo.y);
            }
        });

        this.input.keyboard.on('keydown-W', () =>{
            if(this.selectedButton === 1){
                this.selectedButton = 0; // cambia de botón.
                this.ball.setPosition(this.playButton.x - 80, this.playButton.y);
            }
        });

        this.input.keyboard.on('keydown-SPACE', () =>{
            if(this.selectedButton === 0){
                this.scene.start("PenguinScene");
            }
            else if(this.selectedButton === 1){
                this.scene.start("PenguinScene");
            }
        })

    }

	/*createButton(text, x, y, textColor) {
        let button = this.add.text(
           x,
           y,
            text,
            {
                fontFamily: 'Babelgam',
                fontSize: 30,

                color: textColor
            }
        ).setOrigin(0.5, 0.5);

        button.setInteractive();
        
    }*/

  }