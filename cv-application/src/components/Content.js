import React, {Component} from "react";
import uniqid from "uniqid";
import GenInfo from "./Input/GenInfo";
import EduInfo from "./Input/EduInfo"
import ExpInfo from "./Input/ExpInfo";
import "../styles/content.css";

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

            company: '',
            position: '',
            dateFrom: '',
            dateTo: '',
            description: '',
            ExpInfo: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeEdit = this.handleChangeEdit.bind(this);
        this.deleteSection = this.deleteSection.bind(this);
        this.addEduSection = this.addEduSection.bind(this);
        this.addExpSection = this.addExpSection.bind(this);
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

            ExpInfo: this.state.ExpInfo.map((info) => {
                if (info.id === id){
                    info[e.target.name] = e.target.value;
                }
                return info;
            })
        });
    }

    deleteSection = (e) => {
        const id = e.target.parentNode.id;
        this.setState({
            EduInfo: this.state.EduInfo.filter((info) => {
                return info.id !== id;
            }),
            ExpInfo: this.state.ExpInfo.filter((info) => {
                return info.id !== id;
            }),
        });
    }
    
    addEduSection = () => {
        const currEduInfo={
            school: this.state.school,
            title: this.state.title,
            date: this.state.date,
            id: uniqid(),
        };

        this.setState({
            school: '',
            title: '',
            date: '',

            EduInfo: this.state.EduInfo.concat(currEduInfo),
        });
    }


    addExpSection = () => {
        const currExpInfo={
            company: this.state.company,
            position: this.state.position,
            dateFrom: this.state.dateFrom,
            dateTo: this.state.dateTo,
            description: this.state.description,
            id: uniqid(),
        };

        this.setState({
            company: '',
            position: '',
            dateFrom: '',
            dateTo: '',
            description: '',

            ExpInfo: this.state.ExpInfo.concat(currExpInfo),
        });
    }


    render(){
        return(
            <div className="content">
                <div className="leftSection">
                    <GenInfo 
                        onGenInfoChange={this.handleChange} 
                        name={this.state.name} 
                        email={this.state.email} 
                        phone={this.state.phone}/>
                    <EduInfo 
                        onEduInfoChange={this.handleChange}
                        onAddSection={this.addEduSection} 
                        school={this.state.school} 
                        title={this.state.title} 
                        date={this.state.date}/>

                    <ExpInfo
                        onExpInfoChange={this.handleChange}
                        onAddSection={this.addExpSection} 
                        company={this.state.company}
                        position={this.state.position}
                        dateFrom={this.state.dateFrom}
                        dateTo={this.state.dateTo}
                        description={this.state.description}/>

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

                    {this.state.ExpInfo.map((section) => {
                        return(
                            <form key={section.id} id={section.id}>
                                <label htmlFor="company">Company Name: </label>
                                <input id="company" name="company" type="text" value={section.company} onChange={this.handleChangeEdit}/>
                
                                <label htmlFor="position">Position Title: </label>
                                <input id="position" name="position" type="text" value={section.position} onChange={this.handleChangeEdit}/>
                
                                <label htmlFor="dateFrom">From: </label>
                                <input id="dateFrom" name="dateFrom" type="date" value={section.dateFrom} onChange={this.handleChangeEdit}/>
                
                                <label htmlFor="dateTo">To: </label>
                                <input id="dateTo" name="dateTo" type="date" value={section.dateTo} onChange={this.handleChangeEdit}/>
                
                                <label htmlFor="description">Description: </label>
                                <input id="description" name="description" type="text" value={section.description} onChange={this.handleChangeEdit}/>
                            
                                <button type="button" onClick={this.deleteSection}>Delete</button>
                            </form>
                        )
                    })}
                </div>

                <div className="rightSection">
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

                    {this.state.ExpInfo.map((section) => {
                        return(
                            <div key={section.id}>
                                <h2>{section.company}</h2>
                                <h3>{section.position}</h3>
                                <h4>{section.dateFrom}</h4>
                                <h4>{section.dateTo}</h4>
                                <p>{section.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Content;