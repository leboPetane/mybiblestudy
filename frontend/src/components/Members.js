import {FaHome, FaUserPlus} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Row from './Row'
import MemberEdit from './MemberEdit'
import {FcPodiumWithSpeaker, FcReadingEbook , FcSurvey, FcConferenceCall, FcSettings, FcPositiveDynamic} from 'react-icons/fc'

const Members = () => {

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
            foundation:true
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
            foundation:false
        }
    ])

    const onSubmit = (input_member) => {
        if (adding){
            setMembers([...members, input_member])
        }else{
            setMembers(members.map((mem) => (mem.id == input_member.id ? input_member : mem)))
        }
        setMember({})
        setViewEdit(false)
        setAdding(true)
    }

    const [member, setMember] = useState({
        id:0,
        name:"",
        email:"",
        mobile:"",
        role:"member",
        bornAgain:false,
        baptized:false,
        joined:"today",
        foundation:false
    })

    const [viewEdit, setViewEdit] = useState(false)
    const [adding, setAdding] = useState(true)

    const editMember = (member) => {
        setMember(member)
        setAdding(false)
        setViewEdit(true)
    }

    const onEditMember = (obj) => {
        setMember(obj)
    }
    return (
        <div className="main-area">
            <div className="btn mb-3 ">
                <Link className="btn btn-warning mr-1" to="/" ><FaHome color="white" /></Link>
                {adding && <button className="btn btn-warning mr-1" onClick={() => (setViewEdit(!viewEdit), setAdding(true))}><FaUserPlus color="white"/></button>}
            </div>
            <h4 className=""><FcConferenceCall      size="55px"/>Bible Study Members </h4>
            {viewEdit && <MemberEdit onSubmit={onSubmit} member={member} onEditMember={onEditMember}/>}
            <div className="table-responsive-sm">
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile </th>
                        <th scope="col">Role </th>
                        <th scope="col">Born Again</th>
                        <th scope="col">Baptized</th>
                        <th scope="col">Joined</th>
                        <th scope="col">Foundation School</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((member) => <Row key={member.id} member={member} editMember={editMember} />)}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Members
