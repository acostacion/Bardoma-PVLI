let mode = 0;
import Player from '../objects/player.js'
export default class Level extends Phaser.Scene {
    constructor() {
        super({ key: 'Level'});
    }

    init(data){
        mode = data.mode;
    }

    create(){
        
        if(mode == 0){
            this.bg = this.make.image({ 
                key: 'bg1',
            }).setPosition(0, this.cameras.main.height).setOrigin(0,1);

            this.player1 = new Player(this, this.cameras.main.centerX, this.cameras.main.centerY + 50, 0);
            
        }
        else if(mode == 1){
            this.bg = this.make.image({ 
                key: 'bg2',
            }).setPosition(0, this.cameras.main.height).setOrigin(0,1);

            this.player1 = new Player(this, this.cameras.main.centerX- 20, this.cameras.main.centerY + 50, 0);
            this.player2 = new Player(this, this.cameras.main.centerX+ 20, this.cameras.main.centerY + 50, 1);
        }

        this.victoryText = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            'Victory',
            {
                fontFamily: 'gummy',
                fontSize: 30,

                color: 'white',
                stroke: 'blue',   
                strokeThickness: 5
            }
        ).setOrigin(0.5).setVisible(false);

        this.defeatText = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            'Defeat',
            {
                fontFamily: 'gummy',
                fontSize: 30,

                color: 'grey',
                stroke: 'black',   
                strokeThickness: 5
            }
        ).setOrigin(0.5).setVisible(false);
    }

    update(){
        

        if(this.bg.y == 1536){
            this.bg.setPosition(0, 1536);
            this.victoryText.setVisible(true);
        }
        else{
            this.bg.y += 10;
        }
        
        
    }
}