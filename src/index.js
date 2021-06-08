import Phaser from 'phaser';


import GameScene from './scenes/GameScene'
import ShopScene from './scenes/ShopScene'
import StartScene from './scenes/StartScene'

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: window.innerWidth,
        height: window.innerHeight,
    },
    backgroundColor: "#313312",//"#806546",  
    rows: 15,   
    cols: 15, 
    scene: [StartScene,ShopScene,GameScene ,]
}; 

const game = new Phaser.Game(config);



export { config };


