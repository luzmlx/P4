import api from './apiConfig'


export const getAllCakes = async () => {
    const resp = await api.get('/cakes')
    return resp.data
}

export const getCake = async(id) => {
    const resp = await api.get(`/cakes/${id}`)
    return resp.data
}

export const postCake = async (cakeData) => {
    const resp = await api.post('/cakes', {cake: cakeData})
    return resp.data
}

export const putCake = async (id, cakeData) => {
    const resp = await api.put(`/cakes/${id}`, {cake: cakeData})
    return resp.data
}

export const deleteCake = async (id) => {
    const resp = await api.delete(`/cakes/${id}`)
    return resp
}