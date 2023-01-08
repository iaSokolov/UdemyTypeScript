// числовой тип 
let number_var: number = 100_000;
console.log(`Number value \"${number_var}\"`);

// строковый тип 
let string_var: string = "string";
console.log(`String value \"${string_var}\"`);

// логический тип данных 
let bool_var: boolean = false;
console.log(`Boolean value \"${bool_var}\"`);

// объекты 
let obj: {
    officeId: number,
    isOpened: boolean,
    contacts: {
        phone: string,
        email: string,
        address: {
            city: string
        }
    }
} = {
    officeId: 45,
    isOpened: false,
    contacts: {
        phone: "+79100000000",
        email: "my@email.ru",
        address: {
            city: "Москва"
        }
    }
}

// массивы 
const arr1: readonly string[] = ["строка 1", "string 2"];
const arr2: string[][] = [["строка 1-1", "строка 1-2"], ["строка 2-1", "строка 2-2"]];

// картежи (Tuples)
const tuples1: [string | number] = ["строка 1"];
const tuples2: [string, number] = ["строка 1", 123];
const tuples3: [string, number, ...boolean[]] = ["строка 1", 123, true, false];

// Перечисления (Enum)
enum Status {
    DRAFT = "draft",
    PUBLISHED = "published",
    DELETED = "deleted"
}

// пример типизации функции 

/* Запрос */
// {
// 	"topicId": 5,
// 	"status": "published" // "draft", "deleted" - опциональный параметр
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

async function getFaqs(req: { topicId: number, status?: Status }): Promise<{ question: string, answer: string, tags: string[], likes: number, status: Status }[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });

    const data = await res.json();

    return data;
}

// index signatures
class CIndexSignatures { 
    [key: string]: number; 
} 

let exampleIndexSignatures = new CIndexSignatures(); 
exampleIndexSignatures.asdasd = 4; 
exampleIndexSignatures.c44 = 4; 
exampleIndexSignatures['44'] = 5;

// keyof typeof конструкция
let exampleKeyOfTypeOf = {
    name: 'Ilya', 
    age: 33
}

type keysSet = keyof typeof exampleKeyOfTypeOf