import TileSprite from "./TileSprite"

export default class Tile extends Phaser.GameObjects.Sprite{
    constructor(scene, position) {
    super(scene, position.x, position.y, TileSprite.sayName());
    this.scene = scene;
    this.setOrigin(0,0);
    this.scene.add.existing(this);
    }
}