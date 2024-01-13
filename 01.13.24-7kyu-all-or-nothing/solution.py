# //Solution for 7 kyu All or Nothing 
# //Link to Kata: https://www.codewars.com/kata/65112af7056ad6004b5672f8

def possibly_perfect(key, answers):
    num_correct = 0
    num_incorrect = 0 
    num_blank = 0 
    
    
    for i in range(len(key)):
        if key[i] == '_':
            num_blank += 1
        elif key[i] != answers[i]:
            num_incorrect += 1
        elif key[i] == answers[i]:
            num_correct += 1

    
    if num_incorrect + num_blank == len(key) or  num_correct + num_blank == len(key):
        return True
    
    else: return False