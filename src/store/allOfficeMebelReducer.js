import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export function getDataFromBack($lang){
    return (dispatch)=>{
        axios.get("https://mebels.mebelcity.uz/api/allmebel",{
            headers:{'Accept-Language': $lang ?? 'uz'}
        }).then(res=>dispatch({
                type: getAllData.type,
                payload: res.data.datas
        })).catch(err=>console.log(err))
    }
}

const a = createSlice({
    name:'allOfficeMebel',
    initialState:{
        allOfficeMebel:[],
        id:0
    },
    reducers:{
        getAllData:(state, action)=>{
            state.allOfficeMebel = action.payload
        },
        getDataByID:(state, action)=>{
            state.id =  action.payload
        }
    }
})

export const {getAllData, getDataByID} = a.actions
export default a.reducer