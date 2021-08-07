import {FaRocketchat, FaCircle} from 'react-icons/fa'
import {BiMenu} from 'react-icons/bi'
import {BsFillChatFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Header = ({bibleTeacher}) => {
    return (
        <div className="header wrapper">
            {/* <button className="btn btn-light menu"> */}
                 {/* <BiMenu className="bi-3x"/> */}
            {/* </button> */}
            {/* <img className="image-cover" alt="profile" src={`${bibleTeacher.imgUrl}`}/> */}
            <h3 className="heading">{bibleTeacher.name}
            {/* <Link className="" to={`/live/${bibleTeacher.id}`}> <small><BsFillChatFill color="red" /></small></Link> */}
            </h3>
            
            <p className="sub-heading">{bibleTeacher.descr}</p>
            <p className="sub-heading trend_descr">{bibleTeacher.email}</p>
            {/* <p className="sub-heading">{bibleTeacher.day} {bibleTeacher.time}</p> */}
        </div>
    )
}

export default Header
