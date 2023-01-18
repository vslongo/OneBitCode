class Vehicle {
    move() {
        console.log("O carro está movendo");
    }
}
class Car extends Vehicle {
move() {
console.log("O carro está movendo");

}
}

class Ship extends Vehicle {
 move() {
    console.log("O navio está navegando");
 }
}

class Aircraft extends Vehicle {
    move(speed) {
        console.log(`O avião está voando a ${speed} km/h.` );
    }
}

const delorean = new Car();
const epoch = new Ship();
const blackPearl = new Aircraft();


// delorean.move();
// epoch.move();
// blackPearl.move(80)

function start(Vehicle) {
    console.log('Iniciuando um veiculo...');
    Vehicle.move();
}

start(delorean);
start(epoch);
start(blackPearl);