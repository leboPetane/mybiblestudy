import {FaMinusCircle, FaPlusCircle} from 'react-icons/fa'

const Role = ({role, onDelete, onAdd, onChangeRoles}) => {
    const onD = (e, id) => {
        e.preventDefault()
        onDelete(role.id)
    }
    const onA = (e) => {
        e.preventDefault()
        onAdd()
    }

    const setR = (val) => {
        onChangeRoles({
            id: role.id,
            name: val
        })
    }

    return (
        <div className="trend ">
            <input value={role.name} onChange={(e) => (setR(e.target.value)) } className=" form-control ml-2"/>

            <button className="btn mb-3" onClick={onA}><FaPlusCircle /></button>
            <button className="btn mb-3" onClick={onD}><FaMinusCircle color="red" /></button>
        </div>
    )
}

export default Role
