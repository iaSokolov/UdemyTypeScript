interface ISimpleObjectToCT {
    name: string
    age: number
    user?: string
}

// Все поля становятся необязательными 
type partialISimpleObjectToCT = Partial<ISimpleObjectToCT>
let vPartialISimpleObjectToCT = {}

// Все поля становятся обязательными 
type requiredISimpleObjectToCT = Required<ISimpleObjectToCT>
let vRequiredISimpleObjectToCT: requiredISimpleObjectToCT

// Все поля недоступны для редактирования 
type readonlyISimpleObjectToCT = Readonly<ISimpleObjectToCT>
let vReadonlyISimpleObjectToCT: readonlyISimpleObjectToCT 

// Удаляет свойство из объекта 
type omitISimpleObjectToCT = Omit<ISimpleObjectToCT, "name"> 
let vOmitISimpleObjectToCT: omitISimpleObjectToCT

// Оставляет свойства из объекта 
type pickISimpleObjectToCT = Pick<ISimpleObjectToCT, "name" | "user"> 
let vPickISimpleObjectToCT: pickISimpleObjectToCT

// Из перечисленных типов исключает указанный во втором параметре
type excludeISimpleObjectToCT = Exclude<ISimpleObjectToCT | string | number, ISimpleObjectToCT | number> // оставит только string
let vExcludeISimpleObjectToCT: excludeISimpleObjectToCT

// Из перечисленных типов исключает указанный во втором параметре
type exctractISimpleObjectToCT = Extract<ISimpleObjectToCT | string | number, string | number>  // извлечет number и string
let vExctractISimpleObjectToCT: exctractISimpleObjectToCT