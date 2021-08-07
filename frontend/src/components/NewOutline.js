import SubTopic from "./SubTopic"
import { useState } from "react"
import {FaEdit} from 'react-icons/fa'
import {FcPodiumWithSpeaker, FcReadingEbook , FcSurvey, FcConferenceCall, FcSettings, FcPositiveDynamic} from 'react-icons/fc'


const NewOutline = () => {

    const [subject    , setSubject]     = useState("Salvation")
    const [description, setDescription] = useState("Today ill be talking about salvation")
    const [saved      , setSaved]       = useState(true)
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

    const addTopic = (id) => {
        const newTopic = {
            id:id+1,
            topicData:{
                title:"",
                start:"",
                end:"",
                notes:""
            }
        }
        setSubTopics([...subTopics, newTopic])
        setSaved(false)
    }

    const deleteTopic = (id) => {
        if (subTopics.length > 1) {
            setSubTopics(subTopics.filter((topic) => topic.id != id))
            setSaved(false)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(subject,description,subTopics)
        setSaved(true)
        setEditSubject(false)
        setEditDescription(false)
        setEditSubTopic(false)
    }

    const onChange = (obj) => {
        setSubTopics( subTopics.map((topic) => topic.id === obj.id ? obj : topic))
        setSaved(false)
    }

    const setEditTopic = () => {
        setEditSubTopic(true)
    }

    const [editSubject, setEditSubject] = useState(false)
    const [editDescription, setEditDescription] = useState(false)
    const [editSubTopic, setEditSubTopic] = useState(true)


    return (
        <div className="">
            <div className="">
                <h4 className=""><FcReadingEbook      size="55px"/> Bible Study Outline </h4>
            </div>
            <div className="">
                <form className="form-group">
                    <div className="">
                        <p className="trend">
                            <label className="title">Subject</label>
                            {editSubject ? 
                                <input placeholder="Subject"  value={subject}  onChange={(e) => (setSubject(e.target.value), setSaved(false)) } className="form-control ml-2"/> : 
                                <span className="cell ml-2">{subject} <button className="editBtn" onClick={()=> setEditSubject(true)}><FaEdit color="grey"/></button></span> }
                       </p>
                        <p className="trend">
                            <label className="title">Description</label>
                            {editDescription ? 
                            <input 
                                className="form-control ml-2"
                                type="textarea" col="100" rows="50" 
                                placeholder="Description" 
                                value={description} 
                                onChange={(e) => (setDescription(e.target.value), setSaved(false))} /> :
                                <span className="cell ml-2">{description} <button className="editBtn" onClick={()=> setEditDescription(true)}><FaEdit color="grey"/></button></span> }

                        </p>
                        <h4>Sub-topics</h4>
                    </div>
                    <div className="trends">
                    {subTopics.map(
                        (subTopic) => (<SubTopic 
                            topic={subTopic.topicData} 
                            key={subTopic.id} 
                            id={subTopic.id}
                            addTopic={addTopic}
                            deleteTopic={deleteTopic}
                            onChange={onChange}
                            editSubTopic={editSubTopic}
                            setEditTopic={setEditTopic}
                            />)
                    )}
                   </div>
                    <button onClick={onSubmit} className="btn btn-success btn-block" >Save</button>
                </form>
            </div>
        </div> 
    )
}

export default NewOutline
