import {
    SET_INPUT_VALUE,
    ADD_CREDIT,
    GET_PENDDING_CREDITS,
    GET_CREDITS,
    GET_DENIES_CREDITS,
    GET_TOTAL_VALUE,
    UPDATE_AMOUNT,
    ERROR,
    LOADING,
} from '../types/creditTypes';
import { GET_ALL_USERS } from '../types/userTypes';

export const setInputCredits = event => (dispatch, getState) => {
    const { credits } = getState().creditReducer;

    const updateCredits = {
        ...credits,
        [event.target.name]: event.target.value,
        isPay: false,
    };
    dispatch({
        type: SET_INPUT_VALUE,
        payload: updateCredits,
    });
};

export const addCredit = (DNI, credit) => async(dispatch) => {
    try {
        const newCredit = {
            ...credit,
            DNI: DNI
        }
        const response = await fetch('http://localhost:3001/credits', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCredit)
        })

        const data = await response.json();
        console.log("addCredit -> data", data)

        if (data.body.state) {
            alert('Su credito fue aprobado');
            dispatch({
                type: UPDATE_AMOUNT,
                payload: data.body.value
            })
        } else {
            alert('Su credito no fue aprobado');
        }

        if (data.error !== "") {
            throw new Error(data.error)
        }
        dispatch({
            type: ADD_CREDIT,
        })




    } catch (error) {
        console.log("addCredit -> error", error)
        dispatch({
            type: ERROR,
            payload: 'No se pudo guardar el credito en el usuario, intente más tarde'
        })
    }
}

export const getAllPenndingCredits = (DNI) => async(dispatch) => {
    try {
        const response = await fetch(`http://localhost:3001/credits/pendding/user/${DNI}`);
        const data = await response.json();
        const credit = data.body;

        dispatch({
            type: GET_PENDDING_CREDITS,
            payload: credit
        })

    } catch (error) {
        console.log("addCredit -> error", error)
        dispatch({
            type: ERROR,
            payload: 'No se pudo obtener todos los creditos pendientes, intente más tarde'
        })
    }
};

export const getTotalCredits = () => async(dispatch) => {
    try {
        const response = await fetch('http://localhost:3001/credits/total');
        const data = await response.json();
        const total = data.body;

        dispatch({
            type: GET_TOTAL_VALUE,
            payload: total,
        })
    } catch (error) {
        console.log("addCredit -> error", error)
        dispatch({
            type: ERROR,
            payload: 'No se pudo obtener el total, intente más tarde'
        })
    }
}

export const getAllCredits = (DNI) => async(dispatch) => {
    try {
        const response = await fetch(`http://localhost:3001/credits/user/${DNI}`);
        const data = await response.json();

        dispatch({
            type: GET_CREDITS,
            payload: data.body
        })

    } catch (error) {
        console.log("addCredit -> error", error)
        dispatch({
            type: ERROR,
            payload: 'No se pudo obtener todos los creditos, intente más tarde'
        })
    }
}