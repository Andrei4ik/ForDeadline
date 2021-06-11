import { config } from '../index.js';
import Tile from '../prefabs/Tile';



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
        this.load.image('etin','assets/enemies/ettin.png');
        this.load.image('hero','assets/hero/human.png');
        console.log("preload");
    }

    create() {
        this.createBack();

        this.createTiles();

        this.createBtnExit();

        this.createUnit('etin');

        this.createUnit('hero');
    }

    createBtnExit() {
        btnExit: Phaser.GameObjects.Text = null;

        let Styles = {
            Color : '#008080',
            Font : 'Arial'
        };
        let Texts = {
            exit : 'В Меню',
        };

        this.btnExit = this.add.text(            
            this.cameras.main.centerX + 675,
            this.cameras.main.centerY - 300,
            Texts.exit,
            {font: `48px ${Styles.Font}`, color: Styles.Color})
        .setOrigin(0.0);

        this.btnExit.setInteractive();
        this.btnExit.once('pointerdown', () => {
            this.scene.start('start');
        });
        return this.btnExit;
    };

    createBack() {
        this.add.sprite(275, 0, 'back').setOrigin(0,0);
    };


    createTiles(){
        this.tiles=[];
        let positions = this.getFieldPositions();

        for(let position of positions) {
            this.tiles.push(new Tile(this, position));
        }
    };


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
    
    createUnit(name){
        let Enemy;
        Enemy = this.add.sprite(0,0, name).setOrigin(0,0);
    }
}


