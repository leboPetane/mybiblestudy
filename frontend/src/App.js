import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useState }                       from 'react'
import { Link }                           from 'react-router-dom'

import Header       from './components/Header'
import MenuItem     from './components/MenuItem'
import BibleStudy   from './components/BibleStudy'
import StudyOutline from './components/StudyOutline';
import Members      from './components/Members';
import Reports      from './components/Reports';
import Metrics      from './components/Metrics'
import Settings     from './components/Settings';
import Trend        from './components/Trend';


function App() {

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

  const [trends, setTrends] = useState([
  {
    id:1,
    title:"Brother Enoch Flight",
    cell:"Young In Christ",
    zone:"Blw Sa Zone C",
    descr:"64 new converts in the past month"
  },
  {
    id:2,
    title:"Sister Elijah Flight",
    cell:"On Fire For Christ",
    zone:"Blw Sa Zone C",
    descr:"76% growth from past month "
  }
  ])
  return (
    <Router>
      <div className="">
      <Header bibleTeacher={bibleTeacher} className="header"/>
        <Route 
          path='/'         
          exact
          render={() => (
            <>
              
              <div className="main-area ">
                <div className="buttons">
                  <MenuItem link="study"    text="Start" />
                  <MenuItem link="outline"  text="Outline"/>
                  <MenuItem link="members"  text="Members"/>
                  
                </div>
                <div className="buttons">
                  <MenuItem link="reports"  text="Reports"/>
                  <MenuItem link="metrics"  text="Metrics"/>
                  <MenuItem link="settings"  text="Settings"/>
                </div>
                
                <div className="trends">
                  <h4>Trending </h4>
                  {trends.map((trend) => <Trend data={trend} key={trend.id}/>)}
                  
                </div>

                <Link to="#" className="btn btn-block btn-info m-auto">Live Chat </Link>

              </div>
              
             </>
          )}/>
          <Route path='/study'                         exact component={BibleStudy}/>
          <Route path='/outline'                       exact component={StudyOutline}/>
          <Route path='/members'                       exact component={Members}/>
          <Route path='/reports'                       exact component={Reports}/>
          <Route path='/metrics'                       exact component={Metrics}/>
          <Route path='/settings'                      exact component={Settings}/>
          {/* <Route path={`/live/${bibleTeacher.id}`}     exact component={App}/> */}
        
      </div>
    </Router>
  );
}

export default App;
