import React, {Component} from "react";

class GenInfo extends Component{
    constructor(props){
        super(props);   
    }

    handleChange = (e) => {
        this.props.onGenInfoChange(e.target);
    }

    render(){
        return(
            <form>
                <div>General Information</div>
                <label htmlFor="nameInput">Enter Name: </label>
                <input id="nameInput" name="name" type="text" value={this.props.name} onChange={this.handleChange}/>

                <label htmlFor="emailInput">Enter E-Mail: </label>
                <input id="emailInput" name="email" type="text" value={this.props.email} onChange={this.handleChange}/>

                <label htmlFor="phoneInput">Enter Phone Number: </label>
                <input id="phoneInput" name="phone" type="text" value={this.props.phone} onChange={this.handleChange}/>
            </form>
        );
    }
}

export default GenInfo;