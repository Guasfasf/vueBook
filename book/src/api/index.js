import axios from 'axios';
axios.defaults.baseURL='http://localhost:3000';

axios.interceptors.response.use(res=>res.data);

export let getSliders=()=>{
  return axios.get('/sliders')
};

export let getHot=()=>{
  return axios.get('/hot')
};
export let getBooks=()=>{
  return axios.get('/book')
};
export let removeBook=(id)=>{
  return axios.delete(`/book?id=${id}`)
}

export let findBook=(id)=>{
  return axios.get(`/book?id=${id}`)
}
export let setBook=(id,data)=>{
  return axios.put(`/book?id=${id}`,data)
}
export let addBook=(data)=>{
  return axios.post('/book',data)
}
