import type { Language, Challenge } from "./types"

export const languages: Language[] = [
  {
    id: "python",
    name: "Python",
    sections: [
      {
        id: "getting-started",
        title: "Getting Started",
        description: "Basic Python setup and first steps",
        examples: [
          {
            title: "Hello World",
            code: `print("Hello, World!")`,
            description: 'The famous "Hello World" program in Python',
          },
          {
            title: "Running Python",
            code: `# Save as hello.py
python hello.py`,
            description: "How to run a Python script",
          },
          {
            title: "Interactive Mode",
            code: `>>> print("Hello")
Hello
>>> 2 + 3
5`,
            description: "Using Python interactive shell",
          },
        ],
      },
      {
        id: "variables-data-types",
        title: "Variables and Data Types",
        description: "Working with variables and different data types",
        examples: [
          {
            title: "Variables",
            code: `age = 18
name = "John"
height = 5.9
is_student = True`,
            description: "Python can't declare a variable without assignment",
          },
          {
            title: "Strings",
            code: `text = "Hello"
multiline = """This is a
multiline string"""
f_string = f"Hello {name}"`,
            description: "Different ways to create strings",
          },
          {
            title: "Numbers",
            code: `integer = 42
float_num = 3.14
complex_num = 1 + 2j`,
            description: "Numeric data types in Python",
          },
        ],
      },
      {
        id: "operators",
        title: "Operators and Arithmetic",
        description: "Mathematical and logical operations",
        examples: [
          {
            title: "Arithmetic",
            code: `a = 10
b = 3
print(a + b)  # 13
print(a - b)  # 7
print(a * b)  # 30
print(a / b)  # 3.333...
print(a // b) # 3 (floor division)
print(a % b)  # 1 (modulo)
print(a ** b) # 1000 (power)`,
            description: "Basic arithmetic operations",
          },
          {
            title: "Comparison",
            code: `x = 5
y = 10
print(x == y)  # False
print(x != y)  # True
print(x < y)   # True
print(x > y)   # False
print(x <= y)  # True
print(x >= y)  # False`,
            description: "Comparison operators",
          },
          {
            title: "Logical",
            code: `a = True
b = False
print(a and b)  # False
print(a or b)   # True
print(not a)    # False`,
            description: "Logical operators",
          },
        ],
      },
      {
        id: "conditionals",
        title: "Conditionals",
        description: "Control flow with if, elif, and else statements",
        examples: [
          {
            title: "If Statement",
            code: `age = 18
if age >= 18:
    print("You are an adult")`,
            description: "Basic if statement",
          },
          {
            title: "If-Else",
            code: `score = 85
if score >= 90:
    print("A grade")
elif score >= 80:
    print("B grade")
elif score >= 70:
    print("C grade")
else:
    print("Need improvement")`,
            description: "Multiple conditions with elif",
          },
          {
            title: "Ternary Operator",
            code: `age = 20
status = "adult" if age >= 18 else "minor"
print(status)`,
            description: "Conditional expression (ternary operator)",
          },
        ],
      },
      {
        id: "loops",
        title: "Loops and Iterations",
        description: "Repeating code with for and while loops",
        examples: [
          {
            title: "For Loop",
            code: `for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

for char in "hello":
    print(char)`,
            description: "Iterating with for loops",
          },
          {
            title: "While Loop",
            code: `count = 0
while count < 5:
    print(count)
    count += 1`,
            description: "Repeating with while loops",
          },
          {
            title: "Loop Control",
            code: `for i in range(10):
    if i == 3:
        continue  # Skip 3
    if i == 7:
        break     # Stop at 7
    print(i)`,
            description: "Using break and continue",
          },
        ],
      },
      {
        id: "functions",
        title: "Functions",
        description: "Creating reusable code blocks",
        examples: [
          {
            title: "Basic Function",
            code: `def greet(name):
    return f"Hello, {name}!"

message = greet("Alice")
print(message)`,
            description: "Defining and calling functions",
          },
          {
            title: "Default Parameters",
            code: `def power(base, exponent=2):
    return base ** exponent

print(power(3))     # 9
print(power(3, 3))  # 27`,
            description: "Functions with default parameter values",
          },
          {
            title: "Multiple Returns",
            code: `def get_name_age():
    return "John", 25

name, age = get_name_age()
print(f"{name} is {age} years old")`,
            description: "Returning multiple values",
          },
        ],
      },
      {
        id: "data-structures",
        title: "Lists, Dictionaries, Tuples, Sets",
        description: "Working with Python data structures",
        examples: [
          {
            title: "Lists",
            code: `fruits = ["apple", "banana", "orange"]
fruits.append("grape")
fruits.remove("banana")
print(fruits[0])  # apple
print(len(fruits))`,
            description: "Creating and manipulating lists",
          },
          {
            title: "Dictionaries",
            code: `person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}
print(person["name"])
person["age"] = 31`,
            description: "Key-value pairs with dictionaries",
          },
          {
            title: "Tuples",
            code: `coordinates = (10, 20)
x, y = coordinates
print(f"X: {x}, Y: {y}")

# Tuples are immutable
# coordinates[0] = 15  # Error!`,
            description: "Immutable sequences with tuples",
          },
        ],
      },
    ],
  },
  {
    id: "javascript",
    name: "JavaScript",
    sections: [
      {
        id: "getting-started",
        title: "Getting Started",
        description: "Basic JavaScript setup and first steps",
        examples: [
          {
            title: "Hello World",
            code: `console.log("Hello, World!");`,
            description: 'The famous "Hello World" program in JavaScript',
          },
          {
            title: "Variables",
            code: `let name = "John";
const age = 25;
var city = "New York";`,
            description: "Declaring variables with let, const, and var",
          },
          {
            title: "Functions",
            code: `function greet(name) {
    return \`Hello, \${name}!\`;
}

const greetArrow = (name) => \`Hello, \${name}!\`;`,
            description: "Function declarations and arrow functions",
          },
        ],
      },
    ],
  },
  {
    id: "typescript",
    name: "TypeScript",
    sections: [
      {
        id: "getting-started",
        title: "Getting Started",
        description: "Basic TypeScript setup and first steps",
        examples: [
          {
            title: "Type Annotations",
            code: `let name: string = "John";
let age: number = 25;
let isStudent: boolean = true;`,
            description: "Adding type annotations to variables",
          },
          {
            title: "Interfaces",
            code: `interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: "John",
    age: 25
};`,
            description: "Defining object shapes with interfaces",
          },
          {
            title: "Functions",
            code: `function add(a: number, b: number): number {
    return a + b;
}

const multiply = (a: number, b: number): number => a * b;`,
            description: "Typed function parameters and return values",
          },
        ],
      },
    ],
  },
]

