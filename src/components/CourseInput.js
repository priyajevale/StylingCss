import React, { useState } from 'react';
import './CourseInput.css';

const CourseInput = (props) => {
    const[isValid,setIsValid] =useState(true);
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = (event) => {
    if(event.target.value.trim().length >0){
        setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if(enteredValue.trim().length ==0){
        setIsValid(false);
        return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' :''}`}>
        <label >Course Goal</label>
        <input type="text"
          id="courseGoal"
          name="courseGoal"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default CourseInput;