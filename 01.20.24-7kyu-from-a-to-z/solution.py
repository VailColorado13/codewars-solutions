#Solution for 7 kyu From A to Z 
#Link to Kata: https://www.codewars.com/kata/6512b3775bf8500baea77663/python

def gimme_the_letters(sp):
    ans = ''
    for i in range(ord(sp[0]), ord(sp[2]) +1):
        ans += chr(i)
    
    return ans
    