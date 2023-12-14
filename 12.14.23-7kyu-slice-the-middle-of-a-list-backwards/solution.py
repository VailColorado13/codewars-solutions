# //Solution for 7 kyu Slice the middle of a list backwards 
# //Link to Kata: https://www.codewars.com/kata/5a043724ffe75fbab000009f

import math

def reverse_middle(lst):
    if len(lst) == 1: return lst
    if len(lst) < 4: return []
    
    to_remove = math.floor(len(lst) /2) -1
    
    for i in range(to_remove):
        lst.pop()
        lst.pop(0)

    lst.reverse()
    return lst