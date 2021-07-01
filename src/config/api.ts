import axios from 'axios';

export const getData = (url:string, params:any) => {
  return axios.get(url, {
    params
  })
}