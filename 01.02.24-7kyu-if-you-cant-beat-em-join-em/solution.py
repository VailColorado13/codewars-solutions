# //Solution for 7 kyu If you can't beat 'em, join 'em! 
# //Link to Kata: https://www.codewars.com/kata/5d37899a3b34c6002df273ee

def cant_beat_so_join(numbers):
    answer = []
    #sort the sublists by their total sum, preserving the order of the sublist elements 
    def reduce(lst):
        sum = 0 
        for ele in lst: 
            sum = sum + ele
        return sum
    
    numbers.sort(reverse=True, key= reduce)
    
    #collapse into 1-dimensional list and return 
    
    for lst in numbers:
        for number in lst:
            answer.append(number)
            
    return answer