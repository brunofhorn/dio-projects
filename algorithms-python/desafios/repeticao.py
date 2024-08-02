# Solicitar uma string e um número inteiro entre 1 e 10 ao usuário. O programa deve retornar a string repetida o número de vezes especificado pelo usuário

# Solicita a frase ao usuário
frase = input("Insira uma frase: ")

# Solicita o número de repetições ao usuário
qtde = int(input("Escolha entre quantas vezes a frase irá se repetir (1 a 10): "))

# Verifica se o número de repetições está dentro do intervalo válido
if qtde >= 1 and qtde <= 10:
    for item in range(qtde): 
        print(frase)
else:
    print("Número inválido. Insira um número entre 1 e 10.")