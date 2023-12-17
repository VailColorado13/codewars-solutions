# //Solution for 6 kyu Drunk friend 
# //Link to Kata: https://www.codewars.com/kata/558ffec0f0584f24250000a0/python

def decode(string):
    if not isinstance(string, str): return "Input is not a string"
    
    alphaLC = 'abcdefghijklmnopqrstuvwxyz'
    mirrorLC = alphaLC[::-1]
    
    alphaUC = alphaLC.upper()
    mirrorUC = alphaUC[::-1]
    
    ans = ''
    for i in range (len(string)):
        if string[i] in alphaLC and string[i] == string[i].lower():
            ans = ans + mirrorLC[alphaLC.index(string[i])]
            print('check', i)
        elif string[i] in alphaUC and string[i] == string[i].upper():
            ans = ans + mirrorUC[alphaUC.index(string[i])]
            print('index ', i, ' is uppercase' )
            
        else: 
            ans = ans + string[i]

            
    return ans