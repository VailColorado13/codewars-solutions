# //Solution for 7 kyu The 'spiraling' box 
# //Link to Kata: https://www.codewars.com/kata/63b84f54693cb10065687ae5

import math

def create_box(m, n): 
    spiral = []
    for i in range(0, n):
        row = []
        for j in range(0, m):
            print(i, j)
            minDistanceFromEdge = min(abs(-1 - i), abs(-1 - j), abs(n - i), abs(m - j))
            row.append(minDistanceFromEdge)
        spiral.append(row)
    return spiral