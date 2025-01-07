class Calculator {
    constructor(numOne, numTwo) {
        this.numOne = numOne;
        this.numTwo = numTwo;
    }
    add() {
        console.log(`${this.numOne} + ${this.numTwo}`);
    }

    subtract() {
        console.log(`${this.numOne} - ${this.numTwo}`);
    }

}