import EnemySprite from "./EnemySprite"

export default class Tile extends Phaser.GameObjects.Sprite{
    constructor(scene, position) {
    super(scene, position.x, position.y, EnemySprite.sayName());
    this.scene = scene;
    this.setOrigin(0,0);
    this.scene.add.existing(this);
    }
}