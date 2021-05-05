import Phaser from 'phaser';


import GameScene from './scenes/GameScene'
//import ShopScene from './scenes/ShopScene'
//import StartScene from './scenes/StartScene'

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: "#806546",  
    rows: 15,   
    cols: 15, 
    scene: {GameScene ,}//ShopScene,StartScene,
}; 

const game = new Phaser.Game(config);

export { config };


