export default class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenu'});
    }

    create() {
        // --- Titulo
        this.title = this.add.text(
            this.cameras.main.centerX,
            45,
            'TwinBee', {
                fontSize: 40,
                fontFamily: 'gummy',
                color: 'white',
                align: 'center',
                stroke: 'pink',
                strokeThickness: 3
            }
        ).setOrigin(0.5); // para que el centro sea el centro de la pantalla

        // --- Botones
        this.P1 = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            '1 Player', {
                fontSize: 20,
                fontFamily: 'gummy',
                color: 'blue',
                align: 'center',
                stroke: 'orange',
                strokeThickness: 2
            }
        ).setOrigin(0.5);

        let gameMode;

        this.P1.setInteractive();
        this.P1.on("pointerdown", () => { // Al hacer clic...
            gameMode = 0;
            this.scene.start("Level", { gameMode: gameMode } );
        });

        this.P2 = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY + 30,
            '2 Players', {
                fontSize: 20,
                fontFamily: 'gummy',
                color: 'red',
                align: 'center',
                stroke: 'blue',
                strokeThickness: 2
            }
        ).setOrigin(0.5);

        this.P2.setInteractive();
        this.P2.on("pointerdown", () => { // Al hacer clic...
            gameMode = 1;
            this.scene.start("Level", { gameMode: gameMode } );
        });

    }
}