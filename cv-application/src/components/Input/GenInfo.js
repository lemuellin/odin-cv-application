import React from "react";
import "../../styles/inputComponent.css"

const GenInfo = (props) => {

    const handleChange = (e) => {
        props.onGenInfoChange(e.target);
    }

    return(
        <form className="component">
            <div className="title">General Information</div>
            <label htmlFor="nameInput">Enter Name: </label>
            <input id="nameInput" name="name" type="text" value={props.name} onChange={handleChange}/>

            <label htmlFor="emailInput">Enter E-Mail: </label>
            <input id="emailInput" name="email" type="email" value={props.email} onChange={handleChange}/>

            <label htmlFor="phoneInput">Enter Phone Number: </label>
            <input id="phoneInput" name="phone" type="number" value={props.phone} onChange={handleChange}/>
        </form>
    );
}

export default GenInfo;