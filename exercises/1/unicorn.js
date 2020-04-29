class Unicorn {
  constructor(name,color = "white",sparklying_stuff) {
    this._name = name;
    this._color = color;
    this._sparklying_stuff = sparklying_stuff;
  }

  get name(){
    return this._name;
  }

  get color(){
    return this._color;
  }

  isWhite(){
    return this._color === false;
  }

  says(sentence){
    return this._sparklying_stuff = `**;* ${sentence} *;**`;
  }


  
}

module.exports = Unicorn;
