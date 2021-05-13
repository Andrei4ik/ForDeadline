export default class ShopScene extends Phaser.Scene{
    constructor(){
        super("Shop")
    }

    create(){

        
        this.createBtnExit();
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
}