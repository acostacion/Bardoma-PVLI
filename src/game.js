// IMPORTAMOS LAS CLASES QUE SEAN NECESARIAS PARA EL FUNCIONAMIENTO DEL JUEGO
import MainMenu from './scenes/MainMenu.js';
import GameSelectorMenu from './scenes/GameSelectorMenu.js';


/**
 * Inicio del juego en Phaser. Creamos el archivo de configuración del juego y creamos
 * la clase Game de Phaser, encargada de crear e iniciar el juego.
 * Doc: https://photonstorm.github.io/phaser3-docs/Phaser.Types.Core.html#.GameConfig
 */

let config = {     
  parent: 'Juego',  
  type: Phaser.AUTO,      

  scale: {
      autoCenter: Phaser.Scale.CENTER_BOTH,
     
      mode: Phaser.Scale.FIT,  
      max: {
        width: 1280,   
        height: 720, 
      }
     
  },
  
  scene: [Boot, MainMenu, GameSelectorMenu, Game1, Game2, Game3, Game4, Game5, EndMenu],
  physics: {
    default: 'arcade', 
    arcade: {
      gravity: { y : 500 }, 
      debug: true,
    }
  },
  title: "Plantilla",
  version: "1.0.0"
}

new Phaser.Game(config);
