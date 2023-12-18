# //Solution for 7 kyu Excessively Abundant Numbers 
# //Link to Kata: https://www.codewars.com/kata/56a75b91688b49ad94000015

import math
def abundant_number(num):
    sum = 0
    for i in range(1, math.floor(num/2) + 1):
        if num % i == 0:
            sum = sum + i
    
    return sum > num

