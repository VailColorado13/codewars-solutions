#Solution for 5 kyu 1-800-CODE-WAR 
#Link to Kata: https://www.codewars.com/kata/5a3267b2ee1aaead3d000037

def check1800(s):
    answer = set()
    s = s.split('-')
#     separate three letter words from four letter words 
    four_letter_words = list(filter(lambda word: len(word) == 4, WORDS))
    three_letter_words = list(filter(lambda word: len(word) == 3, WORDS))

    letter_to_number = {
    'A': 2, 'B': 2, 'C': 2,
    'D': 3, 'E': 3, 'F': 3,
    'G': 4, 'H': 4, 'I': 4,
    'J': 5, 'K': 5, 'L': 5,
    'M': 6, 'N': 6, 'O': 6,
    'P': 7, 'Q': 7, 'R': 7, 'S': 7,
    'T': 8, 'U': 8, 'V': 8,
    'W': 9, 'X': 9, 'Y': 9, 'Z': 9
    }
    
#     isolate the combinations that we will check in the loops below 
    letters = f'{s[2]}{s[3]}' 
    digits = ''.join(list(map(lambda letter: str(letter_to_number[letter]), letters)))
    first_three = digits[:3]
    first_four =  digits[:4]
    last_three = digits[-3:]
    last_four = digits[-4:]
    
    
#   find all possible combinations of three letter words followed by four letter words 

    for three_letter_word in three_letter_words: 
        test_first_three = ''.join(list(map(lambda letter: str(letter_to_number[letter]), list(three_letter_word))))
        if first_three == test_first_three:
            for four_letter_word in four_letter_words: 
                test_last_four = ''.join(list(map(lambda letter: str(letter_to_number[letter]), list(four_letter_word))))
                if last_four == test_last_four:
                    answer.add(f'1-800-{three_letter_word}-{four_letter_word}')
                    
#    find all possible combinations of four letter words followed by three letter words 
   
    for four_letter_word in four_letter_words: 
        test_first_four = ''.join(list(map(lambda letter: str(letter_to_number[letter]), list(four_letter_word))))
        if first_four == test_first_four:
            for three_letter_word in three_letter_words: 
                test_last_three = ''.join(list(map(lambda letter: str(letter_to_number[letter]), list(three_letter_word))))
                if last_three == test_last_three:
                    answer.add(f'1-800-{four_letter_word}-{three_letter_word}')    
    
    return answer