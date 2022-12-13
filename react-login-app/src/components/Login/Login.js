import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from './../Input/Input';

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  const authCtx = useContext(AuthContext);

  const emailRef = useRef();
  const passwordRef = useRef();

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);


  const [stateEmail, emailDispatch] = useReducer(emailReducer, { value: "", isValid: null });
  const [statePassword, passwordDispatch] = useReducer(passwordReducer, { value: "", isValid: null });


  useEffect(() => {
    console.log("USE EFFECT");

    return () => {
      console.log("USE EFFECT CLEANUP");
    };
  }, []);

  const { isValid: emailIsValid } = stateEmail;
  const { isValid: passwordIsValid } = statePassword;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Form validation");
      // setFormIsValid(stateEmail.isValid && statePassword.value.trim().length > 6);
    }, 500);
    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    emailDispatch({ type: "USER_INPUT", val: event.target.value });
    // setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes('@') && statePassword.isValid
    );
  };

  const validateEmailHandler = () => {
    emailDispatch({ type: "INPUT_BLUR" });
    // setEmailIsValid(stateEmail.isValid);
  };

  const passwordChangeHandler = (event) => {
    passwordDispatch({ type: "USER_INPUT", val: event.target.value });
    // setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && stateEmail.isValid
    );
  };

  const validatePasswordHandler = () => {
    passwordDispatch({ type: "INPUT_BLUR" });
    // setPasswordIsValid(statePassword.isValid);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(stateEmail.value, statePassword.value);
    } else if (!emailIsValid) {
      emailRef.current.focus();
    } else {
      passwordRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          isValid={emailIsValid}
          id="email"
          type="email"
          label="E-Mail"
          value={stateEmail.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}>
        </Input>
        <Input
          ref={passwordRef}
          isValid={passwordIsValid}
          type="password"
          id="password"
          label="Password"
          value={statePassword.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        ></Input>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
