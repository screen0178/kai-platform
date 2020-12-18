import React from "react"

import Navbar from "../components/layout/Navbar.js"
import Sidebar from "../components/layout/Sidebar"
import Footer from "../components/layout/Footer"
import AnomalyChartKm0Ma from "../components/chart/AnomalyChartKm0Ma.js"
import AnomalyChartKm0Va from "../components/chart/AnomalyChartKm0Va.js"

const Dashboard = () => {
    return (
        <>
          <Sidebar />
          <div className="relative md:ml-64 bg-gray-200">
            <Navbar />
            <div className="px-4 md:px-10 mx-auto w-full -m-24">
              <div className="flex flex-wrap ">
                <AnomalyChartKm0Ma />
                <AnomalyChartKm0Va />
              </div>
                <Footer />
            </div>
          </div>
        </>
      )
}

export default Dashboard