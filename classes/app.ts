// пример перегрузки конструторов 
class ConstructorUser {
    name: string
    age: number

    // описание конструкторов
    constructor();
    constructor(name: string);
    constructor(age: number);
    constructor(name: string, age: number);

    // реализация конструктора должна 
    // описывать все возможные комбинации описания конструктора
    constructor(param1?: string | number, param2?: number) {
        if (!param1) {
            this.name = ''
            this.age = 0
        } else {
            if (typeof param1 === 'string') {
                this.name = param1
                if (param2) {
                    this.age = param2
                } else {
                    this.age = 0;
                }
            } else {
                this.name = ''
                this.age = param1
            }
        }
    }
}

let newUser1 = new ConstructorUser()
let newUser2 = new ConstructorUser('ilja')
let newUser3 = new ConstructorUser(33)
let newUser4 = new ConstructorUser('ilja', 33)

// перегрузка методов 
class MethodUser {
    name: string
    age: number
    skills: string[]

    constructor(name: string, age: number) {
        this.age = age;
        this.name = name;
        this.skills = [];
    }

    addSkills(param: string): void;
    addSkills(param: string[]): void;
    addSkills(param: string | string[]): void {
        if (Array.isArray(param)) {
            this.skills = this.skills.concat(param);
        } else {
            this.skills.push(param);
        }
    };
}

// перегрузка методов 
class GetSetUser {
    private _name: string

    public get name(): string {
        return this._name
    }


    public set name(v: string) {
        this._name = v;
    }

    constructor(name: string) {
        this._name = name;
    }
}

let getSetUser = new GetSetUser('a');
getSetUser.name = 'b';

// реализация интерфейсов 
interface IntfUser {
    firstName: string;
    lastName: string;
    getFullName(sep: string): string;
}

class ImplUser implements IntfUser {
    firstName: string = '';
    lastName: string = '';

    // имплементация может принимать и 
    // возвращать более широкий тип 
    getFullName(val: any): any {
        return `${this.firstName}${val}${this.lastName}`
    }
}

// Наследование
class BaseUser {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(sep: string): string {
        return `${this.firstName}${sep}${this.lastName}`
    }
}

class ExtUser extends BaseUser {
    role: number

    constructor(firstName: string, lastName: string, role: number) {
        super(firstName, lastName)
        this.role = role
    }

    // override лучше использовать, чтобы устранить ошибки при изменении базового класса 
    // перекрытые методы можно расширять, но так, чтобы можно было вызывать базовый 
    override getFullName(sep: string, prefix?: string): string {
        return `${prefix}${this.firstName}${sep}${this.lastName}`
    }
}

// Необходимо сделать корзину (Cart) на сайте,
// которая имееет список продуктов (Product), добавленных в корзину
// и переметры доставки (Delivery). Для Cart реализовать методы:
// - Добавить продукт в корзину
// - Удалить продукт из корзины по ID
// - Посчитать стоимость товаров в корзине
// - Задать доставку
// - Checkout - вернуть что всё ок, если есть продукты и параметры доставки
// Product: id, название и цена
// Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)

interface Delivery {
    datum: Date
}

class HomeDelivery implements Delivery {
    constructor(
        public addres: string,
        public datum: Date,
    ) {

    }
}

class StockDelivery implements Delivery {
    constructor(
        public id: number,
        public datum: Date = new Date()
    ) {

    }
}

class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number
    ) {

    }
}

class Cart {
    // список продуктов
    private products: Product[] = []

    // переметры доставки
    private delivery: Delivery | null = null

    // Добавить продукт в корзину
    addProduct(product: Product): void {
        this.products.push()
    }

    // Удалить продукт из корзины по ID
    deleteProduct(product: Product): void {
        this.products = this.products.filter(it => it.id != product.id)
    }

    // Посчитать стоимость товаров в корзине
    calcTotal = (): number => this.products
        .map(it => it.price)
        .reduce((prev, curr) => prev + curr)

    // вернуть что всё ок, если есть продукты и параметры доставки
    checkout = (): boolean => this.products.length > 0 && this.products != null
}

// статические свойства 
class ExampleStaticClass {
    static instance: ExampleStaticClass

    static getInstance(): ExampleStaticClass {
        return ExampleStaticClass.instance
    }

    // инициализация статического класса 
    static {
        ExampleStaticClass.instance = new ExampleStaticClass()
    }
}

// абстрактные классы 
abstract class Logger {
    abstract log(message: string): void;
    printDate(): void {
        this.log(new Date().toString()); 
    }
}

class DateLogger extends Logger {
    logWithDate(message: string) { 
        this.printDate()
        this.log(message); 
    }

    log(message: string): void {
        console.log(message); 
    } 
}