import React from 'react';
import './CourseGoalItem.css'
const CourseGoalItem = (props) =>{
    const DeleteHandler = () =>{
        props.onDelete(props.id)
    };

    return (
<li className ="goal-item"> {props.children}</li>



    );
};
export default CourseGoalItem;