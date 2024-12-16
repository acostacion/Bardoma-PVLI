export default class Boot extends Phaser.Scene {
    constructor() {
        super({ key: 'Boot'});
    }
    
    //Esta escena sirve para cargar todos los assets que tengamos para tenerlo organizado//
    preload () {
        this.load.image('ball', './assets/ball16.png');
        this.load.image('bg', './assets/background.png');
        this.load.image('table', './assets/table.png');
        this.load.image('score', './assets/score.png');
        this.load.spritesheet('penguin', './assets/penguin40.png', {frameWidth: 40, frameHeight: 40}) //520x40 520/13 -> 40
        this.load.spritesheet('rat', './assets/rat32.png', {frameWidth: 32, frameHeight: 32})
        
    }

    loadAnimations(){
        // PENGUIN
        this.anims.create({
            key: 'idleP',
            frames: anims.generateFrameNumbers('penguin', {start:0, end:0}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'andarP',
            frames: anims.generateFrameNumbers('penguin', {start:1, end:2}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'idleBolaP',
            frames: anims.generateFrameNumbers('penguin', {start:5, end:5}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'andarBolaP',
            frames: anims.generateFrameNumbers('penguin', {start:6, end:7}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'ganarP',
            frames: anims.generateFrameNumbers('penguin', {start:11, end:12}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'perderP',
            frames: anims.generateFrameNumbers('penguin', {start:8, end:8}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'golpeP',
            frames: scene.anims.generateFrameNumbers('penguin', {start:9, end:10}),
            frameRate: 5,
            repeat: -1
        });

        // RATA.
        this.anims.create({
            key: 'idleR',
            frames: scene.anims.generateFrameNumbers('rat', {start:5, end:5}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'andarR',
            frames: scene.anims.generateFrameNumbers('rat', {start:3, end:4}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'idleBolaR',
            frames: scene.anims.generateFrameNumbers('rat', {start:0, end:0}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'andarBolaR',
            frames: scene.anims.generateFrameNumbers('rat', {start:1, end:2}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'perderR',
            frames: scene.anims.generateFrameNumbers('rat', {start:11, end:12}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'ganarR',
            frames: scene.anims.generateFrameNumbers('rat', {start:6, end:6}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'golpeR',
            frames: scene.anims.generateFrameNumbers('rat', {start:8, end:10}),
            frameRate: 5,
            repeat: -1
        });

        /*// Si la animación de ataque se completa pasamos a ejecutar la animación 'idle'
        this.on('animationcomplete', end => {
            if (this.anims.currentAnim.key === 'attack'){
                this.stopAttack()
            }
        })

        // La animación a ejecutar según se genere el personaje será 'idle'
        this.play('idle');

        // Seteamos las teclas para mover al personaje
        this.wKey = this.scene.input.keyboard.addKey('W'); //saltar
        this.aKey = this.scene.input.keyboard.addKey('A'); //izquierda
        this.sKey = this.scene.input.keyboard.addKey('S'); //parar animación
        this.dKey = this.scene.input.keyboard.addKey('D'); //derecha
        this.ctrKey = this.scene.input.keyboard.addKey('SPACE'); //atacar*/
    }
    
    create()
    {
        this.scene.start("MainMenu");
    }
}