class Wizard{
    constructor({name,bearded=true,isRested=true,spell=0}){
        this._name = name;
        this._bearded = bearded;
        this._isRested = isRested;
        this._spell = spell;
    }

    get name(){
        return this._name;
    }

    get bearded(){
        return this._bearded;
    }

    get isRested(){
        return this._isRested;
    }

    get spell(){
        return this._spell;
    }

    incantation(sentence){
        return sentence.toUpperCase();
    }

    cast(){
        this._spell++
        if(this._spell >= 3){
            this._isRested = false;
            return 'I SHALL NOT CAST!';   
        }else{
            return 'MAGIC BULLET';
        }       
    }

}

module.exports = Wizard;