import Phaser from 'phaser';


import GameScene from './scenes/GameScenes'
//import Shop from './scenes/ShopScenes'
//import Main from './scenes/MainScenes'


const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: "#806546",  
    rows: 15,
    cols: 15, 
    scene: GameScene 
};

const game = new Phaser.Game(config);