const challenges: Record<string, Challenge[]> = {
  python: [
    {
      id: "py-hello",
      title: "Hello World",
      description: 'Escreva um programa que imprima "Hello, World!" na tela.',
      difficulty: "Easy",
      category: "Getting Started",
      starterCode: "# Escreva seu código aqui\n",
      expectedKeywords: ["print", "Hello, World!"],
      examples: ['print("Hello, World!")'],
    },
    {
      id: "py-variables",
      title: "Variáveis",
      description: 'Crie uma variável chamada "nome" com seu nome e imprima uma saudação.',
      difficulty: "Easy",
      category: "Variables",
      starterCode: "# Crie uma variável nome e imprima uma saudação\n",
      expectedKeywords: ["nome", "print"],
      examples: ['nome = "João"\nprint(f"Olá, {nome}!")'],
    },
    {
      id: "py-if-else",
      title: "Condicional",
      description: "Escreva um programa que verifica se um número é positivo, negativo ou zero.",
      difficulty: "Easy",
      category: "Conditionals",
      starterCode: "numero = 5\n# Escreva sua condição aqui\n",
      expectedKeywords: ["if", "elif", "else"],
      examples: [
        'if numero > 0:\n    print("Positivo")\nelif numero < 0:\n    print("Negativo")\nelse:\n    print("Zero")',
      ],
    },
    {
      id: "py-for-loop",
      title: "Loop For",
      description: "Use um loop for para imprimir os números de 1 a 5.",
      difficulty: "Easy",
      category: "Loops",
      starterCode: "# Use um loop for para imprimir números de 1 a 5\n",
      expectedKeywords: ["for", "range", "print"],
      examples: ["for i in range(1, 6):\n    print(i)"],
    },
    {
      id: "py-function",
      title: "Função Simples",
      description: "Crie uma função que recebe dois números e retorna a soma deles.",
      difficulty: "Medium",
      category: "Functions",
      starterCode: "# Defina uma função que soma dois números\n",
      expectedKeywords: ["def", "return"],
      examples: ["def somar(a, b):\n    return a + b"],
    },
    {
      id: "py-list",
      title: "Trabalhando com Listas",
      description: "Crie uma lista com 5 frutas e imprima cada uma usando um loop.",
      difficulty: "Medium",
      category: "Data Structures",
      starterCode: "# Crie uma lista de frutas e imprima cada uma\n",
      expectedKeywords: ["list", "for", "print"],
      examples: ['frutas = ["maçã", "banana", "laranja", "uva", "pêra"]\nfor fruta in frutas:\n    print(fruta)'],
    },
  ],
  javascript: [
    {
      id: "js-hello",
      title: "Hello World",
      description: 'Escreva um programa que exiba "Hello, World!" no console.',
      difficulty: "Easy",
      category: "Getting Started",
      starterCode: "// Escreva seu código aqui\n",
      expectedKeywords: ["console.log", "Hello, World!"],
      examples: ['console.log("Hello, World!");'],
    },
    {
      id: "js-variables",
      title: "Variáveis",
      description: "Declare uma variável com let, const e var e imprima seus valores.",
      difficulty: "Easy",
      category: "Variables",
      starterCode: "// Declare variáveis com let, const e var\n",
      expectedKeywords: ["let", "const", "var"],
      examples: ['let nome = "João";\nconst idade = 25;\nvar cidade = "São Paulo";'],
    },
    {
      id: "js-function",
      title: "Função",
      description: "Crie uma função que recebe um nome e retorna uma saudação.",
      difficulty: "Medium",
      category: "Functions",
      starterCode: "// Crie uma função de saudação\n",
      expectedKeywords: ["function", "return"],
      examples: ["function saudar(nome) {\n    return `Olá, ${nome}!`;\n}"],
    },
  ],
  typescript: [
    {
      id: "ts-types",
      title: "Tipos Básicos",
      description: "Declare variáveis com tipos string, number e boolean.",
      difficulty: "Easy",
      category: "Types",
      starterCode: "// Declare variáveis com tipos\n",
      expectedKeywords: ["string", "number", "boolean"],
      examples: ['let nome: string = "João";\nlet idade: number = 25;\nlet ativo: boolean = true;'],
    },
    {
      id: "ts-interface",
      title: "Interface",
      description: "Crie uma interface para representar uma pessoa com nome e idade.",
      difficulty: "Medium",
      category: "Interfaces",
      starterCode: "// Crie uma interface Person\n",
      expectedKeywords: ["interface", "Person"],
      examples: ["interface Person {\n    nome: string;\n    idade: number;\n}"],
    },
  ],
}

export function getChallengesForLanguage(languageId: string): Challenge[] {
  return challenges[languageId] || []
}
