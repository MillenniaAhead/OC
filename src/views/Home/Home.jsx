import React from "react"
import Home1 from "../../assets/images/Home/Home-1.png"
import Home2 from "../../assets/images/Home/Home-2.png"
import Home3 from "../../assets/images/Home/Home-3.png"
import Home4 from "../../assets/images/Home/Home-4.png"

const Home = () => {
  return (
    <div>
      <div
        className="d-flex justify-content-between px-1"
      >
        {/* Right */}
        <div
          style={{ height: "500px", width: "570px", marginLeft: "20px" }}
          className="card border"
        >
          <div className="d-flex justify-content-between px-2 py-2">
            <div className="fw-bolder fs-5">Recent sales</div>
            <div className="fw-bolder fs-4">...</div>
          </div>
          <div style={{ marginTop: "-18px", color: "gray" }} className="px-2">
            Last 7 days
          </div>
          <div style={{ textAlign: "center", marginTop: "120px" }}>
            <img width={60} height={60} src={Home1} alt="home1" />
            <p className="fw-bolder fs-4 mt-2">No Sales Data</p>
            <p style={{ fontSize: "17px" }}>
              Make some appointments for sales data to <br /> appear
            </p>
          </div>
        </div>

        {/* Left */}
        <div style={{ height: "500px", width: "570px" }} className="card border">
          <div className="d-flex justify-content-between px-2 py-2">
            <div className="fw-bolder fs-5">Upcoming appointments</div>
            <div className="fw-bolder fs-4">...</div>
          </div>
          <div style={{ marginTop: "-18px", color: "gray" }} className="px-2">
            Next 7 days
          </div>
          <div style={{ textAlign: "center", marginTop: "120px" }}>
            <img width={60} height={60} src={Home2} alt="home2" />
            <p className="fw-bolder fs-4 mt-2">Your schedule is empty</p>
            <p style={{ fontSize: "17px" }}>
              Make some appointments for sales data to <br /> appear
            </p>
          </div>
        </div>
      </div>

      <div
        className="d-flex justify-content-between px-1"
      >
        {/* Right */}
        <div
          style={{ height: "500px", width: "570px", marginLeft: "20px" }}
          className="card border"
        >
          <div className="d-flex justify-content-between px-2 py-2">
            <div className="fw-bolder fs-5">Appointments activity</div>
          </div>
          <div style={{ textAlign: "center", marginTop: "120px" }}>
            <img width={70} height={70} src={Home3} alt="home3" />
            <p className="fw-bolder fs-4 mt-2">No recent activity</p>
            <p style={{ fontSize: "18px" }}>
              Visit the{" "}
              <a
                href="/calender"
                style={{ color: "#1BB70B", textDecoration: "none" }}
              >
                calendar
              </a>{" "}
              section to add some <br /> appointments
            </p>
          </div>
        </div>

        {/* Left */}
        <div style={{ height: "500px", width: "570px" }} className="card border">
          <div className="d-flex justify-content-between px-2 py-2">
            <div className="fw-bolder fs-5">Today’s next appointments</div>
          </div>
          <div style={{ textAlign: "center", marginTop: "120px" }}>
            <img width={55} height={55} src={Home4} alt="home4" />
            <p className="fw-bolder fs-4 mt-2">No Appointments Today</p>
            <p style={{ fontSize: "18px" }}>
              Visit the{" "}
              <a
                href="/calender"
                style={{ color: "#1BB70B", textDecoration: "none" }}
              >
                calendar
              </a>{" "}
              section to add some <br /> appointments
            </p>
          </div>
        </div>
      </div>

      <div
        className="d-flex justify-content-between px-1 mb-5"
      >
        {/* Right */}
        <div
          style={{ height: "500px", width: "570px", marginLeft: "20px" }}
          className="card border"
        >
          <div className="d-flex justify-content-between px-2 py-2">
            <div className="fw-bolder fs-5">Top services</div>
          </div>
          <div style={{ textAlign: "center", marginTop: "120px" }}>
            <img width={55} height={55} src={Home1} alt="home1" />
            <p className="fw-bolder fs-4 mt-2">No sales this month</p>
            <p style={{ fontSize: "18px" }}>
              Create some sales for sales data to appear
            </p>
          </div>
        </div>

        {/* Left */}
        <div style={{ height: "500px", width: "570px" }} className="card border">
          <div className="d-flex justify-content-between px-2 py-2">
            <div className="fw-bolder fs-5">Top team member</div>
          </div>
          <div style={{ textAlign: "center", marginTop: "120px" }}>
            <img width={55} height={55} src={Home1} alt="home1" />
            <p className="fw-bolder fs-4 mt-2">No sales this month</p>
            <p style={{ fontSize: "18px" }}>
              Create some sales for sales data to appear
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
