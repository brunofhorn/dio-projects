# O usuário deverá inserir dois valores, e o programa irá concatená-los, retornando uma única string como resultado.

# Solicita a primeira informação ao usuário
info1 = input("Insira a primeira informação: ").strip() 

# Solicita a segunda informação ao usuário
info2 = input("Insira a segunda informação: ").strip()

# Verifica se as duas informações foram preenchidas 
if info1 and info2:
    # Concatenas as duas informações e retorna ao usuário
    infoConcat = info1 + " " + info2
    print(infoConcat)
else:
    print("As duas informações precisam estar preenchidas.")