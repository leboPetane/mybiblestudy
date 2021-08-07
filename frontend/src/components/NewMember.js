import React from 'react'
import {FaPlusCircle} from 'react-icons/fa'
import {FaMinusCircle} from 'react-icons/fa'

const NewMember = ({onAdd, onDelete, member, onEditMember}) => {
    const onA = (e) => {
        e.preventDefault()
        onAdd()
    }

    const onD = (e) => {
        e.preventDefault()
        onDelete(member)
    }

    const editCurrent = (input_name, input_email, input_mobile, input_bornAgain) => {
        const editedMember = {
            id:member.id,
            name:input_name,
            email:input_email,
            mobile:input_mobile,
            bornAgain:input_bornAgain
        }
        onEditMember(editedMember)
    }

    return (
        <div className="trend">
            <input type="text" placeholder="Name"   value={member.name}   onChange={(e) => (editCurrent(e.target.value, member.email, member.mobile,member.born_again))} className="form-control ml-2"  />
            <input type="text" placeholder="Email"  value={member.email}  onChange={(e) => (editCurrent(member.name, e.target.value, member.mobile,member.born_again))} className="form-control ml-2"  />  
            <input type="text" placeholder="Mobile" value={member.mobile} onChange={(e) => (editCurrent(member.name,member.email,e.target.value,member.born_again)) }className="form-control ml-2" />
            <input type="checkbox"                  checked={member.born_again} onChange={(e) => (editCurrent(member.name,member.email,member.mobile,e.currentTarget.checked))} className="form-control ml-2"  /> :
              
            
            
            <button className="btn mb-3" onClick={onA}><FaPlusCircle /></button>
            <button className="btn mb-3" onClick={onD}><FaMinusCircle color="red" /></button>
        </div>
    )
}

export default NewMember
