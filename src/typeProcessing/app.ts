// пример keyof 

// Необходимо написать функцию группировки, которая принимает массив объектов
// и его ключ, производит группировку по указанному ключу и возращает
// сгруппированный объект.
// Пример:
// ``` js
// [
// 	{ group: 1, name: 'a' },
// 	{ group: 1, name: 'b' },
// 	{ group: 2, name: 'c' },
// ];
// ```

// При группироке по 'group' ---->

// ``` js
// {
// 	'1': [ { group: 1, name: 'a' }, { group: 1, name: 'b' } ],
// 	'2': [ { group: 2, name: 'c' } ]
// }
// ```

let arrFromGroup = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
]

interface IGroup<T> {
    [key: string]: T[]
}

function funGroup<T>(arr: T[], key: keyof T): IGroup<T> {
    let ret: IGroup<T> = {}

    arr.forEach(element => {
        const keyValue = String(element[key])

        if (!ret[keyValue]) {
            ret[keyValue] = []
        }
        ret[keyValue].push(element);
    });

    return ret;
}

console.log(funGroup(arrFromGroup, 'group'));

// type mapping 
interface IForm {
    name: string,
    password: string
}

type ValidationForm<Type> = {
    [Property in keyof Type]: { isValid: true } | { isValid: false, errorMessage?: string };
};

let sampleIForm: IForm = {
    name: 'name1',
    password: 'pass1'
}

let sampleValidationForm: ValidationForm<IForm> = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: 'string error' }
}