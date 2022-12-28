import axios from 'axios'

const url = "localhost:3000"


//For appointments
export const getAppointments = () => {
    axios.get(`${url}/appointments`)
}
export const postAppointment = (detail) => {
    axios.post(`${url}/appointments/post`, {detail})
}
export const updateAppointment = (detail) => {
    axios.put(`${url}/appointments/update:${detail.id}`, id)
}
export const deleteAppointment = (id) => {
    axios.delete(`${url}/appointments/delete:${id}`, id)
}

//for tips

export const addATip = (detail) =>{
    axios.put(`${url}/appointments/addtip:${detail,id}`, detail)
}

//for payment

export const SelectPayment = (detail) =>{
    axios.put(`${url}/appointments/selectpayment:${detail,id}`, detail)
}
