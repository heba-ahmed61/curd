import React from 'react';
import './AddCourse.css';

const AddCourse = (props) =>{

    return(
        <div className="course-form">
            <form onSubmit={props.addCourse}>
                <input type="text" placeholder="Enter Course" onChange={props.enterCourse} value={props.current.courseName}>

                </input>
                <button className="add-button">Add</button>
            </form>
        </div>
    
    )
}

export default AddCourse;

