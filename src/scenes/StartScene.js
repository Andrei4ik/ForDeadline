btnO: Phaser.GameObjects.Text = null;

btnM: Phaser.GameObjects.Text = null;


let Styles = {
    Color = '#008080',
    Font = 'Arial'
};
let Texts = {
    Play = 'Высадка',
    Shop = 'Арсенал',
    Title = 'Меню',

};


export default class StartScene extends Phaser.Scene{
    constructor(){
        super("start")
    }
    
    create(){
        this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY - 350,
            Texts.Title,
            {font: `52px ${Styles.Font}`, color: Styles.Color})
        .setOrigin(0.5);

        this.btnO = this.add.text(            
            this.cameras.main.centerX,
            this.cameras.main.centerY - 200,
            Texts.Play,
            {font: `48px ${Styles.Font}`, color: Styles.Color})
        .setOrigin(0.5);

        this.btnO.setInteractive();
        this.btnO.once('pointerdown', () => {
            this.scene.start('Game');
        });

        this.btnM = this.add.text(            
            this.cameras.main.centerX,
            this.cameras.main.centerY - 50,
            Texts.Shop,
            {font: `48px ${Styles.Font}`, color: Styles.Color})
        .setOrigin(0.5);

        this.btnM.setInteractive();
        this.btnM.once('pointerdown', () => {
            this.scene.start('Shop');
        });

    }
}