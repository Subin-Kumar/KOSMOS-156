import { createSlice } from '@reduxjs/toolkit'
const Kosmosdata = createSlice({
    name: 'K156',
    initialState: {
        Data: []

    },
    reducers: {
        KdataAdd: (state, action) => {
            console.log("KLogdata--", action.payload);
            state.Data=(action.payload)
        
        },
        CldataUp: (state, action) => {
            console.log("actionpay==", action.payload.data.image)
            state.Data[0].username = action.payload.data.username
            state.Data[0].email = action.payload.data.email
            state.Data[0].age = action.payload.data.age
            state.Data[0].address = action.payload.data.address
            state.Data[0].password = action.payload.data.password
            state.Data[0].image = action.payload.data.image
        },
        KdataRemove: (state, action) => {
            state.Data = []
            state.CartIdList = []
            state.Cartlist = []
            state.CartQuantity = 0
            state.Totprc = 0
        },

        KdataRemoveAll: (state) => {
            console.log("rall2");
            state.CartQuantity = 0;
            state.Cartlist = [];
            state.CartIdList = []
            state.Totprc = 0
        },

    }
})

export const { KdataAdd, KdataRemove, CartdataRemoveAll } = Kosmosdata.actions
export default Kosmosdata.reducer