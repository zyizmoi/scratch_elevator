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
  getPassengers() {
    return this.passengers
  }
  getFloor() {
    return this.floor
  }
}

class Passenger {
  constructor(id, currFloor = 0, destFloor) {
    this.id = id
    this.currFloor = currFloor
    this.destFloor = destFloor
  }

  getDestFloor() {
    return this.destFloor
  }

  getCurrFloor() {
    return this.currFloor
  }
}

// number of passengers at level 1
let level_1_passengers = []

const elevators = []
const elevator1 = new Elevator(1, 0)

/* for (let i = 0; i < 10; i++) {
  elevators[i] = new Elevator(i)
} */

function createPassenger() {
  //random number from 0-20
  let randomNumber = Math.floor(Math.random() * 20)
  const passenger = new Passenger(level_1_passengers.length, 0, randomNumber)
  level_1_passengers.push(passenger)
}

function Simulation() {
  /* for (let elevator of elevators) {
    //random number from 0-20
    let randomNumber = Math.floor(Math.random() * 20)
    elevator.goToFloor(randomNumber)
  } */

  //create passenger
  createPassenger()

  /* Player will add logic below to control elevator */
  //Dummy logic below:
  if (elevator1.getFloor() !== 0) {
    for (let passenger of elevator1.getPassengers()) {
      // alight passengers they are at their destination
      if (passenger.getDestFloor() === elevator1.floor) {
        elevator1.removePassenger(passenger)
        console.log(`passenger ${passenger.id} has alighted`)
      }
    }

    if (elevator1.getFloor() < 20) {
      elevator1.goToFloor(elevator1.getFloor() + 1)
      console.log(`going to floor ${elevator1.getFloor() + 1}`)
    } else {
      elevator1.goToFloor(0)
      console.log(`going to floor 0`)
    }
  } else {
    // if elevator is at floor 0, then pick up passengers
    for (let passenger of level_1_passengers) {
      if (passenger.getCurrFloor() === 0) {
        elevator1.addPassenger(passenger)
        console.log(`passenger ${passenger.id} has boarded at floor ${elevator1.getFloor()}`)
      }
    }

    level_1_passengers = level_1_passengers.filter((passenger) => passenger.getCurrFloor() === 0)

    elevator1.goToFloor(elevator1.getFloor() + 1)

    //return elevators
  }
}

for (let i = 0; i < 10; i++) {
  Simulation()
}

//const [elevators, setElevators] = useState(Simulation())
