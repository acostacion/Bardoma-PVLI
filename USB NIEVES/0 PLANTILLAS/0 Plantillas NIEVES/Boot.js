export default class Boot extends Phaser.Scene {
    constructor() {
        super({ key: 'Boot'});
    }

    // Esta escena sirve para cargar todos los assets que tengamos para tenerlo organizado//
    preload () {
        // fondo
        this.load.image('background', './assets/background.png');

        // 
        this.load.spritesheet('sprite', './assets/sprite.png', {frameWidth: 40, frameHeight: 40});
    }

    loadAnimations() {
        // ------ PENGUIN
        this.anims.create({
			key: 'idle',
			frames: this.anims.generateFrameNumbers('sprite', {start:0, end:0}),
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