// import { useState } from "react";
import useInput from './../hooks/use-input';

const BasicForm = (props) => {

  const nameValidation = value => value.trim() !== "";
  const emailValidation = value => value.includes('@');

  const { value: enteredFirstName,
    inputIsValid: firstNameIsValid,
    hasError: firstNameHasError,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInput(nameValidation);

  const {
    value: enteredLastName,
    inputIsValid: lastNameIsValid,
    hasError: lastNameHasError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput(nameValidation);

  const {
    value: enteredEmail,
    inputIsValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(emailValidation);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log('Form is submitted!');
    console.log(enteredFirstName, enteredLastName, enteredEmail);

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClasses = !firstNameHasError ? 'form-control' : 'form-control invalid';
  const lastNameClasses = !lastNameHasError ? 'form-control' : 'form-control invalid';
  const emailNameClasses = !emailHasError ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} value={enteredFirstName} />
          {firstNameHasError && <p className="error-text">Please enter first name</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={enteredLastName} />
          {lastNameHasError && <p className="error-text">Please enter last name</p>}
        </div>
      </div>
      <div className={emailNameClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='email' id='name' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail} />
        {emailHasError && <p className="error-text">Please enter email address</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
