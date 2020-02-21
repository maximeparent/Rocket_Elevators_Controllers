# -------------- ELEVATORS ----------------------------
class Elevator:
  def __init__(self, id):
    self.id = id
    self.direction = 'idle'
    self.CurrentFloor = 1
    self.Doors = "close"
    self.FloorRequestButtonList = []

  def checkList(self):
    while self.FloorRequestButtonList != 0:


      self.FloorRequestButtonList.pop([0])

  def move(self,requestedFloor):

    if self.CurrentFloor < requestedFloor:
      while self.CurrentFloor < requestedFloor:
        # print(self.CurrentFloor)
        self.CurrentFloor += 1

      # print('Elevator ' + String(self.id) + ' is at floor ' + String(self.CurrentFloor))

    if self.CurrentFloor > requestedFloor:
      while self.CurrentFloor > requestedFloor:
        self.CurrentFloor = self.CurrentFloor - 1

      # print('Elevator ', str(id) ,
      #       ' is at floor ', str(self.CurrentFloor))

  def addFloorRequestButtonList(self, floor):
    self.FloorRequestButtonList.append(floor)

# -------------- OUTSIDE BUTTON ----------------
class CallButton:
  def __init__(self, direction, floor):
    self.direction = direction
    self.floor = floor
    self.Light = "off"

# --------------INSIDE BUTTON----------------
class InsideButton:
  def __init__(self, Floor):
    self.Floor = Floor
    self.Light = "off"
# --------------COLUMN-----------------------
class Column:
  def __init__(self, ID, NbElevator, NbFloor):
    self.ID = ID
    self.NbElevator = NbElevator
    self.NbFloor = NbFloor
    self.elevatorsList = []
    self.CallButtonList = []
    self.buttonList = []

    # nombre elevator
    for i in range(NbElevator):
      elevator = Elevator(NbFloor)
      self.elevatorsList.append(elevator)

    #  bouton Up and Down for i in range(NbFloor):
    for i in range(NbFloor):
      if i != 1:
        callButton = CallButton("down", i)
        self.CallButtonList.append(callButton)

      if i != NbFloor:
        callButton = CallButton("up", i)
        self.CallButtonList.append(callButton)


  def requestElevator(self,direction, requestedFloor):
    bestElevator = FindElevator(direction, requestedFloor)

    bestElevator.move(requestedFloor)
    return bestElevator

  def requestFloor(self,requestedFloor, elevator):
    elevator.addFloorRequestButtonList(requestedFloor)
    elevator.checkList()
  

  def FindElevator(self,direction, requestedFloor):
    bestElevator = None
    bestCase = None
    print('find elevator')

    for elevator in self.elevatorsList:
      print('for each')

      if requestedFloor == elevator.position and direction == elevator.direction:
        print('bestCase ', bestCase)
        if bestCase == None or bestCase > 1:
          print("1")
          print(elevator)
          bestCase = 1
          bestElevator = elevator
        
        
      elif requestedFloor == elevator.position and elevator.direction == 'idle':
        print('bestCase ', bestCase)
        if (bestCase == None or bestCase > 2):
          print("2")
          print(elevator)
          bestCase = 2
          bestElevator = elevator
        
      elif (requestedFloor > elevator.position and elevator.direction == "idle"):

        print('bestCase ', bestCase)
        if bestCase == None or bestCase > 3:
          print("3")
          print(elevator)
          bestCase = 3
          bestElevator = elevator
          # self.NearestElevator(requestedFloor)
        
      elif (requestedFloor < elevator.position or elevator.direction == "idle"):
        print('bestCase ', bestCase)

        if (bestCase == None or bestCase > 4):
          print("4")
          print(elevator)
          bestCase = 4
          bestElevator = elevator
          # self.NearestElevator(requestedFloor)

      
      elif (requestedFloor > elevator.position or elevator.direction == direction):
        print('bestCase ', bestCase)

        if (bestCase == None or bestCase > 5):
          print("5")
          print(elevator)
          bestCase = 5
          bestElevator = elevator
          # self.NearestElevator(requestedFloor)
        
      elif (requestedFloor < elevator.position and elevator.direction == direction):
        print('bestCase ', bestCase)

        if (bestCase == None or bestCase > 6):
          print("6")
          print(elevator)
          bestCase = 6
          bestElevator = elevator
          # self.NearestElevator(requestedFloor)
      elif (elevator.direction == "idle"):
        print('bestCase ', bestCase)

        if (bestCase == None or bestCase > 7):
          print("7")
          print(elevator)
          bestCase = 7
          bestElevator = elevator
          # self.NearestElevator(requestedFloor)

    print('bestElevator ', bestElevator)
    return bestElevator

# column1 = new Column(1, 2, 10)
# # print(column1)

# CallButton1 = new CallButton("up", 6)
# print(CallButton1)

# column1.FindElevator(1, 5, 5)
# print(column1.FindElevator)

# elevator1 = new Elevator(1,5,10)
# print('FloorRequestButtonList', elevator1.FloorRequestButtonList)

# InsideButton1 = new InsideButton(8)
# print(InsideButton1)


# class column parameters --> (ID, NbElevator, NbFloor)
column1 = Column(1, 2, 10)

# elevators(id, nbFloor, position, direction, FloorRequestButtonList)
column1.elevatorsList[0].CurrentFloor == 1
column1.elevatorsList[1].CurrentFloor == 2

# user outside
quelAscenseurTuMenvois = column1.requestElevator('up', 5)

# user inside
# column1.requestFloor(10, quelAscenseurTuMenvois)
