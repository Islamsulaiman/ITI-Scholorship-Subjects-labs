import math


# # Ex1
# # Write a program that counts up the number of
# # vowels [a, e, i, o, u] contained in the string.

# def count_vowels(string):
#     vowels = "aeiou"
#     count = 0
#     for char in string:
#         if char in vowels:
#             count += 1
#     return count

# string = "Hello, World!"
# print(count_vowels(string))



# # Ex2
# # Write a function that accepts two arguments (length,
# # start) to generate an array of a specific length filled
# # with integer numbers increased by one from start.

# def returnRange(length, start):     #list comprehension
#      return [i+start for i in range(length)]

# print(returnRange(5,5))


# # Ex3
# # Fill an array of 5 elements from the user, Sort it in
# # descending and ascending orders then display the
# # output .

# def sortArray():
#     noOfNumbers = int(input("Enter the no of inputs: "))
#     array=[]

#     for nums in range(noOfNumbers):
#         currentNumber = input(f"Enter element number {i+1}: ")
#         array.append(currentNumber)
    
#     print("Sorted ascending: ")
#     array.sort()
#     print(array)
#     print("-------------")
#     print("sorted descending: ")
#     array.sort(reverse=True)
#     print(array)

# sortArray()



# # Ex4
# # Write a function that takes a number as an
# # argument and if the number divisible by 3 return
# # "Fizz" and if it is divisible by 5 return "buzz" and if is
# # is divisible by both return "FizzBuzz"

# def fezBuzz():
#     number = int(input("Please enter a number: "))
#     result =""
#     if number % 3 == 0 :
#         result += "Fizz"
#     if number % 5 == 0:
#         result += "Buzz"
#     return result

# print(fezBuzz())


# # Ex5
# # Write a function which has an input of a string from
# # user then it will return the same string reversed.

# def reverseString() :
#     myString = input("Please enter your string: ")
#     return myString[::-1]

# print(reverseString())


# # Ex6
# # Write a Python function that checks whether a
# # passed string is palindrome or not.Note: A
# # palindrome is a word, phrase, or sequence that
# # reads the same backward as forward, e.g., madam
# # or nurses run {ignoring the spaces }.


# def palindrome():
#     myString = input("Please enter a wrod to check if palindrome: ")
#     newString = myString.replace(" ", "")

#     totalLoops = math.floor( len(newString)/2)    #round doun the number
#     result = f"{newString} is palindrome"
    
#     for loop in range(totalLoops):
#         if newString[loop] != newString[len(newString)-1-loop]:
#             result = f"{newString} is not palindrome"
#             break
#     return result

# print(palindrome())


# # Ex7
# # Write a function that takes a string and prints the
# # longest alphabetical ordered substring occured. Forexample, if the string is 'abdulrahman' then the
# # output is: Longest substring in alphabetical order is:
# # abdu

# def longest_alphabetical_substring(s):
#     # Initialize variables to keep track of the longest substring
#     max_length = 0
#     max_start = 0
#     max_end = 0

#     # Initialize variables to keep track of the current substring
#     current_length = 1
#     current_start = 0

#     # Iterate over the characters in the string
#     for i in range(1, len(s)):
#         # If the current character is greater than or equal to the previous character
#         if s[i] >= s[i-1]:
#             # Increase the length of the current substring
#             current_length += 1
#         else:
#             # If the current substring is longer than the longest substring
#             if current_length > max_length:
#                 # Update the longest substring
#                 max_length = current_length
#                 max_start = current_start
#                 max_end = i

#             # Reset the current substring
#             current_length = 1
#             current_start = i

#     # Check if the last substring is longer than the longest substring
#     if current_length > max_length:
#         max_start = current_start
#         max_end = len(s)

#     # Print the longest alphabetical ordered substring
#     print(s[max_start:max_end])

# # Example usage
# longest_alphabetical_substring("abcdbcdaabcdefg")
