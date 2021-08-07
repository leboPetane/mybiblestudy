import { useState } from 'react'

import {FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import NewOutline from './NewOutline'

const StudyOutline = () => {

    const [showOutline, setShowOutline] = useState(false)
    
    return (
        <div className="main-area ">
            <div className=" btn mb-3">
                <Link className="btn btn-warning mr-1" to="/" ><FaHome color="white" /></Link>
            </div>

            <NewOutline />
                    
                
        </div>
    )
}

export default StudyOutline
