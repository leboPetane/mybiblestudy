import { Link } from "react-router-dom"
import { useState } from "react"
import {FaHome} from 'react-icons/fa'
import NewMember from "./NewMember"
import {FcVoicePresentation} from 'react-icons/fc'
import {FcDiploma2, FcDownload, FcAddressBook} from 'react-icons/fc'

const BibleStudy = () => {
    const [subject    , setSubject]     = useState("Salvation")
    const [description, setDescription] = useState("Today ill be talking about salvation")
    const [subTopics  , setSubTopics]   = useState([
        {
            id:1,
            topicData:{
                title: "Eternal life",
                start: "17:00",
                end: "17:30",
                notes: "John 1:1"
            }
        },
        {
            id:2,
            topicData:{
                title: "Love",
                start: "17:30",
                end: "18:00",
                notes: "John 3:16"
            }
        }
        
    ])

    const [members, setMembers] = useState([
        {
            id: 1,
            name:"Mark",
            email:"mark@gmail.com",
            mobile:"0123456789",
            role:"assistant",
            bornAgain:true,
            baptized:false,
            joined:"08 August 2020",
            foundation:true,
            attending:false
        },
        {
            id: 2,
            name:"Luke",
            email:"luke@gmail.com",
            mobile:"0123456789",
            role:"member",
            bornAgain:false,
            baptized:false,
            joined:"08 August 2020",
            foundation:false,
            attending:false
        }
    ])

    const goNext = (e) => {
        e.preventDefault()
        setStep(step+1)
        if (step == 4){
            var attNum = 0 
            var baNum = 0
            for (var m of baMembers){
                members.map((mem) => (mem.id == m.id ? m : mem))
                if (m.born_again){
                    baNum = baNum + 1
                }
            }
            for(var m of members){
                if (m.attending){
                    attNum = attNum + 1
                }
            }
            attNum = attNum + newMembers.length
            console.log("attendance", attNum)
            console.log("new converts", baNum)
        }
        
    }

    const goPrev = (e) => {
        e.preventDefault()
        setStep(step-1)
    }

    const goStart = (e) => {
        e.preventDefault()
        setStep(3) //start counter
    }

    const goEnd = (e) => {
        e.preventDefault()
        setStep(4)
    }

    const [member] = useState(
        {
            id:1,
            name:"",
            email:"",
            mobile:"",
            born_again:false
        }
    )

    const onAdd = () => {
        var mem_id = Math.floor(Math.random() * 1000 + 1);
        var mem_obj = {
            id:mem_id,
            name:"",
            email:"",
            mobile:"",
            born_again:false
        }
        setNewMembers([...newMembers, mem_obj])
    }

    const onDelete = (m) => {
        if (newMembers.length > 1){
            setNewMembers(newMembers.filter((mem) => (mem.id != m.id)))
        }
    }

    const [newMembers, setNewMembers] = useState([
        {
            id:1,
            name:"",
            email:"",
            mobile:"",
            born_again:false
        }
    ])

    const onEditMember = (mem) => {
        console.log(mem)
        setNewMembers(newMembers.map((m) => (m.id == mem.id ? mem : m)))
        console.log(mem)
    }

    const [step, setStep] = useState(1) //1. attendance, 2. New Members, 3. BA FILLED OFFERING
    const [showForm, setShowForm] = useState(true)


    const attend = (mem) => {
        setMembers(members.map((m) => (m.id == mem.id ? {...m, attending:!m.attending} : m)))
    }
   
    const baCheck = (mem) => {
        setBaMembers(baMembers.map((m) => (m.id == mem.id ? {...m, born_again:!m.born_again} : m)))
    }

    const [report, setReport] = useState(
        {
            id: 1,
            attendance:25,
            attendee:"",
            subject:"Righteousness",
            descreption:"Today we are going to talk about righteous ness",
            offering:345,
            born_again: 12,
            first_timers:16,
            filled: 12,
            day: 15,
            month: 3,
            year: 2020
        }
    )

    const [baMembers, setBaMembers] = useState([
        {
            id: 2,
            name:"Luke",
            email:"luke@gmail.com",
            mobile:"0123456789",
            role:"member",
            bornAgain:false,
            baptized:false,
            joined:"08 August 2020",
            foundation:false,
            attending:false
        }
    ])
    
    return (
        <div className="main-area">
            {showForm ?
            <>
            {/* ===================== Dynamic Heading ===========================*/}

            <h4 className="link">
                {step == 1 && "Attendance"}
                {step == 2 && "New Members"}
                {step == 3 && "Bible Study In Progress"}
                {step == 4 && "Confirm Report"}
                {step == 5 && "Bible Study Completed!"}
            </h4>

            {step == 5 && 
            <>
            <p className="tren_descr" >The report has been generated and emailed to your address.</p>
            <div className="buttons mb-2" >
                <div className="button">
                    <FcDiploma2 size="60px"/>
                    <h4 className="m-0 p-0">{report.subject}</h4>
                    <span className="cell mb-2 pl-2 pr-2">{report.descreption}</span>
                    <span><button className="downloadBtn"><FcDownload size="30px"/></button> <button className="downloadBtn"><FcAddressBook size="30px"/></button></span>
                </div>
            </div>
            </>
            }

            {/* ===================== Step 1 register, 2 - new comers, 3 cell, 4 report ===========================*/}

            <form className="form-group">
                {(step==1 || step==4) && 
                    members.map((member) => 
                        <div className="trend" key={member.key}>
                            <label className="cell" key={member.key}>{member.name}</label>
                            <input key={member.key} className="form-control" type="checkbox" checked={member.attending} onChange={() => attend(member)}/>
                        </div>)}
                {(step==2 || step==4) &&
                    newMembers.map((mem_obj) =>
                    <div key={mem_obj.id}> 
                        <NewMember 
                            member={mem_obj} 
                            onAdd={onAdd} 
                            onDelete={onDelete}     
                            onEditMember={onEditMember} 
                            key={mem_obj.id} />

                       <h4 className="link">Born Again Today</h4>
                        {baMembers.map((member) => 
                            <div className="trend" key={member.key}>
                                <label className="cell">{member.name}</label>
                                <input className="form-control" type="checkbox" checked={member.born_again} onChange={() => baCheck(member)}/>
                            </div>)} 
                    </div>)
                }

                {step==3 &&
                    <>
                    <div className="">
                        <p className="trend">
                            <label className="title">Subject</label>
                            <span className="cell ml-2">{subject}</span> 
                       </p>
                        <p className="trend">
                            <label className="title">Description</label>
                            <span className="cell ml-2">{description} </span> 

                        </p>
                        <div className="">
                        
                            {subTopics.map((topic) => <div key={topic.id} className="trend">
                                <div className="logo">
                                    <FcVoicePresentation size="45px"/>
                                </div>
                                <div className="info">
                                    <div className="title">{topic.topicData.title} </div>
                                    <div className="cell">{topic.topicData.start} - {topic.topicData.end}</div>
                                    <div className="trend_descr">{topic.topicData.notes}</div>
                                </div>
                            </div>)}
                                
                        </div>
                    </div>

                    <button className="btn btn-info btn-block" onClick={goEnd}>End Study</button>
                    </>
                }
    
                {/* ===================== Dynamic Buttons ===========================*/}

                {(step==1 || step==4) &&
                <>
                <button className="btn btn-info mr-2" onClick={goNext}>{step==4 ? "Confirm" : "Next"}</button>
                <Link to="/" className="btn btn-info" ><FaHome /></Link></> }
                {step==2 &&
                <>
                <button className="btn btn-info m-2 " onClick={goPrev}>Previous</button>
                <button className="btn btn-info" onClick={goStart}>Start</button></> }
                {step == 5 &&
                <>
                    <Link to="/" className="btn btn-info mr-2">Home</Link>
                    <Link to="/reports" className="btn btn-info">Reports</Link>
                </>
                }
            </form> </>: ""}

        </div>
    )
}

export default BibleStudy
