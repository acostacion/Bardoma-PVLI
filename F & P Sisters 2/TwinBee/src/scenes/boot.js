export default class Boot extends Phaser.Scene {
    constructor() {
        super({ key: 'Boot'});
    }

    preload () {
        this.load.image('bg1', './assets/images/background.png');
        this.load.image('bg2', './assets/images/background_hcontrast.png');
        this.load.spritesheet('twinbee', './assets/images/twinbee.png', {frameWidth: 16, frameHeight: 16}); //520x40 520/13 -> 40
        this.load.spritesheet('winbee', './assets/images/winbee.png', {frameWidth: 16, frameHeight: 16});
        this.load.spritesheet('explosion', './assets/images/explosion.png', {frameWidth: 16, frameHeight: 16});
        this.load.spritesheet('enemy', './assets/images/enemy.png', {frameWidth: 16, frameHeight: 16});
        this.load.image('green', './assets/images/green.png');
        this.load.image('bullet', './assets/images/bullet.png');
    }

    loadAnimations(){
        // ------ ENEMY
        this.anims.create({
            key: 'enemyMove',
            frames: this.anims.generateFrameNumbers('enemy', {start:0, end:3}),
            frameRate: 5,
            repeat: -1
        });

        // ------ EXPLOSION
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', {start:0, end:2}),
            frameRate: 5,
            repeat: -1
        });

        // ------ TWINBEE
        // idle
        this.anims.create({
            key: 'idleT',
            frames: this.anims.generateFrameNumbers('twinbee', {start:0, end:0}),
            frameRate: 5,
            repeat: -1
        });

        // izq
        this.anims.create({
            key: 'izqT',
            frames: this.anims.generateFrameNumbers('twinbee', {start:1, end:1}),
            frameRate: 5,
            repeat: -1
        });

        // der
        this.anims.create({
            key: 'derT',
            frames: this.anims.generateFrameNumbers('twinbee', {start:2, end:2}),
            frameRate: 5,
            repeat: -1
        });

        // ------ WINBEE
        // idle
        this.anims.create({
            key: 'idleW',
            frames: this.anims.generateFrameNumbers('winbee', {start:0, end:0}),
            frameRate: 5,
            repeat: -1
        });

        // izq
        this.anims.create({
            key: 'izqW',
            frames: this.anims.generateFrameNumbers('winbee', {start:1, end:1}),
            frameRate: 5,
            repeat: -1
        });

        // der
        this.anims.create({
            key: 'derW',
            frames: this.anims.generateFrameNumbers('winbee', {start:2, end:2}),
            frameRate: 5,
            repeat: -1
        });
    }
    
    create()
    {
        this.scene.start("Title");
    }
}