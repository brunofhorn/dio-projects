# Solicitar ao usuário dois números e inserir qual operação deseja. O programa realiza as seguintes operações matemáticas: soma, subtração, multiplicação e divisão. O programa deve retornar o resultado de cada operação quando solicitado. 

# Solitita o primeiro número 
num1 = int(input("Insira o primeiro número inteiro: "))

# Solitita o segundo número
num2 = int(input("Insira o segundo número inteiro: "))

# Selecionar a operação
op = input("Digite qual operação deseja realizar (+, -, *, /): ")

if op == "+":
    print("Soma: ", (num1+num2))
elif op == "-":
    print("Subtração: ", (num1-num2))
elif op == "*": 
    print("Multiplicação: ", (num1*num2))
elif op == "/":
    print("Divisão: ", (num1/num2))    
else:
    print("Operação inválida.")