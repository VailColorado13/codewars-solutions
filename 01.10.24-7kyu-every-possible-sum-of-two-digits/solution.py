# //Solution for 7 kyu Every possible sum of two digits 
# //Link to Kata: https://www.codewars.com/kata/5b4e474305f04bea11000148

def digits(num):
    #convert the number to a list of digits
    digits = []
    string = str(num)
    for digit in range(len(string)):
        digits.append(int(string[digit]))
    
    #find all the sums
    ans = []
    for i in range(len(digits)):
        for j in range(i+1, len(digits)):
            ans.append(digits[i] + digits[j])
    
    return ans