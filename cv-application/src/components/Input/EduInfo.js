import React, {Component} from "react";

class EduInfo extends Component{
    constructor(props){
        super(props);
    }

    handleChange = (e) => {
        this.props.onEduInfoChange(e.target);
    }

    handleAdd = (e) => {
        this.props.onAddSection();
    }

    render(){
        return(
            <form>
                <div>Education</div>
                <label htmlFor="school">School Name: </label>
                <input id="school" name="school" type="text" value={this.props.school} onChange={this.handleChange}/>

                <label htmlFor="title">Title of Study: </label>
                <input id="title" name="title" type="text" value={this.props.title} onChange={this.handleChange}/>

                <label htmlFor="date">Date of Study: </label>
                <input id="date" name="date" value={this.props.date} onChange={this.handleChange}/>

                <button type="button" onClick={this.handleAdd}>Add</button>
            </form>
        );
    }
}

export default EduInfo;