import { Link } from 'react-router-dom'
import {BsBullseye}  from 'react-icons/bs'
import {FaEdit} from 'react-icons/fa'
import {FaUserFriends} from 'react-icons/fa'
import {FaFilePdf} from 'react-icons/fa'
import {FaTools} from 'react-icons/fa'
import {FcPodiumWithSpeaker, FcReadingEbook , FcSurvey, FcConferenceCall, FcSettings, FcPositiveDynamic} from 'react-icons/fc'

const MenuItem = ({link, text}) => {
    return (
           <Link to={link} className="button col-md-6">
               {(link === 'study'    && <FcPodiumWithSpeaker size="55px"/>)}
               {(link === 'outline'  && <FcReadingEbook      size="55px"/>)}
               {(link === 'members'  && <FcConferenceCall    size="55px"/>)}
               {(link === 'reports'  && <FcSurvey            size="55px"/>)}
               {(link === 'settings' && <FcSettings          size="55px"/>)} 
               {(link === 'metrics' && <FcPositiveDynamic    size="55px"/>)} 
               <span className="">{text}</span>
           </Link> 
    )
}

export default MenuItem
