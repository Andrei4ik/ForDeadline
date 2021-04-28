import Phaser from 'phaser';



export class Main extends Phaser.Scene
{
    constructor() {
        super ('MainScene'); 
    }

    preload() {
        this.load.image('grass','assets/dc-dngn/floor/dirt_full');
        this.load.image('rock','assets/dc-dngn/floor/pebble_brown1');
        this.load.image('water','assets/dc-dngn/water/dngn_deep_water');
        this.load.image('dirt','assets/dc-dngn/floor/dirt0');
        this.load.image('forest','assets/dc-dngn/floor/dirt_forest');
    }
}