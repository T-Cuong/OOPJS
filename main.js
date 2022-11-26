let shape = new Shape('Hình chung');
console.log('Dien tich cua' + shape.getName() + '=' + shape.getArea());

let circle = new Circle('Hình tron', 1.0);
console.log('Dien tich cua' + circle.getName() + '=' + circle.getArea());

let rightTriangle = new RightTriangle('Hình tam giac vuong', 1.40, 45.2);
console.log('Dien tich cua' + rightTriangle.getName() + '=' + rightTriangle.getArea());