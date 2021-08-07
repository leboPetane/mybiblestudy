import {FaPlusCircle} from 'react-icons/fa'
import {FaMinusCircle} from 'react-icons/fa'
import { useState } from "react"
import {FaEdit} from 'react-icons/fa'

const SubTopic = ({topic, id, deleteTopic, addTopic, onChange, editSubTopic, setEditTopic}) => {

    const onDelete = (e) => {
        e.preventDefault()
        deleteTopic(id)
    }
    const onAdd = (e) => {
        e.preventDefault()
        addTopic(id)
    }

    // const [title, setTitle] = useState(topic.title)
    // const [start, setStart] = useState(topic.start)
    // const [end, setEnd] = useState(topic.end)
    // const [notes, setNotes] = useState(topic.notes)

    const setTitle = (val) => {
        const editedTopic =  {
            id:id,
            topicData:{
                title:val,
                start:topic.start,
                end:topic.end,
                notes:topic.notes
            }
        }
        onChange(editedTopic)
        
    }

    const setStart = (val) =>{
        const editedTopic =  {
            id:id,
            topicData:{
                title:topic.title,
                start:val,
                end:topic.end,
                notes:topic.notes
            }
        }
        onChange(editedTopic)
    }

    const setEnd = (val) =>{
        const editedTopic =  {
            id:id,
            topicData:{
                title:topic.title,
                start:topic.start,
                end:val,
                notes:topic.notes
            }
        }
        onChange(editedTopic)
    }

    const setNotes = (val) =>{
        const editedTopic =  {
            id:id,
            topicData:{
                title:topic.title,
                start:topic.end,
                end:topic.end,
                notes:val
            }
        }
        onChange(editedTopic)
    }


    return (
        
        <div className="trend">
            {editSubTopic ?
                <><input type="text" placeholder="Sub-topic" className="form-control ml-2" value={topic.title} onChange={(e) => setTitle(e.target.value)}/>
                <input type="time" placeholder="sub-topic" className="form-control ml-2" value={topic.start} onChange={(e) => setStart(e.target.value)} />  
                <input type="time" placeholder="sub-topic" className="form-control ml-2" value={topic.end}   onChange={(e) => setEnd(e.target.value)}/>
                <input type="text" placeholder="Notes/Scriptures" className="form-control ml-2"              value={topic.notes} onChange={(e) => setNotes(e.target.value)}/></> :
                <span><span className="title">{topic.title}</span> {topic.start} - {topic.end} <i>{topic.notes}</i> <button className="editBtn" onClick={setEditTopic}><FaEdit color="grey"/></button></span>
            }
            
            
            <button className="btn mb-3" onClick={onAdd}><FaPlusCircle /></button>
            <button className="btn mb-3" onClick={onDelete}><FaMinusCircle color="red" /></button>
        </div>
    )
}

export default SubTopic
