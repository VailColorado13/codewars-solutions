# Solution for 7 kyu Average Scores 
# Link to Kata: https://www.codewars.com/kata/57b68bc7b69bfc8209000307/solutions/python

import functools 

def average(scores):
    average = functools.reduce(lambda a, b: a+b, scores) / len(scores)
    return round(average, 0)