import {Bar} from 'react-chartjs-2'


const BarChart = ({data, text}) => {
    return (
        <Bar className="trend"
                  data={data}
                  width={100}
                  height={50}
                  options={{
                    title:{
                      display:true,
                      text:{text},
                      fontSize:20
                    },
                    legend:{
                      display:true,
                      position:'right'
                    }
                  }}
        />
    )
}

export default BarChart
