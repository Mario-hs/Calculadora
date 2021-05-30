import { GET_NUMBER, GET_OPERATOR, CLEAR, CALC } from '../../actions'

let initialState = {
    number: '',
    operator: '',
    result: []
}

export default function Calc(state = initialState, action) {
    console.log(action.type);
    console.log(initialState.result);
    switch (action.type) {
        case GET_NUMBER:
            initialState.number = action.number;
            initialState.result.push(action.number);
            return {
                ...state,
                number: action.number,
                result: [...state.result, action.number]
            };

        case GET_OPERATOR:
            initialState.operator = action.operator;
            initialState.result.push(action.operator);
            return {
                ...state,
                operator: action.operator,
                result: [...state.result, action.operator]
            };


        case CLEAR:
            initialState.number = '';
            initialState.operator = '';
            initialState.result = [];

            return Object.assign({}, state, {
                number: '',
                result: [],
                perator: '',
            })
        case CALC:
            return null
        default:
            return state;
    }
}