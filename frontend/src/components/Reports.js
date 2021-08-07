import { Link } from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
import {FcDiploma2, FcDownload, FcAddressBook} from 'react-icons/fc'
import {FcPodiumWithSpeaker, FcReadingEbook , FcSurvey, FcConferenceCall, FcSettings, FcPositiveDynamic} from 'react-icons/fc'
import { useState } from 'react'
import RowReport from './RowReport'
 const Reports = () => {

    const [reports, setReports] = useState([
        {
            id: 1,
            attendance:25,
            attendee:"",
            subject:"Righteousness",
            descreption:"Today we are going to talk about righteous ness",
            offering:345,
            born_again: 12,
            first_timers:16,
            filled: 12,
            day: 15,
            month: 3,
            year: 2020
        },
        {
            id: 2,
            attendance:35,
            attendee:"",
            subject:"Grace",
            descreption:"Today we are going to talk about grace",
            offering:345,
            born_again: 12,
            first_timers:22,
            filled: 12,
            day: 23,
            month: 3,
            year: 2020
        }
    ])

    const [report, setReport] = useState(
        {
            id: 2,
            attendance:35,
            attendee:"",
            subject:"Grace",
            descreption:"Today we are going to talk about grace",
            offering:345,
            born_again: 12,
            first_timers:22,
            filled: 12,
            day: 23,
            month: 3,
            year: 2020
        }
    )
    
    return (
        <div className="main-area">
            <div className="mb-4">
                <Link className="btn btn-warning mr-1" to="/" ><FaHome color="white" /></Link>
            </div>
            <h4 className=""><FcSurvey      size="55px"/>Bible Study Reports </h4>

            <div className="buttons" >
                <div className="button">
                    <FcDiploma2 size="60px"/>
                    <h4 className="m-0 p-0">{report.subject}</h4>
                    <span className="cell mb-2 pl-2 pr-2">{report.descreption}</span>
                    <div className="info">
                        <div className="cell">{report.attendance} attendance</div>
                        <div className="trend_desc">{report.first_timers} first timers</div>
                    </div>
                    {/* <span><button className="downloadBtn" ><FcDownload size="30px"/></button> <button className="downloadBtn"><FcAddressBook size="30px"/></button></span> */}
                </div>
            </div>

            <div>
            <table className="table table-striped mt-4">
                    <thead>
                        <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Attendace </th>
                        <th scope="col">First Timers </th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((rep) => <RowReport report={rep} key={rep.id} setReport={(r) => setReport(r)}/>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Reports
