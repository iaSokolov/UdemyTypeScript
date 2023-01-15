// декоратор класса 
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

// декоратор метода
function Log() {
    return (
        target: Object,
        key: string | symbol,
        desc: TypedPropertyDescriptor<(...args: any[]) => any>
    ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
        let oldValue = desc.value; 
        desc.value = () => {
            try {
                console.log('перехват сообщения')
                
            } catch (error) {
                console.log('перехват сообщения')
            }
        }
    }
}


class DecoratorMethod {
    constructor(public name: String) { }

    /**
     * method
     */
    @Log()
    public method() {
        throw Error('ошибка');
    }
}

new DecoratorMethod("test").method()





