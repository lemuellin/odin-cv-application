import React, {Component} from "react";
import "../../styles/inputComponent.css"

class GenInfo extends Component{
    constructor(props){
        super(props);   
    }

    handleChange = (e) => {
        this.props.onGenInfoChange(e.target);
    }

    render(){
        return(
            <form className="component">
                <div className="title">General Information</div>
                <label htmlFor="nameInput">Enter Name: </label>
                <input id="nameInput" name="name" type="text" value={this.props.name} onChange={this.handleChange}/>

                <label htmlFor="emailInput">Enter E-Mail: </label>
                <input id="emailInput" name="email" type="email" value={this.props.email} onChange={this.handleChange}/>

                <label htmlFor="phoneInput">Enter Phone Number: </label>
                <input id="phoneInput" name="phone" type="number" value={this.props.phone} onChange={this.handleChange}/>
            </form>
        );
    }
}

export default GenInfo;