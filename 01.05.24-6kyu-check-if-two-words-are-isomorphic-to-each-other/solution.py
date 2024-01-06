# //Solution for 6 kyu Check if two words are isomorphic to each other 
# //Link to Kata: https://www.codewars.com/kata/59dbab4d7997cb350000007f


def isomorph(a, b):
    if len(a) != len(b): return False
    pairs = {}
    already_used = {}
    
    for letter in range(len(a)):
        if a[letter] not in pairs and b[letter] not in already_used:
            pairs[a[letter]] = b[letter]
            already_used[b[letter]] = a[letter]
        elif b[letter] in already_used: 
            if already_used[b[letter]] != a[letter]: return False   
        elif a[letter] in pairs: 
            if b[letter] != pairs[a[letter]]: return False
    
    return True