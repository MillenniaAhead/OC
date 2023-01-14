import axios from axios

const url = 'http://localhost:3000'

// For promotion deals

export const getAllDeals = () => {
    axios.get(`${url}/promotion`)
}
// export const postPromotionDeals = (detail) => {
//     axios.post(`${url}/promotion/post`, detail)
// }
// export const updatePromotionDeals = (detail) => {
//     axios.put(`${url}/promotion/update:${detail.id}`, detail)
// }
// export const deletePromotionDeals = () => {
//     axios.delete(`${url}/promotion/delete:${detail.id}`, detail)
// }
