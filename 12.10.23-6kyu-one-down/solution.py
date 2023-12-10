#Solution for 6 kyu One down 
#Link to Kata: https://www.codewars.com/kata/56419475931903e9d1000087

def one_down(txt):
    if type(txt) is not str:
        return "Input is not a string"
    referenceUC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    referenceLC = 'abcdefghijklmnopqrstuvwxyz'
    result = ''
    for i in range(len(txt)):
        if referenceLC.find(txt[i]) == -1 and referenceUC.find(txt[i]) == -1:
            result = result + txt[i]
        elif txt[i].isupper(): 
            index = referenceUC.index(txt[i]) -1
            result = result + referenceUC[index]
        elif txt[i].islower(): 
            index = referenceLC.index(txt[i]) -1
            result = result + referenceLC[index]
            
    return result