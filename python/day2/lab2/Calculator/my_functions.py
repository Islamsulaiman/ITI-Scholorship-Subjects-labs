def sum(x,y):
    return x+y


def sub(x,y):
    checkValue(x,y, "sub")
    return x-y


def devide(x,y):
    checkValue(x,y, "devide")
    return x/y


def mult(x,y):
    checkValue(x,y, "mult")
    return x*y


def mainOprands():

    userInput= int(input("Please number from 0 to 3 for the oprand type: "))
    if userInput > 3 or userInput < 0:
        return "Please enter number within 0 to 3"

    if userInput == 0:
        print(sum(1, 2))
    elif userInput == 1:
        print(sub(5, 2))  #3
    elif userInput == 2:
        print(devide(6, 3))
    elif userInput == 3:
        print(mult(2, 3))


def checkValue(x,y, oprand):
    if x == 0 or y == 0:
        if oprand == "sub":
            raise ValueError("subtracting zero from Number")
        elif oprand == "devide":
            raise ValueError("Cant divide with zero")
        elif oprand == "mult":
            raise ValueError("Cant Multiply with Zero")

