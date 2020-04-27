import {
    SET_INPUT_VALUE,
    ADD_USER,
    GET_ALL_USERS,
    GET_USER_BY_ID,
    LOADING,
    ERROR,
} from '../types/userTypes';

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

export const addUser = (newUser) => async(dispatch) => {
    dispatch({
        type: LOADING
    })
    try {
        const response = await fetch("http://localhost:3001/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        const data = await response.json();

        console.log("addUser -> data", data)

        if (data.error !== "") {
            throw new Error(data.error)
        }
        dispatch({
            type: ADD_USER,
        })


    } catch (error) {
        console.log("addUser -> error", error)
        dispatch({
            type: ERROR,
            payload: 'No se pudo guardar el usuario, intente más tarde'
        })
    }
}

export const getAllUsers = () => async(dispatch) => {
    try {
        const response = await fetch('http://localhost:3001/users');
        const data = await response.json();

        if (data.error !== "") {
            throw new Error(data.error)
        }

        dispatch({
            type: GET_ALL_USERS,
            payload: data.body
        })

    } catch (error) {
        console.log("getAllUsers -> error", error)
        dispatch({
            type: ERROR,
            payload: error

        })

    }
}

export const getUserById = (DNI) => async(dispatch) => {
    try {
        const response = await fetch(`http://localhost:3001/credits/user/${DNI}`);
        const data = await response.json();
        console.log("getUserById -> data", data)

        if (data.error !== "") {
            throw new Error(data.error)
        }

        dispatch({
            type: GET_USER_BY_ID,
            payload: data.body
        })


        // if (data.body !== null) {
        // } else {

        // }

    } catch (error) {
        console.log("getUserById -> error", error)

    }
}