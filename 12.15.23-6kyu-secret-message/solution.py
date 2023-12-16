# //Solution for 6 kyu Secret Message 
# //Link to Kata: https://www.codewars.com/kata/54808e45ab03a2c8330009fb/python

import re
def find_secret_message(paragraph):
    lst = paragraph.lower().split()
    lst = list(map(lambda s: s.translate(str.maketrans('', '', '?!,.:')), lst))

    ans = []

    for i in range(len(lst)):

        if lst.index(lst[i]) != i and lst[i] not in ans:
            ans.append(lst[i])
    
    return ' '.join(ans)