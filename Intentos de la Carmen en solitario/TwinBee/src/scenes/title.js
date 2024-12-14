export default class Title extends Phaser.Scene {
	constructor() {
		super({ key: 'title'});
	}

	create() {
        // title
        this.title = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY -70,
            'TwinBee',
            {
                fontFamily: 'gummy',
                fontSize: 40,
    
                color: 'white',
                stroke: '#f5538c',   
                strokeThickness: 5,
            }
        ).setOrigin(0.5);

        // 1P
        this.P1 = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY +40,
            '1 player',
            {
                fontFamily: 'gummy',
                fontSize: 20,
    
                color: '#3030ff',
                stroke: '#c49b2f',   
                strokeThickness: 5,
            }
        ).setOrigin(0.5).setInteractive();

        // 2P
        this.P2 = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY +80,
            '2 players',
            {
                fontFamily: 'gummy',
                fontSize: 20,
    
                color: '#ff3030',
                stroke: '#3030ff',   
                strokeThickness: 5
            }
        ).setOrigin(0.5).setInteractive();

        P1.on("pointerdown", () => { // Al hacer clic...
            this.scene.start("level");
        });

        P2.on("pointerdown", () => { // Al hacer clic...
            this.scene.start("level");
        });
        
    }
  }