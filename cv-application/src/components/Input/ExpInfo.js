import React, {Component} from "react";
import "../../styles/inputComponent.css"

class ExpInfo extends Component{
    constructor(props){
        super(props);
    }

    handleChange = (e) => {
        this.props.onExpInfoChange(e.target);
    }

    handleAdd = (e) => {
        this.props.onAddSection();
    }

    render(){
        return(
            <form className="component">
                <div className="title">Experience</div>
                <label htmlFor="company">Company Name: </label>
                <input id="company" name="company" type="text" value={this.props.company} onChange={this.handleChange}/>

                <label htmlFor="position">Position Title: </label>
                <input id="position" name="position" type="text" value={this.props.position} onChange={this.handleChange}/>

                <label htmlFor="dateFrom">From: </label>
                <input id="dateFrom" name="dateFrom" type="date" value={this.props.dateFrom} onChange={this.handleChange}/>

                <label htmlFor="dateTo">To: </label>
                <input id="dateTo" name="dateTo" type="date" value={this.props.dateTo} onChange={this.handleChange}/>

                <label htmlFor="description">Description: </label>
                <input id="description" name="description" type="text" value={this.props.description} onChange={this.handleChange}/>
            
                <button type="button" onClick={this.handleAdd}>Add</button>
            </form>
        );
    }

}

export default ExpInfo;