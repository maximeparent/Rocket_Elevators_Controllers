//----------------------- Column controling elevators ------------------

class Column {

  constructor(ID, NbElevator, NbFloor) {
    this.ID = ID;
    this.NbElevator = NbElevator
    this.NbFloor = NbFloor
    this.elevatorsList = []
    this.CallButtonList = []
    this.buttonList = []


    // nombre elevator

    for (var i = 0; i < NbElevator; i++) {
      var elevator = new Elevator(i, NbFloor)
      elevator.id = i
      elevator.CurrentFloor = 0
      this.elevatorsList.push(elevator);
    }

    //  bouton Up and Down

    for (var i = 1; i < NbFloor + 1; i++) {
      if (i != 1) {
        var callButton = new CallButton("down", i);
        this.CallButtonList.push(callButton)
      }
      if (i != NbFloor) {
        var callButton = new CallButton("up", i)
        this.CallButtonList.push(callButton)
      }
    }
  }

  // user call elevator (methods chaining)
  requestElevator(direction, requestedFloor) {
    var bestElevator = this.FindElevator(direction, requestedFloor)

    bestElevator.move(requestedFloor)
    return bestElevator
  }

  requestFloor(requestedFloor, elevator) {
    elevator.addFloorRequestButtonList(requestedFloor)
    elevator.checkList()
  }

  FindElevator(direction, requestedFloor) {


    var bestNearestElevatorGap = 10000000;
    var bestElevator;
    var bestCase = null;

    this.elevatorsList.forEach((elevator) => {

        if (requestedFloor == elevator.CurrentFloor && direction == elevator.direction) {
          if (bestCase == null || bestCase > 1) {
            console.log("1")
            console.log(elevator)
            bestCase = 1
            bestElevator = elevator
          }
        } else if (requestedFloor == elevator.CurrentFloor && elevator.direction == 'idle') {
          if (bestCase == null || bestCase > 2) {
            console.log("2")
            console.log(elevator)
            bestCase = 2
            bestElevator = elevator
          }
        } else if (requestedFloor > elevator.CurrentFloor && elevator.direction == "idle") {

          if (bestCase == null || bestCase > 3) {
            console.log("jsuisla")
            bestCase = 3
            console.log(bestCase)
            console.log(elevator)
            bestElevator = elevator

            // this.NearestElevator(requestedFloor)
          } else if (bestCase == 3) {
            var gap = Math.abs(elevator.CurrentFloor - requestedFloor)
            if (bestNearestElevatorGap >= gap) {
              bestElevator = elevator
              bestNearestElevatorGap = gap


            }
          }
        } else if (requestedFloor < elevator.CurrentFloor && elevator.direction == "idle") {

          if (bestCase == null || bestCase > 4) {
            console.log("4")
            console.log(elevator)
            bestCase = 4
            bestElevator = elevator
            // this.NearestElevator(requestedFloor)

          } else if (bestCase == 4) {
            var gap = Math.abs(elevator.CurrentFloor - requestedFloor);
            if (bestNearestElevatorGap >= gap) {
              bestElevator = elevator
              bestNearestElevatorGap = gap
            }
          }
        } else if (requestedFloor > elevator.CurrentFloor && elevator.direction == direction) {

          if (bestCase == null || bestCase > 5) {
            console.log("5")
            console.log(elevator)
            bestCase = 5
            bestElevator = elevator
            // this.NearestElevator(requestedFloor)
          } else if (bestCase == 5) {
            var gap = Math.abs(elevator.CurrentFloor - requestedFloor);
            if (bestNearestElevatorGap >= gap) {
              bestElevator = elevator
              bestNearestElevatorGap = gap
            }
          }
        } else if (requestedFloor < elevator.CurrentFloor && elevator.direction == direction) {

          if (bestCase == null || bestCase > 6) {
            console.log("6")
            console.log(elevator)
            bestCase = 6
            bestElevator = elevator
            // this.NearestElevator(requestedFloor)
          } else if (bestCase == 6) {
            var gap = Math.abs(elevator.CurrentFloor - requestedFloor);
            if (bestNearestElevatorGap >= gap) {
              bestElevator = elevator
              bestNearestElevatorGap = gap
            }
          }
        } else if (elevator.direction == "idle") {

          if (bestCase == null || bestCase > 7) {
            console.log("7")
            console.log(elevator)
            bestCase = 7
            bestElevator = elevator
            // this.NearestElevator(requestedFloor)
          } else if (bestCase == 7) {
            var gap = Math.abs(elevator.CurrentFloor - requestedFloor);
            if (bestNearestElevatorGap >= gap) {
              bestElevator = elevator
              bestNearestElevatorGap = gap
            }
          }


        }
      })
      console.log('la best elevator', bestElevator)
      return bestElevator
  }

}


//-------------- user calling elevator from his floor ----------------
class CallButton {
  constructor(direction, floor) {
    this.direction = direction;
    this.floor = floor;
    this.Light = "off";
  }
}

//-------------- user inside elevator----------------
class InsideButton {
  constructor(Floor) {
    this.Floor = Floor;
    this.Light = "off";
  }

}

//-------------- Elevator ----------------------------
class Elevator {
  constructor(id) {
    this.id = id
    this.direction = 'idle'
    this.CurrentFloor = 0
    this.Doors = "close"
    this.FloorRequestButtonList = []

  }

  checkList() {
    while (this.FloorRequestButtonList != 0) {

      this.move(this.FloorRequestButtonList[0])

      this.FloorRequestButtonList.pop([0])


    }

  }

  move(requestedFloor) {

    if (this.CurrentFloor < requestedFloor) {
      while (this.CurrentFloor < requestedFloor) {
        // console.log(this.CurrentFloor)
        this.CurrentFloor += 1;

        console.log('Elevator ' + String(this.id) + ' is at floor ' + String(this.CurrentFloor))
      }
    }

    if (this.CurrentFloor > requestedFloor) {
      while (this.CurrentFloor > requestedFloor) {
        this.CurrentFloor = this.CurrentFloor - 1;
        console.log('Elevator ' + String(this.id) + ' is at floor ' + String(this.CurrentFloor))

      }
    }
  }

  addFloorRequestButtonList(floor) {
    this.FloorRequestButtonList.push(floor)
  }


  // user request floor inside

}

// class column parameters --> (ID, NbElevator, NbFloor)
column1 = new Column(1, 2, 10)

// elevators(id, nbFloor, position, direction, FloorRequestButtonList)
column1.elevatorsList[0].CurrentFloor = 2
column1.elevatorsList[1].CurrentFloor = 7

console.log('Elevator!!!')
console.log(column1.elevatorsList[0])

// user outside
quelAscenseurTuMenvois = column1.requestElevator('down', 6)
console.log(quelAscenseurTuMenvois)