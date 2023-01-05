"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// числовой тип 
let number_var = 100000;
console.log(`Number value \"${number_var}\"`);
// строковый тип 
let string_var = "string";
console.log(`String value \"${string_var}\"`);
// логический тип данных 
let bool_var = false;
console.log(`Boolean value \"${bool_var}\"`);
// объекты 
let obj = {
    officeId: 45,
    isOpened: false,
    contacts: {
        phone: "+79100000000",
        email: "my@email.ru",
        address: {
            city: "Москва"
        }
    }
};
// массивы 
const arr1 = ["строка 1", "string 2"];
const arr2 = [["строка 1-1", "строка 1-2"], ["строка 2-1", "строка 2-2"]];
// картежи (Tuples)
const tuples1 = ["строка 1"];
const tuples2 = ["строка 1", 123];
const tuples3 = ["строка 1", 123, true, false];
// Перечисления (Enum)
var Status;
(function (Status) {
    Status["DRAFT"] = "draft";
    Status["PUBLISHED"] = "published";
    Status["DELETED"] = "deleted";
})(Status || (Status = {}));
// пример типизации функции 
/* Запрос */
// {
// 	"topicId": 5,
// 	"status": "published" // "draft", "deleted"
// }
/* Ответ */
// [
// 	{
// 		"question": "Как осуществляется доставка?",
// 		"answer": "быстро!",
// 		"tags": [
// 			"popular",
// 			"new"
// 		],
// 		"likes": 3,
// 		"status": "published"
// 	}
// ]
function getFaqs(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('/faqs', {
            method: 'POST',
            body: JSON.stringify(req)
        });
        const data = yield res.json();
        return data;
    });
}
