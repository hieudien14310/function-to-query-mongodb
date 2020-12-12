// Đầu tiên là phải có 1 factory method chính, phụ trách việc return về đối tượng tương ứng với params truyền vào.
function carFactory(){
    this.checkCar = function (typeCar, nameCar) {
        switch (typeCar) {
            case "Mercedes":
                carMercedes(nameCar);
                break;
                case "Audi":
                carAudi(nameCar);
                break;
            case "Maserati":
                carMaserati(nameCar);
                break;
            case "Royce Rolls":
                carRoyceRolls(nameCar);
                break;
            default:
                break;
        }
    }
}

// Các methods con sẽ được trả về cho Factory khi đúng điều kiện
function carMercedes(name){
    const information = `This is a ${name} car 🚙`
    return information;
}
function carAudi(name){
    const information = `This is a ${name} car 🚓`
    console.log(information);
}
function carMaserati(name){
    const information = `This is a ${name} car 🚗`
    return information;
}
function carRoyceRolls(name){
    const information = `This is a ${name} car 🦽`
    return information;
}

function callCar() {
    var callCar = new carFactory();
    callCar.checkCar("Audi", "Audi R8");
}
callCar();
// Lưu ý rằng: JS là ngôn ngữ ko theo lập trình hướng đối tượng (OOP) nên việc design pattern áp vào sẽ hơi khác đi một chút nhưng về mặt ý tưởng thì vẫn giống như những ngôn ngữ khác. 
// Nhưng JS vẫn có thể viết class thay cho function. 
 