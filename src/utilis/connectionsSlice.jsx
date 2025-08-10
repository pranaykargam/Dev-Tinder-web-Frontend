
import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

const connectionsSlice = createSlice({
    name : "connections",
    initialState: null,
    reducers: {
        addConnections: (state, action) => action.payload,
        removeConnections: () => null,
    }
});


export const { addConnections, removeConnections } = connectionsSlice.actions;
export default connectionsSlice.reducer;

          
