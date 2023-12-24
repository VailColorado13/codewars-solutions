# //Solution for 6 kyu Countdown - Longest Word 
# //Link to Kata: https://www.codewars.com/kata/57a4c85de298a795210002da/python

def longest_word(letters):
    currentLength = 0 
    longWords = []
    
    def weCanSpellIt(availLetters, word):
        check = True
        for letter in word:
            if letter in availLetters:
                index = availLetters.index(letter)
                availLetters = availLetters[:index] + availLetters[index + 1:]
            elif letter not in availLetters:
                check = False
        
        return check 

    for word in words:
        if weCanSpellIt(letters, word):
            print('with the letters ' , letters, 'we can spell ', word)
            if len(word) == currentLength: longWords.append(word)
            elif len(word) > currentLength: 
                longWords = []
                currentLength = len(word)
                longWords.append(word)

                
    if len(longWords): return longWords
    else: return None