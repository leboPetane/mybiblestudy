import {FcSportsMode} from 'react-icons/fc'

const Trend = ({data}) => {
    return (
        <div className="trend">
            <div className="logo">
                <FcSportsMode size="45px"/>
            </div>
            <div className="info">
                <div className="title">{data.title}</div>
                <div className="cell">{data.cell} | {data.zone}</div>
                <div className="trend_descr">{data.descr}</div>
            </div>
        </div>
    )
}

export default Trend
