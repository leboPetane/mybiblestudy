import { Link } from 'react-router-dom'

const RowReport = ({report, setReport}) => {
    const setR = (r) => {
        setReport(r)
    }
    return (
       
        <tr>
            <td><Link to="#" onClick={() => setR(report)}>{report.day}/{report.month}/{report.year}</Link></td>
            <td>{report.subject}</td>
            <td>{report.attendance}</td>
            <td>{report.first_timers}</td>
        </tr>
    )
}

export default RowReport
