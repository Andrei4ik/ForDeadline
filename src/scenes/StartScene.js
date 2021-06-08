btnO: Phaser.GameObjects.Text = null;

btnM: Phaser.GameObjects.Text = null;

btnT: Phaser.GameObjects.Text = null;


let Styles = {
    Color : '#008080',
    Font : 'Arial'
};
let Texts = {
    Play : 'Высадка',
    Shop : 'Арсенал',
    Onlain : 'Стычка',
    Title : 'Меню',

};


export default class StartScene extends Phaser.Scene{
    constructor(){
        super("start")
    }
    
    preload(){
        this.load.image('ME_back','assets/ME_back.png');

        console.log("preload");
    }

    create(){


        this.createBack();

        this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY - 150,
            Texts.Title,
            {font: `52px ${Styles.Font}`, color: Styles.Color})
        .setOrigin(0.5);

        this.btnO = this.add.text(            
            this.cameras.main.centerX + 40,
            this.cameras.main.centerY - 70,
            Texts.Play,
            {font: `48px ${Styles.Font}`, color: Styles.Color})
        .setOrigin(0.5);

        this.btnO.setInteractive();
        this.btnO.once('pointerdown', () => {
            this.scene.start('Game');
        });

        this.btnM = this.add.text(            
            this.cameras.main.centerX + 40,
            this.cameras.main.centerY + 45,
            Texts.Shop,
            {font: `48px ${Styles.Font}`, color: Styles.Color})
        .setOrigin(0.5);

        this.btnM.setInteractive();
        this.btnM.once('pointerdown', () => {
            this.scene.start('Shop');
        });
    
        this.btnT = this.add.text(            
            this.cameras.main.centerX + 30,
            this.cameras.main.centerY + 145,
            Texts.Onlain,
            {font: `48px ${Styles.Font}`, color: Styles.Color})
            .setOrigin(0.5);
        

    }

    createBack() {
        this.add.sprite(245, 0, 'ME_back').setOrigin(0,0);;
    };
}