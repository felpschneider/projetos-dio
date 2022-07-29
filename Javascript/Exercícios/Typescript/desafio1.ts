// Desafio 1: Como podemos rodar isso em um arquivo .ts sem causar erros?

// let employee = {};
// employee.code = 10;
// employee.name = "John";

// Typescript infere o tipo:

let employee = {
    code: 10,
    name: 'Felipe'
}

employee.code = 10;
employee.name = "John";

// O tipo é declarado:

let employee2:{code: number, name: string} = {
    code: 10,
    name: 'Carlos'
}

employee2.code = 142;
employee2.name = 'Pedro'
