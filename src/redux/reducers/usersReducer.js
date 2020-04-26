import PropTypes from 'prop-types';
import {
    SET_INPUT_VALUE,
    SET_INPUT,
    LOADING,
    ERROR,
} from '../types';

const INITIAL_STATE = {
    loading: false,
    users: {
        name: '',
        email: '',
        DNI: ''
    },
    error: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_INPUT_VALUE:
            return {...state, users: action.payload, loading: true, error: null }
        case SET_INPUT:
            return {...state, users: 'jj', error: null }
        case LOADING:
            return {...state, loading: true, error: null }
        case ERROR:
            return {...state, error: action.payload, loading: false }
        default:
            return state;
    }
}

INITIAL_STATE.PropTypes = {
    users: {
        name: PropTypes.string,
        email: PropTypes.string,
        DNI: PropTypes.number
    }
}