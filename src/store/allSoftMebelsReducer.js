import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export function getAllSoftMebelsFromBack($lang){
    return (dispatch)=>{
        axios.get("https://mebels.mebelcity.uz/api/softmebel",{
            headers:{'Accept-Language': $lang ?? 'uz'}
        })
            .then(res=> dispatch({
                type: getAllData.type,
                payload: res.data.datas
            }))
    }
}

const a = createSlice({
    name:'allSoftMebels',
    initialState:{
        allSoftMebels:[],
        allSoftMebelId:0
    },
    reducers:{
        getAllData:(state, action)=>{
            state.allSoftMebels = action.payload
        },
        allSoftMebelByID:(state, action)=>{
            state.id =  action.payload
        }
    }
})

export const { getAllData, allSoftMebelByID } = a.actions
export default a.reducer