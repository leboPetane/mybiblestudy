import { useState }                       from 'react'
import Stat         from './Stat';
import LineChart    from './LineChart';
import BarChart     from './BarChart';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import {FcPodiumWithSpeaker, FcReadingEbook , FcSurvey, FcConferenceCall, FcSettings, FcPositiveDynamic} from 'react-icons/fc'

const Metrics = () => {
    const [bibleTeacher, setBibleTeacher] = useState(
        {
          id:23,
          name: "John Doe",
          descr: "Young In Christ Bible Teacher",
          email: "lebopetane@gmail.com",
          day:"Wednesdays",
          time:"17:00",
          imgUrl: "https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg",
          totalMembers: 25,
          totalTarget:50,
          baMembers: 25,
          baptised: 21,
          foundation: 15
        })

    const [AttendanceData, setAttendanceData] = useState({
        labels:['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets:[{
          label:'Avarage Attendance',
          data:[
            5, 8, 6, 12, 13, 20, 51
          ],
          backgroundColor:[
            'rgba(155, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ]
        }]
      })

      const [newConvertChart, setNewConverts] = useState({
        labels:['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets:[{
          label:'New Converts',
          data:[
            2, 0, 0, 6, 3, 10, 31
          ],
          backgroundColor:"lightblue"
        }]
      })

    return (
        <div className="main-area">
            <div className="btn mb-3 ">
                <Link className="btn btn-warning mr-1" to="/" ><FaHome color="white" /></Link>
            </div>

            <h4 className=""><FcPositiveDynamic      size="55px"/>Bible Study Metrics </h4>

            <div className="buttons">
                <Stat text="Total Members"               total={bibleTeacher.totalTarget} value={bibleTeacher.totalMembers}/>
                <Stat text="Born Again "          total={bibleTeacher.totalMembers} value={bibleTeacher.baMembers}/>
                <Stat text="Baptised"                    total={bibleTeacher.totalMembers} value={bibleTeacher.baptised}/>
                <Stat text="Foundation" total={bibleTeacher.totalMembers} value={bibleTeacher.foundation}/>

              </div>

              <LineChart text='Bible Attendance By Month'  data={AttendanceData}/>
              <BarChart  text="New Converts By Month"     data={newConvertChart}/>
            
        </div>
    )
}

export default Metrics
