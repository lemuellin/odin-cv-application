import React, { useState } from "react";
import uniqid from "uniqid";
import GenInfo from "./Input/GenInfo";
import EduInfo from "./Input/EduInfo"
import ExpInfo from "./Input/ExpInfo";
import "../styles/content.css";

const Content = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [school, setSchool] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [EduInfoArr, setEduInfoArr] = useState([]);

    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [description, setDescription] = useState('');
    const [ExpInfoArr, setExpInfoArr] = useState([]);

    const handleChange = (input) => {
        // let func = "set" + input.name.charAt(0).toUpperCase() + input.name.slice(1);
        switch (input.name){
            case "name":
                setName(input.value);
                break;
            case "email":
                setEmail(input.value);
                break;
            case "phone":
                setPhone(input.value);
                break;
            case "school":
                setSchool(input.value);
                break;
            case "title":
                setTitle(input.value);
                break;
            case "date":
                setDate(input.value);
                break;
            case "company":
                setCompany(input.value);
                break;
            case "position":
                setPosition(input.value);
                break;
            case "dateFrom":
                setDateFrom(input.value);
                break;
            case "dateTo":
                setDateTo(input.value);
                break;
            case "description":
                setDescription(input.value);
                break;
            default:
                console.log('input might be wrong');
        }
    }

    const handleChangeEdit = (e) => {
        const id = e.target.parentNode.id;
        setEduInfoArr(
            EduInfoArr.map((info) => {
                if(info.id === id){
                    info[e.target.name] = e.target.value;
                }
                return info;
            })
        );

        setExpInfoArr(
            ExpInfoArr.map((info) => {
                if(info.id === id){
                    info[e.target.name] = e.target.value;
                }
                return info;
            })
        );
    }

    const deleteSection = (e) => {
        const id = e.target.parentNode.id;
        setEduInfoArr(
            EduInfoArr.filter((info) => {
                return info.id !== id;
            })
        );

        setExpInfoArr(
            ExpInfoArr.filter((info) => {
                return info.id !== id;
            })
        );
    }
    
    const addEduSection = () => {
        const currEduInfo={
            school: school,
            title: title,
            date: date,
            id: uniqid(),
        };
        setEduInfoArr(EduInfoArr.concat(currEduInfo));
        setSchool('');
        setTitle('');
        setDate('');
    }


    const addExpSection = () => {
        const currExpInfo={
            company: company,
            position: position,
            dateFrom: dateFrom,
            dateTo: dateTo,
            description: description,
            id: uniqid(),
        };
        setExpInfoArr(ExpInfoArr.concat(currExpInfo));
        setCompany('');
        setPosition('');
        setDateFrom('');
        setDateTo('');
        setDescription('');
    }


    return(
        <div className="content">
            <div className="leftSection">
                <GenInfo 
                    onGenInfoChange={handleChange} 
                    name={name}
                    email={email}
                    phone={phone}/>
                <EduInfo
                    onEduInfoChange={handleChange}
                    onAddSection={addEduSection}
                    school={school}
                    title={title}
                    date={date}/>

                <ExpInfo
                    onExpInfoChange={handleChange}
                    onAddSection={addExpSection} 
                    company={company}
                    position={position}
                    dateFrom={dateFrom}
                    dateTo={dateTo}
                    description={description}/>

                {EduInfoArr.map((section) => {
                    return(
                        <form key={section.id} id={section.id}>
                            <label htmlFor="school">School Name: </label>
                            <input id="school" name="school" type="text" value={section.school} onChange={handleChangeEdit}/>
            
                            <label htmlFor="title">Title of Study: </label>
                            <input id="title" name="title" type="text" value={section.title} onChange={handleChangeEdit}/>
            
                            <label htmlFor="date">Date of Study: </label>
                            <input id="date" name="date" value={section.date} onChange={handleChangeEdit}/>
            
                            <button type="button" onClick={deleteSection}>Delete</button>
                        </form>
                    )
                })}

                {ExpInfoArr.map((section) => {
                    return(
                        <form key={section.id} id={section.id}>
                            <label htmlFor="company">Company Name: </label>
                            <input id="company" name="company" type="text" value={section.company} onChange={handleChangeEdit}/>
            
                            <label htmlFor="position">Position Title: </label>
                            <input id="position" name="position" type="text" value={section.position} onChange={handleChangeEdit}/>
            
                            <label htmlFor="dateFrom">From: </label>
                            <input id="dateFrom" name="dateFrom" type="date" value={section.dateFrom} onChange={handleChangeEdit}/>
            
                            <label htmlFor="dateTo">To: </label>
                            <input id="dateTo" name="dateTo" type="date" value={section.dateTo} onChange={handleChangeEdit}/>
            
                            <label htmlFor="description">Description: </label>
                            <input id="description" name="description" type="text" value={section.description} onChange={handleChangeEdit}/>
                        
                            <button type="button" onClick={deleteSection}>Delete</button>
                        </form>
                    )
                })}
            </div>

            <div className="rightSection">
                <h1>{name}</h1>
                <h3>{email}</h3>
                <h3>{phone}</h3>

                {EduInfoArr.map((section) => {
                    return(
                        <div key={section.id}>
                            <h2>{section.school}</h2>
                            <h3>{section.title}</h3>
                            <h3>{section.date}</h3>
                        </div>
                    )
                })}

                {ExpInfoArr.map((section) => {
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

export default Content;