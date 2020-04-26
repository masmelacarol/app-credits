// import PropTypes from 'prop-types';

const INITIAL_STATE = {
    value: 0,
    date: '',
    state: false,
    isPay: false,

};

export default (state = INITIAL_STATE, action) => {
    switch (action.payload) {
        default: return state;
    }
}

// INITIAL_STATE.PropTypes = {
//     value: PropTypes.number,
//     date: PropTypes.date,
//     state: PropTypes.bool,
//     isPay: PropTypes.bool,
// }