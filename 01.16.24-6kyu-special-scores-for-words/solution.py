# //Solution for 6 kyu Special Scores For Words 
# //Link to Kata: https://www.codewars.com/kata/563c9f8073ccb1464d0000ae/python

def find_word(num_let, max_ssw):
        filtered_word_list = list(filter(lambda word: len(word) == num_let, WORD_LIST))
        correct_ssw = []
        under_ssw = []
        current_max = [0,0]
        
        def create_tuple(word, max_ssw):
            sum = 0
            for letter in word: 
                sum += ord(letter)
            
            if sum <= max_ssw: return [sum, word]
            else: return 0
                   
        for word in filtered_word_list:
            tuple = create_tuple(word, max_ssw)
            if tuple == 0: continue
            if tuple[0] == max_ssw: correct_ssw.append(tuple)
            else: 
                if tuple[0] >= current_max[0]: current_max = tuple
                
        print(correct_ssw)
        print(under_ssw)
        if len(correct_ssw) == 0 and current_max[1] == 0: return None
        elif len(correct_ssw) > 0: return correct_ssw[-1][1]
        else: return current_max[1]