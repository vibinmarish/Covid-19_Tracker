import React from 'react'

import { Line } from 'react-chartjs-2';
import styles from './Chart.module.css';



const Chart = ({ stateTime }) => {
    if (!stateTime[0]) {
        return "";
    }
    const lineChart = (
        stateTime[0] ? (
            <Line
                data={{
                    labels: stateTime.map((row) => row.date),
                    datasets: [{
                        data: stateTime.map((row) => row.totalconfirmed),
                        label: "Confirmed",
                        borderColor: '#39a0ca',
                        fill: true,
                        lineTension: 0,
                    }, {
                        data: stateTime.map((row) => row.totalrecovered),
                        label: "Recovered",
                        borderColor: '#359951',

                        fill: true,
                    }, {
                        data: stateTime.map((row) => row.totaldeceased),
                        label: "Deaths",
                        borderColor: '#e62739',
                        fill: true,
                    }],
                }}
            />) : null);


    return (
        <div className={styles.container}  >
            {lineChart}
        </div>
    )
}

export default Chart;




