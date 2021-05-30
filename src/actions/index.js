export const GET_NUMBER = "GET_FIRTS_NUMBER";
export const GET_OPERATOR = "GET_OPERATOR";
export const CALCULAR = "CALCULAR";
export const CLEAR = "CLEAR";
export const CALC = "CALC";

export function getNumbers(value) {
    return {
        type: GET_NUMBER,
        number: value
    }
}

export function getOperator(value) {
    return {
        type: GET_OPERATOR,
        operator: value
    }
}

export function calculate() {
    return {
        type: CALC,
    }
}

export function clear() {
    return {
        type: CLEAR
    }
}