import Phaser from 'phaser';


//import Game from './scenes/GameScenes'
//import Shop from './scenes/ShopScenes'
//import Main from './scenes/MainScenes'

let gameScene = new Phaser.Scene('Game');



const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: "#806546",  
    rows: 10,
    cols: 15, 
    scene: gameScene 
};

const game = new Phaser.Game(config);

gameScene.preload = function(){
    
    this.load.image('grass','assets/dc-dngn/floor/dirt_full.png');
    this.load.image('rock','assets/dc-dngn/floor/pebble_brown1.png');
    this.load.image('water','assets/dc-dngn/water/dngn_deep_water.png');
    this.load.image('dirt','assets/dc-dngn/floor/dirt0.png');
    this.load.image('forest','assets/dc-dngn/floor/dirt_forest.png');
    this.load.image('back','assets/back.png');
    console.log("preload");
};



gameScene.create = function()
{
    this.add.sprite(275, 0, 'back').setOrigin(0,0);;

    let positions = this.getFieldPositions();

    for(let position of positions) {
        this.add.sprite(position.x, position.y, 'grass').setOrigin(0,0);
    }
};

scene.getFieldPositions = function() {
    let positions = [];
    let tileSize = 32;

    for (let row = 0;  row < config.rows; row++) {
        for (let col = 0; col < config.cols; col++){
            positions.push({
                x: col * tileSize+900,
                y: row * tileSize+499,
            });
        }
    }

    return positions;
}
