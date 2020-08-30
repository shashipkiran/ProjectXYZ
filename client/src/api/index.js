import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000/cust',
});

export const createCust = payload => api.post(`/c`, payload);
export const updateCust = (id, payload) => api.put(`/u/${id}`, payload);
export const deactivateCust = id => {api.delete(`/d/${id}`);}
export const getCustByOrgId = id => api.get(`/f/${id}`);
export const getCustAll = () => api.get(`/a`);


const apis = {
    createCust,
    updateCust,
    getCustByOrgId,
    getCustAll,
    deactivateCust,
}

export default apis;