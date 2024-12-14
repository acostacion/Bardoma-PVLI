export default class MainMenu extends Phaser.Scene {
	constructor() {
		super({ key: 'MainMenu'});
	}

	create() {
        this.isOnP1 = true; // inicialmente está en P1.

        // título
        this.title = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY - 130,
            'Penguin-chan \nWars',
            {
                fontFamily: 'babelgam',
                fontSize: 70,
    
                color: 'blue',
                align: 'center',
                stroke: 'white',   
                strokeThickness: 5
                
            }
        ).setOrigin(0.5);

        // botón 1p
        this.P1 = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY + 100,
            '1P. Game',
            {
                fontFamily: 'babelgam',
                fontSize: 30,
    
                color: 'white',
                align: 'center',
            }
        ).setOrigin(0.5);

        // botón 2p
        this.P2 = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY + 150,
            'VS. Game',
            {
                fontFamily: 'babelgam',
                fontSize: 30,
    
                color: 'white',
                align: 'center',
            }
        ).setOrigin(0.5);  

        // pelota
        this.pelota = this.add.image(
            this.P1.x - 80,
            this.P1.y,
            'ball'
        );
    }

    update(){
        // W -> mueve en el eje -Y
        this.input.keyboard.on('keydown-W', () => {
            if(!this.isOnP1){
                this.pelota.setPosition(this.P1.x - 80, this.P1.y);
                this.isOnP1 = true;
            }
        });
        
        // S -> mueve en el eje Y
        this.input.keyboard.on('keydown-S', () => {
            if(this.isOnP1){
                this.pelota.setPosition(this.P2.x - 80, this.P2.y);
                this.isOnP1 = false;
            }
        });
        
        // SPACE 
        let mode;
        this.input.keyboard.on('keydown-SPACE', () => {
            if(this.isOnP1){
                mode = 0;
                this.scene.start('PlayScene', {mode: mode});
            }
            else{
                mode = 1;
                this.scene.start('PlayScene', {mode: mode});
            }
        });
        

    }
}