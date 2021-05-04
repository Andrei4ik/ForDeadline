
export default class GameScene extends Phaser.Scene {
    constructor() {
        super ("Game");
    }
    preload() {
        this.load.image('grass','assets/dc-dngn/floor/dirt_full.png');
        this.load.image('rock','assets/dc-dngn/floor/pebble_brown1.png');
        this.load.image('water','assets/dc-dngn/water/dngn_deep_water.png');
        this.load.image('dirt','assets/dc-dngn/floor/dirt0.png');
        this.load.image('forest','assets/dc-dngn/floor/dirt_forest.png');
        this.load.image('back','assets/back.png');
        console.log("preload");
    }

    create() {
        this.add.sprite(275, 0, 'back').setOrigin(0,0);;

        let positions = this.getFieldPositions();
    
        for(let position of positions) {
            if(Math.random() > 0.4)
                this.add.sprite(position.x, position.y, 'grass').setOrigin(0,0);
            else
                this.add.sprite(position.x, position.y, 'forest').setOrigin(0,0);
        }
    }

    getFieldPositions() {
        let positions = [];
        let tileSize = 32;
        let offsetx = 650;
        let offsety = 250;
    
        for (let row = 0;  row < config.rows; row++) {
            for (let col = 0; col < config.cols; col++){
                positions.push({
                    x: col * tileSize+offsetx,
                    y: row * tileSize+offsety,
                });
            }
        }
    
        return positions;
    }
}


