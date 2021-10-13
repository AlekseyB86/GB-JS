'use strict';

/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.
*/

/**
 * Функция выполняет выражение с переданными параметрами.
 * @param {number} num1
 * @param {number} num2
 * @param {string} operation "+", "-", "/", "*"
 * @throws {Error} если передан не верный оператор
 * @returns {number}
 */
function resultMathOperation(num1, num2, operation) {
    switch (operation) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "/":
            return num1 / num2;
        case "*":
            return num1 * num2;
        default:
            throw new Error(`Операция не возможна, не верный оператор : ${operation}`);
    }
}

console.log(resultMathOperation(1, 2, '+'));
console.log(resultMathOperation(1, 2, '-'));
console.log(resultMathOperation(4, 2, '/'));
console.log(resultMathOperation(3, 2, '*'));
console.log(resultMathOperation(3, 2, 'asdfv'));
