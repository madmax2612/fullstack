import React from 'react';

import {Bar} from 'react-chartjs-2';


const Graph=function Graph(){
  
  
    const data = {
        labels: ['January', 'February', 'March',
                 'April', 'May'],
        datasets: [
          {
            label: 'Attendance',
            backgroundColor: [
              '#B21F00',
              '#B21F00',
              '#B21F00',
              '#B21F00',
              '#B21F00',
              
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F'
            ],
            data: [65, 59, 80, 81, 56]
          }
        ]
      }
      

   
return(
    <Bar
 data={data}
  width={120}
  height={100}
  options={{ title:{
    display:true,
    text:'Average Attendance in a Year',
    fontSize:20
  },legend:{
display:true,
position:'right'
  },
  backgroundColor:'red'
  }}
/>
)
}
export default Graph;