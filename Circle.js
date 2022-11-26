
class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }
    getArea() {
        return 3.1415*this.radius*this.radius;
    }
}