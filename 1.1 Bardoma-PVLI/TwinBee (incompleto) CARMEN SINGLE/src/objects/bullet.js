export default class Bullet extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y){
        super(scene, x, y, 'bullet');
        this.scene = scene;
        this.x = x;
        this.y = y;
        
        // Mete el objeto en la escena con físicas.
        this.scene.add.existing(this);
        this.scene.physics.world.enable(this);

        
    }

    summon(x, y){
        this.setPosition(x, y); // le da la pos
        this.body.velocity.y = -200; // se dispara en una dir.
    }

    explode(){

    }

    update(){
        if(this.y < this.scene.cameras.main.scrollY){ // si se sale por arriba.
            this.setActive(false);
            this.setVisible(false)
        }
    }
}

    