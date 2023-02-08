import React from "react"
import { useHistory } from "react-router-dom"

function Online() {
  const history = useHistory()
  const navigateHandler = function() {
    history.push("/close")
  }
  return (
    <>
    <div className="container w-75">
      <div className="d-flex justify-content-between aling-items-center mt-3">
        <div>
          <p>Settings . Invoice template</p>
          <h2>Invoice template</h2>
        </div>
        <button onClick={navigateHandler}
          style={{
            backgroundColor: "rgba(78,78,78,1)",
            color: "white",
            borderRadius: "3px",
            width: "72px",
            height: "30px"
          }}
        >
          Save
        </button>
      </div>
      </div>
      <div className=" container w-75 d-flex mt-5">
        <div className="w-50 me-3">
            <div className="">
                <h3>Online cancellation and rescheduling</h3>
                <p>Set how far in advance clients can cancel or reschedule, after this
timeframe clients must call to change their appointment.</p>
            </div>
            <div className="" style={{marginTop:'60px'}}>
                <h3>Online booking availability</h3>
                <p>Set how far in advance clients can book online, and lead time for
when clients can cancel or reschedule.</p>
            </div>
            <div className="" style={{marginTop:'19rem'}}>
                <h3>Important info</h3>
                <p>Add important info you’d like clients to see at checkout when
booking an appointment or buying a voucher or membership.</p>
            </div>
            <div className="" style={{marginTop:'62px'}}>
                <h3>online booking activity emails</h3>
                <p>Receive emails when clients use online booking to book, reschedule
or cancel. These emails are sent in addition to regular team
members notifications.</p>
            </div>
           
            <div className="" style={{marginTop:'54px'}}>
                <h3>Featured services</h3>
                <p>Add important info you’d like clients to see at checkout when
booking an appointment or buying a voucher or membership.</p>
            </div>
            <div className="mt-3" style={{marginTop:'5px'}}>
                <h3>Star ratings</h3>
                <p>Show how great your team are by displaying average star ratings
next to their names, it’s proven to attract more clients online.</p>
            </div>
        </div>
        <div className="w-50">
          <div className="border">
            <div className="m-3">
              <h6>Clients can cancel or reschedule online</h6>
              <select
                className="form-select mt-3"
                aria-label="Default select example"
                style={{ height: "34px" }}
              >
                <option selected>Anytime</option>
                <option value="1">One</option>
              </select>
            </div>
          </div>
          <div className="border mt-4">
            <div className="m-3">
              <h6>Clients can book appointments</h6>
              <select
                className="form-select mt-3"
                aria-label="Default select example"
                style={{ height: "34px" }}
              >
                <option selected>Immediately before start time</option>
                <option value="1">One</option>
              </select>
              <select
                className="form-select mt-3"
                aria-label="Default select example"
                style={{ height: "34px" }}
              >
                <option selected>No more than 5 months in the future</option>
                <option value="1">One</option>
              </select>
              <p className="mt-2">
                Controls the time slots available for online booking
              </p>
              <h6>Time slot interval</h6>
              <select
                className="form-select mt-3"
                aria-label="Default select example"
                style={{ height: "34px" }}
              >
                <option selected>15 minutes</option>
                <option value="1">One</option>
              </select>
              <div className="form-check mt-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                Allow clients to select team members
                </label>
              </div>
            </div>
          </div>
          <div className="border mt-4">
          <div class="m-3">
  <label for="exampleFormControlTextarea1" class="form-label">Important info</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
          </div>
          <div className="border mt-4">
          <div className="m-3">
          <div className="form-check mt-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                Send to team members booked
                </label>
              </div>
          <div className="form-check mt-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                Send to specific email addresses
                </label>
              </div>
              <div className="mt-3">
              <div class="mb-2">
  <label for="exampleFormControlInput1" class="form-label">Specific email addresses</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="anushak1905@gmail.com"/>
</div>
              <p className="">Enter multiple addresses by separating with commas </p>
            </div>
          </div>

          </div>
          <div className="border mt-4">
            <div className="m-3">
            <div className="form-check mt-3" style={{height:'35px'}}>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                Show Featured services when clients click on a Book now
direct link
                </label>
              </div>
            </div>
          </div>
          <div className="border mt-4 mb-4">
            <div className="m-3">
            <div className="form-check mt-3" style={{height:'30px'}}>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                Display star ratings for team members
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Online
