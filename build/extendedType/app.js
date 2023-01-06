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
