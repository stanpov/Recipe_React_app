import axios from 'axios'

const baseURL = 'http://localhost:5000/recepies'


export const getOne = (id)=>{
    return axios.get(`${baseURL}/recepi/${id}`,{
        withCredentials: true
    })
    .catch(err=>console.log(err))
}

export const giveOneLike = (id)=> {
    return axios.post(`${baseURL}/like/${id}`,{},{
        withCredentials: true
    })
    .catch(err=>console.log(err))
}
export const deleteRecepi = (id)=>{
    return axios.delete(`${baseURL}/deleterecepi/${id}`,{
        withCredentials: true
    })
    .catch(err=>console.log(err))
}
export const getAll = ()=>{
    return axios.get(`${baseURL}/all`,{
        withCredentials: true
    })
    .catch(err=>console.log(err))
}
export const createOneRecepi = (title,imageUrl,description)=>{
    let recepiData = {
        title,
        imageUrl,
        description
    }

    return   axios.post(`${baseURL}/create`,recepiData,{withCredentials: true})
             .catch(err=>console.log(err))
}
export const deleteOneComment = (commentId,idComment)=>{
    let recepiComent = {
        idComment:idComment
    }
    return axios.post(`${baseURL}/removecomment/${commentId}`,recepiComent,{withCredentials: true})
    .catch(err=>console.log(err))
}

export const getRanklist = ()=>{
    return axios.get(`${baseURL}/ranklist`,{withCredentials: true})
    .catch(err=>console.log(err))
}