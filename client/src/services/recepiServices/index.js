import axios from 'axios'
const baseURL = 'http://localhost:5000/recepies'


export const getOne = (id)=>{
    return axios.get(`${baseURL}/recepi/${id}`)
    .catch(err=>console.log(err))
}

export const giveOneLike = (id)=> {
    return axios.post(`${baseURL}/like/${id}`)
    .catch(err=>console.log(err))
}
export const deleteRecepi = (id)=>{
    return axios.delete(`${baseURL}/deleterecepi/${id}`)
    .catch(err=>console.log(err))
}
export const getAll = ()=>{
    return axios.get(`${baseURL}/all`)
    .catch(err=>console.log(err))
}
export const createOneRecepi = (title,imageUrl,description)=>{
    let recepiData = {
        title,
        imageUrl,
        description
    }

    return   axios.post(`${baseURL}/create`,recepiData)
             .catch(err=>console.log(err))
}