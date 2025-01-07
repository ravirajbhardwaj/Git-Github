const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

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

readline.question('Enter first number: ', numOne => {
    readline.question('Enter second number: ', numTwo => {
        const calculator = new Calculator(parseFloat(numOne), parseFloat(numTwo));
        
        readline.question('Choose operation ( + - * /): ', operation => {
            switch (operation) {
                case '+':
                    calculator.add();
                    break;
                case '-':
                    calculator.subtract();
                    break;
                case '*':
                    calculator.multiply();
                    break;
                case '/':
                    calculator.divide();
                    break;
                default:
                    console.log('Invalid operation');
            }
            readline.close();
        });
    });
    });