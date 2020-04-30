class Hobbit{
    constructor(name,disposition,age=0,adult=false,isShort=true,old=false,hasRing=false){
        this._name = name;
        this._disposition = "homebody";
        this._age = age;
        this._adult = adult;
        this._isShort = isShort;
        this._old = old;
        this._hasRing = hasRing;
    }

    get name(){
        return this._name;
    }

    get disposition(){
        return this._disposition;
    }

    get age(){
        return this._age;
    }

    get adult(){
        return this._adult;
    }

    get isShort(){
        return this._isShort;
    }

    get old(){
        return this._old;
    }

    get hasRing(){
        if(this._name === 'Frodo'){
            this._hasRing = true;
        }else{
            this._hasRing = false;
        }
        return this._hasRing;
    }

    celebrateBirthday(){
        this._age++
        if(this._age >= 33){
            this._adult = true;
        }
        if(this._age >= 101){
            this._old = true;
        }
    }

}

module.exports = Hobbit;