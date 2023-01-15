function createdAt(target: Function) { 
    let date = new Date 
    console.log(`Object created at ${date.toString()}`)
}


@createdAt
class DecoratorClass{ 
    constructor(public name: String) { }
}

console.log(`name: ${new DecoratorClass("test").name}`); 