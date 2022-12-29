import { configureStore } from "@reduxjs/toolkit";
import allOfficeMebelReducer from "./allOfficeMebelReducer"
import officeMebelsReducer from "./officeMebelsReducer";
import loftForOfficeReducer from "./loftForOfficeReducer";
import allSoftMebelsReducer from "./allSoftMebelsReducer";
import homeMebelsReducer from "./homeMebelsReducer";
import kitchenFurnitureReducer from "./kitchenFurnitureReducer";

export default configureStore({
    reducer:{
        allOfficeMebel: allOfficeMebelReducer,
        officeMebels: officeMebelsReducer,
        loftOfficeMebels: loftForOfficeReducer,
        homeMebels: homeMebelsReducer,
        kitchenMebels: kitchenFurnitureReducer,
        allSoftMebels: allSoftMebelsReducer
    }
})