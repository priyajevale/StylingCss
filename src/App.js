import React, { useState } from 'react';
import CourseInput from './components/CourseInput';
import CourseGoalList from './components/CourseGoalList';
import './App.css';

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercise!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' },
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => [
      { text: enteredText, id: Math.random().toString() },
      ...prevGoals,
    ]);
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== goalId));
  };

  let content = (
    <p style={{ textAlign: 'center' }}>no goal found. Maybe add one</p>
  );
  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
}

export default App;