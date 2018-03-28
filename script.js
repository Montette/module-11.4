function Phone(brand, model, price, color, operating_system) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.color = color;
    this.operating_system = operating_system;
}

Phone.prototype.printInfo = function(){
    console.log("The phone brand is " + this.brand + ", color is " + this.color + ", operating system is " + this.operating_system + " and the price is " + this.price + ".")
}




var iPhone6S = new Phone("Apple", "6S", 2250, "silver", "iOS 11");
var GalaxyS8 = new Phone ("Samsung", "S8", 2240, "white", "Android 7.0");
var XperiaXZ1 = new Phone ("Sony", "XZ1", 2159, "black", "Android 8.0");


iPhone6S.printInfo();
GalaxyS8.printInfo();
XperiaXZ1.printInfo();