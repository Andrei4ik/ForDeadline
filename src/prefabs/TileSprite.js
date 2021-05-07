export default class TileSprite{

    SayName(){
        let TileName;
        if(Math.random() > 0.4)
            TileName = 'grass';
        else
            TileName = 'forest';
            
        return TileName;
    }

}