import PropTypes from 'prop-types';

import {
    SET_INPUT_VALUE,
    ADD_CREDIT,
    GET_ALL_CREDITS,
    GET_TOTAL_VALUE,
    GET_DENIES_CREDITS,
    GET_PENDDING_CREDITS
} from '../types/creditTypes';

const INITIAL_STATE = {
    loading: true,
    error: null,
    allCreditsUser: '',
    creditsDenies: '',
    creditsPedding: '',
    amount: '',
    credits: {
        value: 0,
        date: '',
        isPay: false,
    }
};

INITIAL_STATE.PropTypes = {
    credits: PropTypes.object,
    allCreditsUser: PropTypes.object,
    creditsDenies: PropTypes.object,
    value: PropTypes.number,
    date: PropTypes.date,
    state: PropTypes.bool,
    isPay: PropTypes.bool,
}

export default (state = INITIAL_STATE, action) => {
    console.log("action", action)
    switch (action.type) {
        case SET_INPUT_VALUE:
            return {...state, credits: action.payload, loading: false, error: null }
        case ADD_CREDIT:
            return {...state, error: action.payload, loading: false }
        case GET_ALL_CREDITS:
            return {...state, allCreditsUser: action.payload, error: null, loading: false }
        case GET_TOTAL_VALUE:
            return {...state, amount: action.payload, error: null, loading: false }
        default:
            return state;
    }
}