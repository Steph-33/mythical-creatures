class Dragon{
    constructor(name,rider,color,hungry = true,miam=0){
        this._name = name;
        this._rider = rider;
        this._color = color;
        this._hunger = hungry;
        this._miam = miam;
    }

    get name(){
        return this._name;
    }

    get rider(){
        return this._rider;
    }

    get color(){
        return this._color;
    }

    get hungry(){
        return this._hunger;
    }

    set hungry(newHunger){
        this._hunger = newHunger;
    }

    eat(){
        this._miam++
        if(this._miam >= 3){
            return this._hunger = false;
        }
    }
}

module.exports = Dragon;