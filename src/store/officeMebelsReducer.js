import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export function getOfficeMebelsFromBack($lang){
    return (dispatch)=>{
        axios.get("https://mebels.mebelcity.uz/api/mebel",{
            headers:{'Accept-Language': $lang ?? 'uz'}
        })
        .then(res=>dispatch({
            type: getAllData.type,
            payload: res.data.datas
        }))
    }
}

const a = createSlice({
    name:'officeMebels',
    initialState:{
        officeMebels:[],
        officemebelsID:0
    },
    reducers:{
        getAllData:(state, action)=>{
            state.officeMebels = action.payload
        },
        officemebelsByID:(state, action)=>{
            state.officemebelsID =  action.payload
        }
    }
})

export const {getAllData,officemebelsByID} = a.actions
export default a.reducer