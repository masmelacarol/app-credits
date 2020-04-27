import {
    SET_INPUT_VALUE,
    ADD_CREDIT,
    GET_ALL_CREDITS,
    GET_DENIES_CREDITS,
    GET_PENDDING_CREDITS
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
        console.log("addCredit -> data", data)
        console.log("addCredit -> data", data)
        console.log("addCredit -> data", data)


        if (data.error !== "") {
            console.log("addCredit -> data", data)
            throw new Error(data.error)
            console.log("addCredit -> data", data)
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

export const getAllCreditByUser = (DNI) => async(dispatch) => {
    try {
        const response = await fetch(`http://localhost:3001/credits/pendding/user/${DNI}`);
        const data = await response.json();
        const credit = data.body;
        console.log("getAllCreditByUser -> credit", credit)

        dispatch({
            type: GET_ALL_CREDITS,
            payload: credit
        })

    } catch (error) {

    }

}