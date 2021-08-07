import {FcPodiumWithSpeaker, FcReadingEbook , FcSurvey, FcConferenceCall, FcSettings, FcPositiveDynamic} from 'react-icons/fc'

const Stat = ({text, value, total}) => {
    return (
        <div className="button">
          <FcConferenceCall size="45px"/>
          <h4 className="link title">{text} <span className="trend_descr ">{value}</span></h4>
          <span className="cell ">Target <span className="badge badge-secondary trend_descr">{total}</span></span>
          <span className="cell "> Progress <span className="badge badge-secondary trend_descr">{Math.floor((value/total) * 100)}%</span></span>
        </div>
    )
}

export default Stat
