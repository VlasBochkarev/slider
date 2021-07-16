function Car(name) {
    this.name = name;
    this.isTurnOn = false;
    this.speed = 0;
    this.engine = {
        v: 2.0,
        horsePower: 120,
        isTurnOn: false,

    };
}



Car.prototype.start = function(speed) {
    this.isTurnOn = true;
    this.speed = speed;
    this.engine.isTurnOn = true;
    console.log(this.name, ' ', this.speed);
}