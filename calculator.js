function calculate(operandA, operator, operandB) {
    if (operator === "*") {
        return operandA * operandB;
    }

    if (operator === "+") {
        return operandA + operandB;
    }

    if (operator === "-") {
        return operandA - operandB;
    }

    if (operator === "/") {
        return operandA / operandB;
    }
}

export default calculate;