export default class Boot extends Phaser.Scene {
    constructor() {
        super({ key: 'boot'});
    }
    
    //Esta escena sirve para cargar todos los assets que tengamos para tenerlo organizado//
    preload () {
        // ----- CARGAR IMAGENES DEL JUEGO -----
    
    }
    
    create()
    {
        this.scene.start("title");
    }
}