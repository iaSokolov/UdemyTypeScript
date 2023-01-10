console.log('*------------start------------*')
// использование generic в функциях 
function getStringFromGeneric<T>(value: T): string | undefined {
    if (Array.isArray(value)) {
        return value.toString();
    } else {
        switch (typeof value) {
            case 'bigint':
            case 'boolean':
            case 'number':
            case 'symbol':
                return value.toString();
            case 'object':
                return JSON.stringify(value);
            case 'string':
                return value;
        }
    }
}

// использование generic в типах 
type keyType = {
    value: string,
    version: number
}

type genType<T> = {
    begin: Date,
    end: Date,
    key: T
}

// инициализация типа 
const genValue: genType<keyType> = {
    begin: new Date(),
    end: new Date,
    key: {
        version: 1,
        value: 'st1'
    }
}

console.log(getStringFromGeneric(5))
console.log(getStringFromGeneric(genValue))
console.log('*------------end------------*')

// упражнение 
//Необходимо написать функцию сортировки любых
//объектов, которые имеют id по убыванию и по возрастанию

type sortenObject = {
    id: number
}

// пример сужения generic типа через extends
function sortGenValue<T extends Array<sortenObject>>(params: T, order: 'up' | 'down'): T {
    switch (order) {
        case "up":
            return params.sort((prev, curr) => prev.id - curr.id);
        case "down":
            return params.sort((prev, curr) => curr.id - prev.id);
    }
}

const dataFromSorting = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
];

console.log('Up:')
console.log(sortGenValue(dataFromSorting, 'up'))

console.log('Down:')
console.log(sortGenValue(dataFromSorting, 'down'))


// generic в классах 
class GenericResponseBase<T> {
    constructor(public data: T) {

    }
}

// в наследниках нельзя указывать generic типы! 
class GenericResponseChild extends GenericResponseBase<number> {

}

// mixins - способ создания нового класса (типа),
// который объединяет два разных класса. 
// Является заменой множественного наследования. 
type CMixin<T> = new (...params: any[]) => T

class Cm1 {
    constructor(public prop1: string) { }
}

class Cm2 {
    constructor(
        public prop1: string,
        public prop2: string) { }
}

type Cm1Type = CMixin<Cm1>
type Cm2Type = CMixin<Cm2>


function mixFunc<T extends Cm1Type & Cm2Type>(param: T) {
    return class Ext extends param {
        public prop3: string = ''
    }
}       

const newMixClass = mixFunc(Cm2)  
const newMixObject = new newMixClass('1', '2')
newMixObject.prop3 = 'value of prop3'
console.log(newMixObject.prop3); 