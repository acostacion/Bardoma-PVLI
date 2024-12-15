export default class Title extends Phaser.Scene {
	constructor() {
		super({ key: 'Title'});
	}

	create() {
        this.title = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY - 60,
            'TwinBee',
            {
                fontFamily: 'gummy',
                fontSize: 30,

                color: 'white',
                stroke: 'pink',   
                strokeThickness: 5
            }
        ).setOrigin(0.5, 0.5);

        this.P1 = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            '1 player',
            {
                fontFamily: 'gummy',
                fontSize: 20,

                color: 'blue',
                stroke: 'yellow',   
                strokeThickness: 5
            }
        ).setOrigin(0.5, 0.5).setInteractive();

        this.P2 = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY +50,
            '2 player',
            {
                fontFamily: 'gummy',
                fontSize: 20,

                color: 'pink',
                stroke: 'blue',   
                strokeThickness: 5
            }
        ).setOrigin(0.5, 0.5).setInteractive();

        let mode;
        this.P1.on("pointerdown", () => { // Al hacer clic...
            mode = 0;
            this.scene.start("Level", {mode: mode});
        });  

        this.P2.on("pointerdown", () => { // Al hacer clic...
            mode = 1;
            this.scene.start("Level", {mode: mode});
        });  
    }
  }