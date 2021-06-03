import { GET_NUMBER, GET_OPERATOR, CLEAR, CALC } from '../../actions'

let initialState = {
    number: '',
    operator: '',
    values: [],
}

export default function Calc(state = initialState, action) {
    switch (action.type) {
        // Armazena os numeros para serem realizado a conta mais tarde
        case GET_NUMBER:
            initialState.number = action.number;
            initialState.values.push(action.number);
            return {
                ...state,
                number: action.number,
                values: [...state.values, action.number]
            };

        // Armazena os operadores para mais tarde poder fazer as contas
        case GET_OPERATOR:
            initialState.operator = action.operator;
            initialState.values.push(action.operator);
            return {
                ...state,
                operator: action.operator,
                values: [...state.values, action.operator]
            };

        // Limpa os dados para o usuário 
        case CLEAR:
            initialState.number = '';
            initialState.operator = '';
            initialState.values = [];

            return Object.assign({}, state, {
                number: '',
                values: [],
                perator: '',
            })

        // Retorna os valores tudo vazio para recomeçar tudo do zero e retornar o resultsado da conta
        case CALC:
            initialState.number = '';
            initialState.operator = '';
            initialState.values = [];
            return Object.assign({}, state, {
                number: '',
                values: [],
                perator: '',
            })

        default:
            return state;
    }
}