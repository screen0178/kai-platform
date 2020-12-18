import React, {createRef, useEffect} from 'react'
import Chart from "chart.js";
import axios from 'axios'
import authHeader from '../../services/getToken'

const API_URL = "https://kai-pma-data.herokuapp.com/api/"

const AnomalyChartKm0Ma = () => {
    const chartRef = createRef()

    const getData = async () => {
        const res = await axios.get(API_URL + 'anomaly', {headers: authHeader()})
        return res.data
      }

    useEffect(() => {
        const myChartRef = chartRef.current.getContext("2d")
        let chartData = {}
        let pointColor = []
        
        getData().then(res => {
            chartData = res.map(el =>{
                return {
                    km0: el.km0,
                    ma: el.ma,
                    anomaly: el.anomaly
                }
            })

            for (let i = 0; i < chartData.map(el => { return el.ma}).length; i++){
              if (chartData.map(el => { return el.anomaly})[i] === 1) {
                pointColor.push("#4c51bf")
              } else {
                pointColor.push("#f44336")
              }
            }

            new Chart(myChartRef, {
                type: 'line',
                data: {
                    labels: chartData.map(el => { return el.km0}),
                    // labels: ["bl1", "bl2", "bl3"],
                    datasets: [
                        {
                            label: 'km0.ma',
                            backgroundColor: "#4c51bf",
                            borderColor: "#4c51bf",
                            pointBackgroundColor: pointColor,
                            pointBorderColor: pointColor,
                            data: chartData.map(el => { return el.ma}),
                            fill: false
                        }
                    ]
                },
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    legend: {
                      display: false,
                      },
                      tooltips: {
                        mode: "index",
                        intersect: false
                      },
                }
            })
        })  
    })

    return (
        <>
          <div className="w-full mb-12 xl:mb-0 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 mt-10 shadow-lg rounded bg-white">
              <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <h6 className="uppercase text-gray-500 mb-1 text-xs font-semibold">
                      Anomaly
                    </h6>
                    <h2 className="text-grey-800 text-xl font-semibold">
                      km0 . ma
                    </h2>
                  </div>
                </div>
              </div>
              <div className="p-4 flex-auto">
                {/* Chart */}
                <div className="relative" style={{ height: "350px" }}>
                  <canvas id="Km0MaChart" ref={chartRef}></canvas>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}

export default AnomalyChartKm0Ma