# Rocket_Elevators_Controllers
Contains the algorithm files for the elevator controllers for the New Rocket Elevator Solutions for both Residential and Commercial offers

To see if it's working just enter numbers and strings insde the brackets and add an elevator in elevator
list and change NbElevator if you want to add elevators

// class column parameters --> (ID, NbElevator, NbFloor)
column1 = new Column(1, 1, 10)

// elevators (ID and elevator current floor)
column1.elevatorsList[0].CurrentFloor = 2

console.log('Elevator!!!')
console.log(column1.elevatorsList[0])

// user outside (direction and user current floor)
quelAscenseurTuMenvois = column1.requestElevator('up', 6)
console.log(quelAscenseurTuMenvois)
