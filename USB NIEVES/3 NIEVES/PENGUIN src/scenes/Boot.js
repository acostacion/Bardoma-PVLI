export default class Boot extends Phaser.Scene {
    constructor() {
        super({ key: 'Boot'});
    }

    // Esta escena sirve para cargar todos los assets que tengamos para tenerlo organizado//
    preload () {
        // fondo
        this.load.image('background', './assets/background.png');

        // bola
        this.load.image('ball', './assets/ball16.png')

        // table
        this.load.image('table', './assets/table.png')

        // score
        this.load.image('score', './assets/score.png')

        // penguin
        this.load.spritesheet('penguin', './assets/penguin40.png', {frameWidth: 40, frameHeight: 40});
        
        // rat
		this.load.spritesheet('rat', './assets/rat32.png', {frameWidth: 32, frameHeight: 32});
    }

    loadAnimations() {
        // ------ PENGUIN
        this.anims.create({
			key: 'idleP',
			frames: this.anims.generateFrameNumbers('penguin', {start:0, end:0}),
			frameRate: 5,
			repeat: -1
		});
        this.anims.create({
			key: 'andarP',
			frames: this.anims.generateFrameNumbers('penguin', {start:1, end:2}),
			frameRate: 5,
			repeat: -1
		});
        this.anims.create({
			key: 'idleBolaP',
			frames: this.anims.generateFrameNumbers('penguin', {start:5, end:5}),
			frameRate: 18,
			repeat: 0
		});
		this.anims.create({
			key: 'andarBolaP',
			frames: this.anims.generateFrameNumbers('penguin', {start:6, end:7}),
			frameRate: 18,
			repeat: 0
		});
		this.anims.create({
			key: 'ganarP',
			frames: this.anims.generateFrameNumbers('penguin', {start:11, end:12}),
			frameRate: 5,
			repeat: -1
		});
        this.anims.create({
			key: 'perderP',
			frames: this.anims.generateFrameNumbers('penguin', {start:8, end:8}),
			frameRate: 5,
			repeat: -1
		});
        this.anims.create({
			key: 'golpeP',
			frames: this.anims.generateFrameNumbers('penguin', {start:9, end:10}),
			frameRate: 5,
			repeat: -1
		});
        // ------ RAT
        this.anims.create({
			key: 'idleR',
			frames: this.anims.generateFrameNumbers('rat', {start:5, end:5}),
			frameRate: 5,
			repeat: -1
		});
        this.anims.create({
			key: 'andarR',
			frames: this.anims.generateFrameNumbers('rat', {start:3, end:4}),
			frameRate: 5,
			repeat: -1
		});
        this.anims.create({
			key: 'idleBolaR',
			frames: this.anims.generateFrameNumbers('rat', {start:0, end:0}),
			frameRate: 18,
			repeat: 0
		});
		this.anims.create({
			key: 'andarBolaR',
			frames: this.anims.generateFrameNumbers('rat', {start:1, end:2}),
			frameRate: 18,
			repeat: 0
		});
		this.anims.create({
			key: 'ganarR',
			frames: this.anims.generateFrameNumbers('rat', {start:6, end:6}),
			frameRate: 5,
			repeat: -1
		});
        this.anims.create({
			key: 'perderR',
			frames: this.anims.generateFrameNumbers('rat', {start:11, end:12}),
			frameRate: 5,
			repeat: -1
		});
        this.anims.create({
			key: 'golpeR',
			frames: this.anims.generateFrameNumbers('rat', {start:8, end:10}),
			frameRate: 5,
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