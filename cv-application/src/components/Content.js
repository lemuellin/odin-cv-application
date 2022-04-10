import React, {Component} from "react";
import uniqid from "uniqid";
import GenInfo from "./Input/GenInfo";
import EduInfo from "./Input/EduInfo"

class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',    
            
            school: '',
            title: '',
            date: '',
            
            EduInfo: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeEdit = this.handleChangeEdit.bind(this);
        this.deleteSection = this.deleteSection.bind(this);
        this.addSection = this.addSection.bind(this);
    }

    handleChange = (input) => {
        this.setState({
            [input.name]: input.value,
        });
    }

    handleChangeEdit = (e) => {
        const id = e.target.parentNode.id;
        this.setState({
            EduInfo: this.state.EduInfo.map((info) => {
                if (info.id === id){
                    info[e.target.name] = e.target.value;
                }
                return info;
            }),
        });
    }

    deleteSection = (e) => {
        const id = e.target.parentNode.id;
        this.setState({
            EduInfo: this.state.EduInfo.filter((info) => {
                return info.id !== id;
            }),
        });
    }
    
    addSection = () => {
        const currInfo={
            school: this.state.school,
            title: this.state.title,
            date: this.state.date,
            id: uniqid(),
        };

        this.setState({
            school: '',
            title: '',
            date: '',

            EduInfo: this.state.EduInfo.concat(currInfo),
        });
    }

    render(){
        return(
            <div>
                <GenInfo 
                    onGenInfoChange={this.handleChange} 
                    name={this.state.name} 
                    email={this.state.email} 
                    phone={this.state.phone}/>
                <EduInfo 
                    onEduInfoChange={this.handleChange}
                    onAddSection={this.addSection} 
                    school={this.state.school} 
                    title={this.state.title} 
                    date={this.state.date}/>

                {this.state.EduInfo.map((section) => {
                    return(
                        <form key={section.id} id={section.id}>
                            <label htmlFor="school">School Name: </label>
                            <input id="school" name="school" type="text" value={section.school} onChange={this.handleChangeEdit}/>
            
                            <label htmlFor="title">Title of Study: </label>
                            <input id="title" name="title" type="text" value={section.title} onChange={this.handleChangeEdit}/>
            
                            <label htmlFor="date">Date of Study: </label>
                            <input id="date" name="date" value={section.date} onChange={this.handleChangeEdit}/>
            
                            <button type="button" onClick={this.deleteSection}>Delete</button>
                        </form>
                    )
                })}



                <h1>{this.state.name}</h1>
                <h3>{this.state.email}</h3>
                <h3>{this.state.phone}</h3>

                {this.state.EduInfo.map((section) => {
                    return(
                        <div key={section.id}>
                            <h2>{section.school}</h2>
                            <h3>{section.title}</h3>
                            <h3>{section.date}</h3>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Content;