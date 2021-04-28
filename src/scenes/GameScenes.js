import Phaser from 'phaser';
import Main from './scenes/MainScene.js'

var ROWS = 10;
var COLS = 15;

export class Game extends Phaser.Scene
{
    constructor ()
    {
        super('Game');

    }
      
    create ()
    {
        pole= game.add.tileSprite(0,0,800,800,'forest')
    }
}