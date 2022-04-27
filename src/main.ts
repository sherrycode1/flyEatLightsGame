import 'phaser'
import LevelOneScene from './scenes/LevelOneScene'
import PreloaderScene from './scenes/PreloaderScene'
import SenceB from './scenes/SenceB'
import SenceC from './scenes/SenceC'
import SenceD from './scenes/SenceD'
const config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 720,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0, x: 0 },
      debug: true,
    },
  },
  scene: [PreloaderScene, LevelOneScene,SenceD, SenceB, SenceC],
}

new Phaser.Game(config)
