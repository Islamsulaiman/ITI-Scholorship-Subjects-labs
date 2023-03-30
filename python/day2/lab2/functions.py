# # EX1
# # Write a Program that takes a list of 5 numbers
# # [3,6,4,0,8] then
# # a. Remove the last element in the list .
# # b. Add in the second place ‘R’.
# # c. Ask the user to input a specific number in the
# # list then delete it { by taking the list element not
# # index}.

def takeAList(myArr):
    myArr.pop()
    myArr.insert(1, "R")
    userInput = int(input("Please enter a number in the array to be replaced: "))
    myArr.remove(userInput)

    return myArr



# Ex2
# Create 2 dictionaries and append the two in one
# .{take into consideration unique keys }

def mergeTwoDicts(dict1, dict2):
    result = dict1 | dict2
    return result


# Ex3
# Write a Python program to read a file line by line
# and store it into a list.

def readLine(path): 
    fileCursor = open(path, "r")
    fileContent = fileCursor.readlines()        #list of file content

    return fileContent




def writeToAfile(dataList):
    fileCursor = open("dist.txt", "w")
    fileCOntent = fileCursor.writelines(dataList)
    fileCursor.close()

    return "File were created succesfully"