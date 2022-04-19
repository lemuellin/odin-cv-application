import React from "react";
import "../../styles/inputComponent.css"

const EduInfo = (props) => {

    const handleChange = (e) => {
        props.onEduInfoChange(e.target);
    }

    const handleAdd = () => {
        props.onAddSection();
    }

    return(
        <form className="component">
            <div className="title">Education</div>
            <label htmlFor="school">School Name: </label>
            <input id="school" name="school" type="text" value={props.school} onChange={handleChange}/>

            <label htmlFor="title">Title of Study: </label>
            <input id="title" name="title" type="text" value={props.title} onChange={handleChange}/>

            <label htmlFor="date">Date of Study: </label>
            <input id="date" name="date" value={props.date} onChange={handleChange}/>

            <button type="button" onClick={handleAdd}>Add</button>
        </form>
    );
}

export default EduInfo;