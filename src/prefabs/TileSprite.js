export default class TileSprite{

    static sayName(){
        let TileName;
        if(Math.random() > 0.4)
            TileName = 'grass';
        else
            TileName = 'forest';
            
        return TileName;
    }

}