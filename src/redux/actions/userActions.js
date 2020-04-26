import {
    SET_INPUT_VALUE,
    SET_INPUT,
    // LOADING,
    // ERROR,
} from '../types';

export const setInputValue = event => (dispatch, getState) => {

    const { users } = getState().usersReducer;

    const updateState = {
        ...users,
        [event.target.name]: event.target.value
    };
    dispatch({
        type: SET_INPUT_VALUE,
        payload: updateState,
    });
};

export const setInput = event => (dispatch, getState) => {

    const { users } = getState().usersReducer;

    const setInput = {
        ...users,
        [event.target.name]: event.target.value
    };
    dispatch({
        type: SET_INPUT,
        payload: setInput,
    });
};