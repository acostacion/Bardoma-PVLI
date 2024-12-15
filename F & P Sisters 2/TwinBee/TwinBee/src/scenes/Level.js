import Player from '../objetos/Player.js'

let gameMode;

export default class Level extends Phaser.Scene {
    constructor() {
        super({ key: 'Level'});
    }

    init(data) {
        gameMode = data.gameMode;
    }

    create(){
        console.log(gameMode);

        // --- Background
        let bgKey;
        if(gameMode == 0) bgKey = 'background1P';
        else bgKey = 'background2P';

        this.bg = this.make.image({ key: bgKey }).setPosition(0, this.cameras.main.height).setOrigin(0,1);

        // --- Victory / Defeat text
        this.victoryText = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            'Victory', {
                fontSize: 40,
                fontFamily: 'gummy',
                color: 'yellow',
                align: 'center',
                stroke: 'orange',
                strokeThickness: 3
            }
        ).setOrigin(0.5).setVisible(false);

        this.defeatText = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            'Victory', {
                fontSize: 40,
                fontFamily: 'gummy',
                color: 'black',
                align: 'center',
                stroke: 'blue',
                strokeThickness: 3
            }
        ).setOrigin(0.5).setVisible(false);

        // --- Players
        if(gameMode == 0) {
            this.twinbee = new Player(this, this.cameras.main.centerX, this.cameras.main.centerY + 50, 1);
        }
        else {
            this.twinbee = new Player(this, this.cameras.main.centerX - 20, this.cameras.main.centerY + 50, 0);
            this.winbee = new Player(this, this.cameras.main.centerX + 20, this.cameras.main.centerY + 50, 1);
        }
    }

    update() {
        if(!(this.bg.y >= this.bg.height)) {
            this.bg.y += 1; 
        }
        else {
            this.victoryText.setVisible(true);
        }
    }
}