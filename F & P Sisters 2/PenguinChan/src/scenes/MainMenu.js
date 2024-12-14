export default class MainMenu extends Phaser.Scene {
	constructor() {
		super({ key: 'MainMenu'});
	}

    create() {
        // --- Titulo
        this.title = this.add.text(
            this.cameras.main.centerX,
            100,
            'Penguin chan \nWars', {
                fontSize: 70,
                fontFamily: 'babelgam',
                color: 'blue',
                align: 'center',
                stroke: 'white',
                strokeThickness: 5
            }
        ).setOrigin(0.5); // para que el centro sea el centro de la pantalla

        // --- Botones
        this.P1 = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            '1P. Game', {
                fontSize: 30,
                fontFamily: 'babelgam',
                color: 'white',
                align: 'center'
            }
        ).setOrigin(0.5);

        this.VS = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY + 50,
            'VS. Game', {
                fontSize: 30,
                fontFamily: 'babelgam',
                color: 'white',
                align: 'center'
            }
        ).setOrigin(0.5);

        // Cursor bola
        this.ballCursor = this.add.image(
            this.P1.x - 80,
            this.P1.y,
            'ball'
        ).setScale(1, 1.1);
    }

    update() {
        // --- input ---
        // S ->
        this.input.keyboard.on('keydown-S', () => {
            if(this.ballCursor.y != this.VS.y) {
                this.ballCursor.y = this.VS.y;
            }
        });

        // A ->
        this.input.keyboard.on('keydown-W', () => {
            if(this.ballCursor.y != this.P1.y) {
                this.ballCursor.y = this.P1.y;
            }
        });

        // SPACE ->
        this.input.keyboard.on('keydown-SPACE', () => {
            // empieza el juego en P1
            let gameMode;
            if(this.ballCursor.y == this.P1.y) {
                gameMode = 0;
                this.scene.start("PlayScene", { gameMode: gameMode } );
            }
            // empieza el juego en VS
            if(this.ballCursor.y == this.VS.y) {
                gameMode = 1;
                this.scene.start("PlayScene", { gameMode: gameMode });
            }
        });
    }
}