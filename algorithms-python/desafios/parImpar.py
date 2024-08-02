# Solicitar ao usuário que insira um número e verificar se o número é par ou ímpar, retornando o resultado da verificação.

# Solicita um número inteiro ao usuário
numero = int(input("Insira um número inteiro: "))

# Verifica se o número é par ou ímpar
if numero % 2 == 0:
    print(numero, "é um número par.")
else:
    print(numero, "é um número ímpar.")