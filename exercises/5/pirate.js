class Pirate{
    constructor(name,job='Scallywag',cursed=false,heinousAct=0){
        this._name = name;
        this._job = job;
        this._cursed = cursed;
        this._heinousAct = heinousAct;
        this._booty = 0;
    }

    get name(){
        return this._name;
    }

    get job(){
        return this._job;
    }

    get cursed(){
        return this._cursed;
    }

    get booty(){
        return this._booty;
    }

    commitHeinousAct(){
        this._heinousAct++;
        if(this._heinousAct >= 3){
            this._cursed = true;
        }
    }

    robShip(){
        this._booty = 100;
        return 'YAARRR!';
    }
}

module.exports = Pirate;