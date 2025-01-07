class Calculator {
    constructor(numOne, numTwo) {
        this.numOne = numOne;
        this.numTwo = numTwo;
    }
    add() {
        console.log(`${this.numOne} + ${this.numTwo} =`, this.numOne + this.numTwo);
    }

    subtract() {
        console.log(`${this.numOne} - ${this.numTwo} =`, this.numOne - this.numTwo);
    }

    multiply() {
        console.log(`${this.numOne} * ${this.numTwo} =`, this.numOne * this.numTwo);
    }

    divide() {
        if (this.numTwo !== 0) {
            console.log(`${this.numOne} / ${this.numTwo} =`, this.numOne / this.numTwo);
        } else {
            console.log('Error: Division by zero');
        }
    }
}
