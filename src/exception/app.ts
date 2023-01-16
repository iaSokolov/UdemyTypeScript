class CExceptionExample {
    constructor(private name: string) { }

    run(param: string): string {
        if (param == '') {
            throw Error('Param is emplty')
        } else {
            return `do run with ${param}`
        }
    }
}


try {
    const newException1 = new CExceptionExample('test')
    console.log(newException1.run('string'))

    const newException2 = new CExceptionExample('test')
    console.log(newException2.run(''))
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message)
    } else {
        console.log(error)
    }
}