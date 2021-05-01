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
    backgroundColor: "#F0FFFF",   
    scene: gameScene 
};

const game = new Phaser.Game(config);

gameScene.preload = function(){
    console.log("preload");
    this.load.image('grass','assets/dc-dngn/floor/dirt_full.png');
    this.load.image('rock','assets/dc-dngn/floor/pebble_brown1.png');
    this.load.image('water','assets/dc-dngn/water/dngn_deep_water.png');
    this.load.image('dirt','assets/dc-dngn/floor/dirt0.png');
    this.load.image('forest','assets/dc-dngn/floor/dirt_forest.png');
};





gameScene.create = function()
{
    this.add.sprite(0, 0, 'forest');
    console.log("create");
};


gameScene.update= function ()
{

};