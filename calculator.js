function calculate(operandA, operator, operandB) {
    switch (operator) {
        case "*": return operandA * operandB;
        case "+": return operandA + operandB;
        case "-": return operandA - operandB;
        case "/": return operandA / operandB;
        default: console.log("This calculator does addition, subtraction, division, and multiplication only")
    }
}

export default calculate;