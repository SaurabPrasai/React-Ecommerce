import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/cartSlice.js'
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer=combineReducers({
    cart:cartReducer
})

const persistConfig={
    key:"root",
    storage
}

const persistedReducer=persistReducer(persistConfig,rootReducer)

export const store=configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false})
})

export const persistor=persistStore(store)