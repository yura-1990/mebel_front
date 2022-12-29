import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export function getHomeMebelsFromBack($lang){
    return (dispatch)=>{
        axios.get("https://mebels.mebelcity.uz/api/homemebel",{
            headers:{'Accept-Language': $lang ?? 'uz'}
        })
            .then(res=>dispatch({
                type: getAllData.type,
                payload: res.data.datas
            }))
    }
}

const a = createSlice({
    name:'homeMebels',
    initialState:{
        homeMebels:[],
        homeMebelsId: 0
    },
    reducers:{
        getAllData:(state, action)=>{
            state.homeMebels = action.payload
        },
        homeMebelsByID:(state, action)=>{
            state.homeMebelsId =  action.payload
        }
    }
})

export const {getAllData, homeMebelsByID} = a.actions
export default a.reducer