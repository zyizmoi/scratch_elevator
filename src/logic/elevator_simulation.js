//Class elevator
class Elevator {
  constructor(id, floor = 0, direction = 'up') {
    this.id = id
    this.floor = floor
    this.direction = direction
    this.passengers = []
  }

  addPassenger(passenger) {
    this.passengers.push(passenger)
  }
  removePassenger(passenger) {
    this.passengers.splice(this.passengers.indexOf(passenger), 1)
  }
  getPassengerCount() {
    return this.passengers.length
  }
  goToFloor(floor) {
    this.floor = floor
    //console.log('Elevator ' + this.id + ' is now on floor ' + this.floor)
  }
}

const elevators = []

for (let i = 0; i < 10; i++) {
  elevators[i] = new Elevator(i)
}

function Simulation() {
  for (let elevator of elevators) {
    //random number from 1-20
    let randomNumber = Math.floor(Math.random() * 20) + 1
    elevator.goToFloor(randomNumber)
  }

  return elevators
}

Simulation()

const [elevators, setElevators] = useState(Simulation())