
class RightTriangle extends Shape{
    constructor(name, length, height){
        super(name);
        this.length = length;
        this.height = height;
    }
    getArea() {
        return (this.length * this.height)/2;
    }
}