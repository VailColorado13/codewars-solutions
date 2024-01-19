#Solution for 7 kyu How many e-mails we sent today? 
#Link to Kata: https://www.codewars.com/kata/58a369fa5b3daf464200006c/solutions/python

import math

def get_percentage(sent, limit = 1000):
    if sent is 0:
        return 'No e-mails sent'
    if sent >= limit: 
        return "Daily limit is reached"
    else: 
        return f"{math.floor((sent / limit)*100)}%"