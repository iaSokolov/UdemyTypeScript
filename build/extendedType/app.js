"use strict";
// Объединение (Union)
let union1;
union1 = 1;
union1 = "string";
function funWithUnion(param) {
    if (typeof param == 'number') {
        console.log(param); // определяется как число
    }
    else {
        console.log(param.toLowerCase); // определяется как строка 
    }
}
// Literal Types 
function funWithLiteral(param) {
    switch (param) {
        case "a":
            return "A";
        case "b":
            return "B";
    }
}
let user = {
    name: "name 1",
    age: 35,
    id: 1
};
let oUser = {
    id: 1,
    name: 'user 1',
    age: 35,
    active: false,
    profile: "employe"
};
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
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus["Success"] = "success";
    ResponseStatus["Failed"] = "failed";
})(ResponseStatus || (ResponseStatus = {}));
let request = {
    sum: 10000,
    from: 2,
    to: 4
};
let responseSuccess = {
    status: ResponseStatus.Success,
    data: {
        databaseId: 567,
        sum: 10000,
        from: 2,
        to: 4
    }
};
let responseError = {
    status: ResponseStatus.Failed,
    data: {
        errorMessage: "Недостаточно средств",
        errorCode: 4
    }
};
// Type Guard 
function isResponseSuccess(res) {
    return res.status == ResponseStatus.Success;
}
function getDatabaseId(res) {
    if (isResponseSuccess(res)) {
        return res.data.databaseId;
    }
    else {
        throw Error(res.data.errorMessage);
    }
}
// Void - пустое значение, в функциях 
function getVoid() {
    console.log('void function');
}
// Unknown
let exampleUnknown = 1; // может быть любым типом
// let exampleString: string = exampleUnknown; - не можем так сделать 
//let exampleAny: any = exampleUnknown; - там можно сделать 
// Never 
function exampleNeverFunction() {
    while (true) {
    }
}
function exampleNeverFunctionWithCheck(type) {
    switch (type) {
        case 'typeOne':
            break;
        case 'typeTwo':
            break;
        default:
            // если в типе payType будет добавлен еще 
            // одно значение, то произойдет ошибка 
            // компиляции, пока мы не добавим дополнительную ветку
            const _ = type;
            break;
    }
}
// пример исчерпывающей проверки 
function check(x) {
    if (typeof x === 'string') {
        return true;
    }
    else if (typeof x === 'number') {
        return false;
    }
    throw new Error("message"); // тут будет Never - исчерпывающая проверка 
}
// Null - присвяивается, если объекта нет, т.е. это осознанный возврат, в то время как undefined является отсутсвием значения
function getRequets() {
    return null;
}
const nv = getRequets();
const v = nv === null || nv === void 0 ? void 0 : nv.from;
