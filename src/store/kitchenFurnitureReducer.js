import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export function getKitchenFurnitureFromBack($lang){
    return (dispatch)=>{
        axios.get("https://mebels.mebelcity.uz/api/kitchenmebel",{
            headers:{'Accept-Language': $lang ?? 'uz'}
        })
            .then(res=>dispatch({
                type: getAllData.type,
                payload: res.data.datas
            }))
    }
}

const a = createSlice({
    name:'kitchenMebels',
    initialState:{
        kitchenMebels:[],
        kitchenMebelsId:0
    },
    reducers:{
        getAllData:(state, action)=>{
            state.kitchenMebels = action.payload
        },
        kitchenMebelsByID:(state, action)=>{
            state.kitchenMebelsId =  action.payload
        }
    }
})

export const {getAllData, kitchenMebelsByID} = a.actions
export default a.reducer