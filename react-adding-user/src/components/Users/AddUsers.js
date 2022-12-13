import { useState, useRef } from 'react';
import Button from '../UI/Button';
import ErroModal from '../UI/ErrorModal';
import Card from './../UI/Card';
import Wrapper from './../Helpers/Wrapper';

import classes from './AddUserrs.module.css';

const AddUsers = props => {
    const userNameRef = useRef();
    const userAgeRef = useRef();
    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (e) => {
        e.preventDefault();

        const enteredUserName = userNameRef.current.value;
        const enteredUserAge = userAgeRef.current.value;

        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                name: 'Invalid input data',
                message: "Please check and re-enter input data"
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                name: 'Invalid age input ',
                message: "Please enter age value more than 0"
            });
            return;
        }
        props.onAddUsers(enteredUserName, enteredUserAge);

        userNameRef.current.value = "";
        userAgeRef.current.value = "";
        // setEnteredAge('');
        // setEnteredUsername('');

    };

    // const enteredUsernameHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // };

    // const enteredAgeHandler = event => {
    //     setEnteredAge(event.target.value);
    // };

    const handleError = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && <ErroModal title={error.name} message={error.message} onConfirm={handleError}></ErroModal>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        // value={enteredUsername}
                        // onChange={enteredUsernameHandler}
                        ref={userNameRef}>
                    </input>
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        // value={enteredAge}
                        // onChange={enteredAgeHandler}
                        ref={userAgeRef}
                    >
                    </input>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUsers;