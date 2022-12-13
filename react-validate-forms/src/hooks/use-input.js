import { useReducer } from 'react';


const initialState = { value: "", isTouched: false };

const inputStateReducer = (prevState, action) => {
    if (action.type === "CHANGE") {
        return { value: action.value, isTouched: prevState.isTouched };
    }
    if (action.type === "BLUR") {
        return { value: prevState.value, isTouched: true };
    }
    if (action.type === "RESET") {
        return { value: "", isTouched: false };
    }

    return inputStateReducer;
};
const useInput = (validateValue) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialState);

    const inputIsValid = validateValue(inputState.value);
    const hasError = !inputIsValid && inputState.isTouched;

    const inputChangeHandler = (event) => {
        dispatch({ type: "CHANGE", value: event.target.value });
    };

    const inputBlurHandler = () => {
        dispatch({ type: "BLUR" });
    };

    const reset = () => {
        dispatch({ type: "RESET" });
    };

    return {
        value: inputState.value,
        inputIsValid,
        hasError,
        inputChangeHandler,
        inputBlurHandler,
        reset
    };
};
export default useInput;








































// import { useState } from 'react';


// const useInput = (validateValue) => {
//     const [enteredValue, setEnteredValue] = useState('');
//     const [isTouched, setIsTouched] = useState(false);

//     const inputIsValid = validateValue(enteredValue);
//     const hasError = !inputIsValid && isTouched;

//     const inputChangeHandler = event => {
//         setEnteredValue(event.target.value);
//     };

//     const inputBlurHandler = () => {
//         setIsTouched(true);
//     };

//     const reset = () => {
//         setEnteredValue("");
//         setIsTouched(false);
//     };

//     return {
//         value: enteredValue,
//         inputIsValid,
//         hasError,
//         inputChangeHandler,
//         inputBlurHandler,
//         reset
//     };
// };

// export default useInput;