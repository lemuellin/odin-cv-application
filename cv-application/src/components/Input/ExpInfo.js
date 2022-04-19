import React from "react";
import "../../styles/inputComponent.css"

const ExpInfo = (props) => {

    const handleChange = (e) => {
        props.onExpInfoChange(e.target);
    }

    const handleAdd = (e) => {
        props.onAddSection();
    }

    return(
        <form className="component">
            <div className="title">Experience</div>
            <label htmlFor="company">Company Name: </label>
            <input id="company" name="company" type="text" value={props.company} onChange={handleChange}/>

            <label htmlFor="position">Position Title: </label>
            <input id="position" name="position" type="text" value={props.position} onChange={handleChange}/>

            <label htmlFor="dateFrom">From: </label>
            <input id="dateFrom" name="dateFrom" type="date" value={props.dateFrom} onChange={handleChange}/>

            <label htmlFor="dateTo">To: </label>
            <input id="dateTo" name="dateTo" type="date" value={props.dateTo} onChange={handleChange}/>

            <label htmlFor="description">Description: </label>
            <input id="description" name="description" type="text" value={props.description} onChange={handleChange}/>
            
            <button type="button" onClick={handleAdd}>Add</button>
        </form>
    );
}

export default ExpInfo;