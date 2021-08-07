import { useState } from "react"
import {FaHome, FaMinusCircle, FaPlusCircle} from 'react-icons/fa'
import {FcApprove, FcServices} from 'react-icons/fc'
import { Link } from "react-router-dom"
import {FaEdit} from 'react-icons/fa'
import Role from "./Role"

const Settings = () => {

    const [editName, setEditName] = useState(false)
    const [editMobile, setEditMobile] = useState(false)
    const [editEmail, setEditEmail] = useState(false)
    const [bibleTeacher, setBibleTeacher] = useState(
        {
          id:23,
          name: "John Doe",
          mobile:"0670308095",
          descr: "Young In Christ Bible Teacher",
          email: "lebopetane@gmail.com",
          day:"3",
          time:"17:00",
          imgUrl: "https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg",
          totalMembers: 25,
          totalTarget:50,
          baMembers: 25,
          baptised: 21,
          foundation: 15
        })
    const [roles, setRoles] = useState([
        {
            id:1,
            name:"Member"
        },
        {
            id:2,
            name:"Assitant Teacher"
        }
    ])
    const setName = (val) => {
        setBibleTeacher({
            id:bibleTeacher.id,
            name: val,
            mobile:bibleTeacher.mobile,
            descr: bibleTeacher.descr,
            email: bibleTeacher.email,
            day:bibleTeacher.day,
            time:bibleTeacher.time,
            imgUrl: bibleTeacher.imgUrl,
            totalMembers: bibleTeacher.totalMembers,
            totalTarget:bibleTeacher.totalTarget,
            baMembers: bibleTeacher.baMembers,
            baptised: bibleTeacher.baptised,
            foundation: bibleTeacher.foundation
        })
    }    

    const setMobile = (val) => {
        setBibleTeacher({
            id:bibleTeacher.id,
            name: bibleTeacher.name,
            mobile:val,
            descr: bibleTeacher.descr,
            email: bibleTeacher.email,
            day:bibleTeacher.day,
            time:bibleTeacher.time,
            imgUrl: bibleTeacher.imgUrl,
            totalMembers: bibleTeacher.totalMembers,
            totalTarget:bibleTeacher.totalTarget,
            baMembers: bibleTeacher.baMembers,
            baptised: bibleTeacher.baptised,
            foundation: bibleTeacher.foundation
        })
    }  

    const setEmail = (val) => {
        setBibleTeacher({
            id:bibleTeacher.id,
            name: bibleTeacher.name,
            mobile:bibleTeacher.mobile,
            descr: bibleTeacher.descr,
            email: val,
            day:bibleTeacher.day,
            time:bibleTeacher.time,
            imgUrl: bibleTeacher.imgUrl,
            totalMembers: bibleTeacher.totalMembers,
            totalTarget:bibleTeacher.totalTarget,
            baMembers: bibleTeacher.baMembers,
            baptised: bibleTeacher.baptised,
            foundation: bibleTeacher.foundation
        })
    }  

    const setDay = (val) => {
        setBibleTeacher({
            id:bibleTeacher.id,
            name: bibleTeacher.name,
            mobile:bibleTeacher.mobile,
            descr: bibleTeacher.descr,
            email: bibleTeacher.email,
            day:val,
            time:bibleTeacher.time,
            imgUrl: bibleTeacher.imgUrl,
            totalMembers: bibleTeacher.totalMembers,
            totalTarget:bibleTeacher.totalTarget,
            baMembers: bibleTeacher.baMembers,
            baptised: bibleTeacher.baptised,
            foundation: bibleTeacher.foundation
        })
    }  

    const onSubmit = (e) => {
        e.preventDefault()
        setEditName(false)
        setEditEmail(false)
        setEditMobile(false)

        //Save roles too
    }

    const onDelete = (id) => {
        if (roles.length > 1)
            setRoles(roles.filter((r) => r.id != id && r))
    }
    const onAdd = (e) => {
        setRoles([...roles,{id:567,name:""}])
    }

    const onChangeRoles = (obj) => {
        setRoles(roles.map((r) => r.id == obj.id ? obj : r))
    }
    return (
        <div className="main-area">
            <div className="btn mb-3 ">
                <Link className="btn btn-warning mr-1" to="/" ><FaHome color="white" /></Link>
            </div>

            <h4><FcServices /> Edit My Details</h4>
           <form className="form-group ">
               <div className="trend">
                    <label className="title">Name</label>
                    {editName ? <input value={bibleTeacher.name} onChange={(e) => (setName(e.target.value)) } className="form-control ml-2"/> : 
                        <span className="cell"><span className="cell ml-2">{bibleTeacher.name}</span> <button className="editBtn" onClick={()=> setEditName(true)}><FaEdit color="grey"/></button></span>}
                    
               </div>
               <div className="trend">
                    <label className="title">Mobile Number</label>
                    {editMobile ? <input value={bibleTeacher.mobile} onChange={(e) => (setMobile(e.target.value)) } className="form-control ml-2"/> :
                    <span className="cell"><span className="cell ml-2">{bibleTeacher.mobile}</span> <button className="editBtn" onClick={()=> setEditMobile(true)}><FaEdit color="grey"/></button></span>}
               </div>
               <div className="trend">
                    <label className="title">Email</label>
                    {editEmail ? <input value={bibleTeacher.email} onChange={(e) => (setEmail(e.target.value)) } className="form-control ml-2"/> :
                    <span className="cell"><span className="cell ml-2">{bibleTeacher.email}</span> <button className="editBtn" onClick={()=> setEditEmail(true)}><FaEdit color="grey"/></button></span>}
                    
               </div>
               
               <button className="btn btn-info btn-block" onClick={onSubmit}>Save</button>
           </form>
           <form className="form-group">
            <h4><FcServices /> Bible Study</h4>
            <div className="trend">
                <label className="title"> Day of Cell</label>
                <select value={bibleTeacher.day} onChange={(e) => (setDay(e.target.value)) } className="form-control">
                    <option value="1" className="form-control">Monday</option>
                    <option value="2" className="form-control">Tueday</option>
                    <option value="3" className="form-control">Wednesday</option>
                    <option value="4" className="form-control">Thursday</option>
                    <option value="5" className="form-control">Friday</option>
                    <option value="6" className="form-control">Saturday</option>
                    <option value="7" className="form-control">Sunday</option>
                </select>
            </div>
            <div className="">
                <label className="title">Roles</label>
                { roles.map((role) => <Role key={role.id} role={role} onAdd={onAdd} onDelete={onDelete} onChangeRoles={onChangeRoles}/>)}
                
            </div>
                <button className="btn btn-info btn-block " onClick={onSubmit}>Save</button>
            </form>
        </div>
    )
}

export default Settings
