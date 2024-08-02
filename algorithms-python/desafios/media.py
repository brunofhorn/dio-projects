# Solicitar ao usuário três notas e calcular a média aritmética dessas notas, retornando o resultado final.

# Solicita as 3 notas ao usuário e verifica se estão entre 0 e 10
nota1 = float(input("Insira a primeira nota: "))
while not 0 <= nota1 <= 10:
    nota1 = float(input("Por favor, insira uma nota válida entre 0 e 10 para a primeira nota: "))

nota2 = float(input("Insira o segundo número: "))
while not 0 <= nota2 <= 10:
    nota2 = float(input("Por favor, insira uma nota válida entre 0 e 10 para a primeira nota: "))

nota3 = float(input("Insira o terceiro número: "))
while not 0 <= nota3 <= 10:
    nota3 = float(input("Por favor, insira uma nota válida entre 0 e 10 para a primeira nota: ")) 

# Calcula a média das 3 notas
media = (nota1+nota2+nota3)/3 

# Exibe se a pessoa foi aprovada ou reprovada, junto com a média. 
if media >= 5:
    print(f"Aprovado! A média é: {media:.2}")
else:
    print(f"Reprovado. A média é: {media:.2}")