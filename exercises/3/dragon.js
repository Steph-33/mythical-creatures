class Dragon{
    constructor(name,rider,color,hungry = true){
        this._name = name;
        this._rider = rider;
        this._color = color;
        this._hunger = hungry;
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
        if(this.hungry=true){
            return this._hunger = false;
        }
    }
}

module.exports = Dragon;