import api from './api-config'

export const getAllFlavors = async () => {
    const res = await api.get('/cake_flavors')
    return res.data
}

export const addFlavorToCake = async (cakeId, flavorId) => {
    const res = await api.get(`/cakes/${cakeId}/cake_flavors/${flavorId}`)
    return res.data
}