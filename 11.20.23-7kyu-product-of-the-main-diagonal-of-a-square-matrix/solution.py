# Solution for 7 kyu Product of the main diagonal of a square matrix. 
# Link to Kata: https://www.codewars.com/kata/551204b7509063d9ba000b45

def main_diagonal_product(mat):
    product = mat[0][0]
    for i in range(1,len(mat)):
        product = mat[i][i] * product
    
    return product