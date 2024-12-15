export default class Boot extends Phaser.Scene {
    constructor() {
        super({ key: 'Boot'});
    }

    // Esta escena sirve para cargar todos los assets que tengamos para tenerlo organizado//
    preload () {
        // fondo -> 1P
        this.load.image('background1P', './assets/images/background.png');

		// fondo -> 2P
        this.load.image('background2P', './assets/images/background_hcontrast.png');

		// bala
        this.load.image('bullet', './assets/images/background_hcontrast.png');

		// bell
        this.load.image('bell', './assets/images/green.png');

		// enemy
		this.load.spritesheet('enemy', './assets/images/enemy.png', {frameWidth: 16, frameHeight: 16});

		// explosion
		this.load.spritesheet('explosion', './assets/images/explosion.png', {frameWidth: 16, frameHeight: 16});

		// twinbee
		this.load.spritesheet('twinbee', './assets/images/twinbee.png', {frameWidth: 16, frameHeight: 16});

		// winbee
		this.load.spritesheet('winbee', './assets/images/winbee.png', {frameWidth: 16, frameHeight: 16});
    }

    loadAnimations() {
        // ------ ENEMY
        this.anims.create({
			key: 'enemyMove',
			frames: this.anims.generateFrameNumbers('enemy', {start:0, end:3}),
			frameRate: 1,
			repeat: -1
		});

		// ------ EXPLOSION
		this.anims.create({
			key: 'explode',
			frames: this.anims.generateFrameNumbers('explosion', {start:0, end:2}),
			frameRate: 1,
			repeat: -1
		});
        
		// ------ TWINBEE
		// idle
		this.anims.create({
			key: 'idleT',
			frames: this.anims.generateFrameNumbers('twinbee', {start:0, end:0}),
			frameRate: 1,
			repeat: -1
		});

		// izq
		this.anims.create({
			key: 'izqT',
			frames: this.anims.generateFrameNumbers('twinbee', {start:1, end:1}),
			frameRate: 1,
			repeat: -1
		});

		// der
		this.anims.create({
			key: 'derT',
			frames: this.anims.generateFrameNumbers('twinbee', {start:2, end:2}),
			frameRate: 1,
			repeat: -1
		});

		// ------ WINBEE
		// idle
		this.anims.create({
			key: 'idleW',
			frames: this.anims.generateFrameNumbers('winbee', {start:0, end:0}),
			frameRate: 1,
			repeat: -1
		});

		// izq
		this.anims.create({
			key: 'izqW',
			frames: this.anims.generateFrameNumbers('winbee', {start:1, end:1}),
			frameRate: 1,
			repeat: -1
		});

		// der
		this.anims.create({
			key: 'derW',
			frames: this.anims.generateFrameNumbers('winbee', {start:2, end:2}),
			frameRate: 1,
			repeat: -1
		});
    }

    create()
    {
        console.log("Boot");
        this.loadAnimations();
        this.scene.start("MainMenu");
    }
}