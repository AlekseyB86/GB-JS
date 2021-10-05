'use strict';

/*
Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами.
Т.е. например, функция для сложения должна принимать два числа, складывать их и возвращать результат.
Обязательно использовать оператор return.
*/

/**
 * Функция складывает переданные параметры.
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function add(num1, num2) {
    return num1 + num2;
}

/**
 * Функция вычитает из параметры num1 параметр num2.
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function diff(num1, num2) {
    return num1 - num2;
}

/**
 * Функция производит деление параметра num1 параметр num2.
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function div(num1, num2){
    return num1 / num2;
} 

/**
 * Функция перемножает переданные параметры.
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function mult(num1, num2) {
    return num1 / num2;
}
