import React, {Component} from "react";

class ExpInfo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <form>
                <div>Experience</div>
                <label>Company Name: </label>
                <input></input>

                <label>Position Title: </label>
                <input></input>

                <label>From: </label>
                <input></input>

                <label>To: </label>
                <input></input>

                <label>Description: </label>
                <input></input>
            </form>
        );
    }

}

export default ExpInfo;