import useInput from './../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    inputIsValid: nameInputIsValid,
    hasError: nameInputHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== "");

  const {
    value: enteredEmail,
    inputIsValid: emailInputIsValid,
    hasError: emailInputHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.trim() !== '' && value.includes('@'));

  let formIsValid = false;

  if (nameInputIsValid && emailInputIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandle = (event) => {
    event.preventDefault();

    console.log(enteredName);

    //nameInputRef.current.value = ""; shouldn't do and interract direct from the DOM
    resetNameInput();
    resetEmailInput();
  };

  const inputNameClasses = !nameInputHasError ? "form-control" : "form-control invalid";
  const inputEmailClasses = !emailInputHasError ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandle}>
      <div className={inputNameClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName} />
        {nameInputHasError && <p className='error-text'>Input can't be empty</p>}
      </div>
      <div className={inputEmailClasses}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail} />
        {emailInputHasError && <p className='error-text'>Please enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
