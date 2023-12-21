# //Solution for 6 kyu Ranking System 
# //Link to Kata: https://www.codewars.com/kata/58e16de3a312d34d000000bd

def rankings(arr):
    sorted = arr.copy()
    sorted.sort()
    sorted.reverse()
    
    
    def locate(number): 
        return sorted.index(number) + 1
    
    result = map(locate, arr)
    return list(result)