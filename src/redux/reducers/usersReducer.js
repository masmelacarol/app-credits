import PropTypes from 'prop-types';
import {
    SET_INPUT_VALUE,
    ADD_USER,
    GET_ALL_USERS,
    GET_USER_BY_ID,
    LOADING,
    ERROR,
} from '../types/userTypes';

const INITIAL_STATE = {
    loading: false,
    isUser: false,
    dataUsers: '',
    dataByUser: '',
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
        case ADD_USER:
            return {...state, error: action.payload, loading: false, }
        case GET_ALL_USERS:
            return {...state, dataUsers: action.payload, error: null, loading: false }
        case GET_USER_BY_ID:
            return {...state, isUser: true, dataByUser: action.payload, error: null, loading: false }
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