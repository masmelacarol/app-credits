import PropTypes from 'prop-types';

import {
    SET_INPUT_VALUE,
    ADD_CREDIT,
    GET_PENDDING_CREDITS,
    GET_TOTAL_VALUE,
    GET_DENIES_CREDITS,
    GET_CREDITS,
    UPDATE_AMOUNT,
    ERROR,
    LOADING,
} from '../types/creditTypes';

const INITIAL_STATE = {
    loading: true,
    error: null,
    creditsPending: '',
    allCredits: '',
    creditsDenies: '',
    amount: '',
    credits: {
        value: 0,
        date: '',
        isPay: false,
    }
};

INITIAL_STATE.PropTypes = {
    credits: PropTypes.object,
    creditsPending: PropTypes.object,
    creditsDenies: PropTypes.object,
    value: PropTypes.number,
    date: PropTypes.date,
    state: PropTypes.bool,
    isPay: PropTypes.bool,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_INPUT_VALUE:
            return {...state, credits: action.payload, loading: false, error: null }
        case ADD_CREDIT:
            return {...state, error: action.payload, loading: false }
        case GET_PENDDING_CREDITS:
            return {...state, creditsPending: action.payload, error: null, loading: false }
        case GET_TOTAL_VALUE:
            return {...state, amount: action.payload, error: null, loading: false }
        case GET_CREDITS:
            return {...state, allCredits: action.payload, error: null, loading: false }
        case UPDATE_AMOUNT:
            return {...state, amount: action.payload, error: null, loading: false }
        case LOADING:
            return {...state, loading: true, error: null }
        case ERROR:
            return {...state, error: action.payload, loading: false }
        default:
            return state;
    }
}