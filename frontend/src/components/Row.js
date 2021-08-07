import {FaCheck} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Row = ({member, editMember}) => {

    
    return (
        <tr>
            <td><Link to="#" onClick={() => editMember(member)} >{member.name}</Link></td>
            <td>{member.email}</td>
            <td>{member.mobile}</td>
            <td>{member.role}</td>
            <td>{member.bornAgain ? <FaCheck color="lightgreen"/> : <FaTimes color="red"/>}</td>
            <td>{member.baptized ? <FaCheck color="lightgreen"/> : <FaTimes color="red"/>}</td>
            <td>{member.joined}</td>
            <td>{member.foundation ? <FaCheck color="lightgreen"/> : <FaTimes color="red"/>}</td>
        </tr>
    )
}

export default Row
