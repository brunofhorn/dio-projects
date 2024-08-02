# Solicitar ao usuário que insira uma palavra e verificar se ela é um palíndromo, ou seja, se pode ser lida da mesma forma de trás para frente. Retornar o resultado da verificação.

# Solicita a palavra, retira espaços em branco e converte para letras maísculas
palavra = input("Insira a palavra para verificação: ").strip().upper()

# Verifica se a palavra é igual à sua inversa
if palavra == palavra[::-1]:
    print("É um palíndromo!")
else:
    print("Não é um palíndromo.")