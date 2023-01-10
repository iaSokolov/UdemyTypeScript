// Объединение (Union)
let union1: number | string;

union1 = 1;
union1 = "string";

function funWithUnion(param: number | string) {
    if (typeof param == 'number') {
        console.log(param); // определяется как число
    } else {
        console.log(param.toLowerCase); // определяется как строка 
    }
}

// Literal Types - указываются только возможные значения для переменной   
function funWithLiteral(param: 'a' | 'b'): 'A' | 'B' | void {
    switch (param) {
        case "a":
            return "A";

        case "b":
            return "B";
    }
}

//funWithLiteral('c'); - недопустимо 

//Type Aliases 
type Employee = {
    name: string,
    age: number
}

type Role = {
    id: number
}

type User = Employee & Role; // пересечение типов 

let user: User = {
    name: "name 1",
    age: 35,
    id: 1
}

// Interface 
interface IEmployee {
    name: string,
    age: number
}

interface IRole {
    id: number
}

interface IUser extends IEmployee, IRole {
    active: boolean;
}

interface IUser { // интерфейсы могут дополняться дополнительно в отдельных файлах
    profile: string;
}

let oUser: IUser = {
    id: 1,
    name: 'user 1',
    age: 35,
    active: false,
    profile: "employe"
}

// пример 
/* Запрос в виде платежа */
// {
// 	"sum": 10000,
// 	"from": 2,
// 	"to": 4
// }
/* Ответ */
// {
// 	"status": "success",
// 	"data": {
// 		"databaseId": 567,
// 		"sum": 10000,
// 		"from": 2,
// 		"to": 4
// 	}
// }
// или 
// {
// 	"status": "failed",
// 	"data": {
// 		"errorMessage": "Недостаточно средств",
// 		"errorCode": 4
// 	}
// }

enum ResponseStatus {
    Success = "success",
    Failed = "failed"
}

interface IRequestData {
    sum: number,
    from: number,
    to: number
}

interface IRequest extends IRequestData {
}

interface IResponseSuccessData extends IRequestData {
    databaseId: number
}

interface IResponseSuccess {
    status: ResponseStatus.Success,
    data: IResponseSuccessData
}


interface IResponseFailedData {
    errorMessage: string,
    errorCode: number
}

interface IResponseFailed {
    status: ResponseStatus.Failed,
    data: IResponseFailedData
}

let request: IRequest = {
    sum: 10000,
    from: 2,
    to: 4
}

let responseSuccess: IResponseSuccess = {
    status: ResponseStatus.Success,
    data: {
        databaseId: 567,
        sum: 10000,
        from: 2,
        to: 4
    }
}

let responseError: IResponseFailed = {
    status: ResponseStatus.Failed,
    data: {
        errorMessage: "Недостаточно средств",
        errorCode: 4
    }
}

// Type Guard - функция, которая делает более удобным проверку переменной на тип. 
// Используется для сужения типа  
function isResponseSuccess(res: IResponseSuccess | IResponseFailed): res is IResponseSuccess {
    return res.status == ResponseStatus.Success;
}

function getDatabaseId(res: IResponseSuccess | IResponseFailed): number {
    if (isResponseSuccess(res)) {
        return res.data.databaseId;
    } else {
        throw Error(res.data.errorMessage);
    }
}

// Void - пустое значение, в функциях 
function getVoid(): void {
    console.log('void function')
}

// Unknown
let exampleUnknown: unknown = 1; // может быть любым типом
// let exampleString: string = exampleUnknown; - не можем так сделать 
//let exampleAny: any = exampleUnknown; - там можно сделать 

// Never - функция никогда не завершает своё исполнение или выкидывает исключение 
function exampleNeverFunction() {
    while (true) {

    }
}

// пример использования Never для проверки кода на этапе компиляции. 
// Никакой логики тут нет, просто для проверки что ничего не поломалось при компиляции.  
type payType = 'typeOne' | 'typeTwo'
function exampleNeverFunctionWithCheck(type: payType) {
    switch (type) {
        case 'typeOne':
            break;

        case 'typeTwo':

            break;

        default:
            // если в типе payType будет добавлен еще 
            // одно значение, то произойдет ошибка 
            // компиляции, пока мы не добавим дополнительную ветку
            const _: never = type; 
            break;
    }
}


// пример исчерпывающей проверки 
function check(x: string | number): boolean { 
    if (typeof x === 'string') { 
        return true; 
    } else if (typeof x === 'number') { 
        return false; 
    }
    throw new Error("message");  // тут будет Never - исчерпывающая проверка 
}

// Null - присвяивается, если объекта нет, т.е. это осознанный возврат, в то время как undefined является отсутсвием значения
function getRequetsNull(): IRequest | null { 
    return null; 
}

// пример обращения к свойству того объекта, которого может не быть. 
// Сделано для того, чтобы не ловить ошибки обращения к nv, в случае если это null
const nv = getRequetsNull(); 
const v = nv?.from; 

function getRequetsUndefined(): IRequest | undefined { 
    return undefined; 
}

const nv1 = getRequetsUndefined(); 
const v1 = nv1?.from; 