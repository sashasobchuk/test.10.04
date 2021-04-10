import * as axios from "axios";

export const loadFullPageAPI =  ()=>{
    return  axios.get(`https://run.mocky.io/v3/99ecb97a-1f0e-4f18-8c9c-fdcb7d84b2b8`,{})
}