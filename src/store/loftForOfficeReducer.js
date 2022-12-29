import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export function getLoftOfficeMebelsFromBack($lang){
    return (dispatch)=>{
        axios.get("https://mebels.mebelcity.uz/api/loftmebel",{
            headers:{'Accept-Language': $lang ?? 'uz'}
        })
            .then(res=>dispatch({
                type: getAllData.type,
                payload: res.data.datas
            }))
    }
}

const a = createSlice({
    name:'loftOfficeMebels',
    initialState:{
        loftOfficeMebels:[],
        loftOfficeMebelId:0
    },
    reducers:{
        getAllData:(state, action)=>{
            state.loftOfficeMebels = action.payload
        },
        loftOfficeMebelByID:(state, action)=>{
            state.loftOfficeMebelId =  action.payload
        }
    }
})

export const {getAllData, loftOfficeMebelByID} = a.actions
export default a.reducer