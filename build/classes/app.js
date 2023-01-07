"use strict";
// пример перегрузки конструторов 
class ConstructorUser {
    // реализация конструктора должна 
    // описывать все возможные комбинации описания конструктора
    constructor(param1, param2) {
        if (!param1) {
            this.name = '';
            this.age = 0;
        }
        else {
            if (typeof param1 === 'string') {
                this.name = param1;
                if (param2) {
                    this.age = param2;
                }
                else {
                    this.age = 0;
                }
            }
            else {
                this.name = '';
                this.age = param1;
            }
        }
    }
}
let newUser1 = new ConstructorUser();
let newUser2 = new ConstructorUser('ilja');
let newUser3 = new ConstructorUser(33);
let newUser4 = new ConstructorUser('ilja', 33);
// перегрузка методов 
class MethodUser {
    constructor(name, age) {
        this.age = age;
        this.name = name;
        this.skills = [];
    }
    addSkills(param) {
        if (Array.isArray(param)) {
            this.skills = this.skills.concat(param);
        }
        else {
            this.skills.push(param);
        }
    }
    ;
}
// перегрузка методов 
class GetSetUser {
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
    constructor(name) {
        this._name = name;
    }
}
let getSetUser = new GetSetUser('a');
getSetUser.name = 'b';
class ImplUser {
    constructor() {
        this.firstName = '';
        this.lastName = '';
    }
    // имплементация может принимать и 
    // возвращать более широкий тип 
    getFullName(val) {
        return `${this.firstName}${val}${this.lastName}`;
    }
}
// Наследование
class BaseUser {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(sep) {
        return `${this.firstName}${sep}${this.lastName}`;
    }
}
class ExtUser extends BaseUser {
    constructor(firstName, lastName, role) {
        super(firstName, lastName);
        this.role = role;
    }
    // override лучше использовать, чтобы устранить ошибки при изменении базового класса 
    // перекрытые методы можно расширять, но так, чтобы можно было вызывать базовый 
    getFullName(sep, prefix) {
        return `${prefix}${this.firstName}${sep}${this.lastName}`;
    }
}
class HomeDelivery {
    constructor(addres, datum) {
        this.addres = addres;
        this.datum = datum;
    }
}
class StockDelivery {
    constructor(id, datum = new Date()) {
        this.id = id;
        this.datum = datum;
    }
}
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Cart {
    constructor() {
        // список продуктов
        this.products = [];
        // переметры доставки
        this.delivery = null;
        // Посчитать стоимость товаров в корзине
        this.calcTotal = () => this.products
            .map(it => it.price)
            .reduce((prev, curr) => prev + curr);
        // вернуть что всё ок, если есть продукты и параметры доставки
        this.checkout = () => this.products.length > 0 && this.products != null;
    }
    // Добавить продукт в корзину
    addProduct(product) {
        this.products.push();
    }
    // Удалить продукт из корзины по ID
    deleteProduct(product) {
        this.products = this.products.filter(it => it.id != product.id);
    }
}
