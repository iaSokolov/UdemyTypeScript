function CreatedAt<T extends { new(...args: any[]): {} }>(constructor: T) {

    return class extends constructor {
        public createdAt = new Date()
    }
}

@CreatedAt
class DecoratorClass {
    constructor(public name: String) { }
}

console.log(new DecoratorClass("test"));