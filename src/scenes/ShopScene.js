export default class ShopScene extends Phaser.Scene{
    constructor(){
        super("Shop")
    }


    preload(){
        this.load.image('SH_back','assets/SH_back.png');
        this.load.image('feik','assets/feik.png');
        this.load.image('feik_two','assets/feik_two.png');
        console.log("preload");
    }

    create(){
        this.createMenuBtn();
        this.createBack();
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
            this.cameras.main.centerY + 300,
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
        this.add.sprite(0, 0, 'SH_back').setOrigin(0,0);
        this.add.sprite(0, 685, 'feik').setOrigin(0,0);
        this.add.sprite(895, -10, 'feik_two').setOrigin(0,0);
    };

    createMenuBtn() {
        btnq: Phaser.GameObjects.Text = null;

        let Styles = {
            Color : '#008080',
            Font : 'Arial'
        };
        
        let Texts = {
            Armor : 'Броня',
        };

        
        this.btnq = this.add.text(            
            this.cameras.main.centerX + 10,
            this.cameras.main.centerY - 124,
            Texts.Armor,
            {font: `48px ${Styles.Font}`, color: Styles.Color})
        .setOrigin(0.5);
    }


}