import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: "Make",
        model: "Model",
        year: "Year",
        color: "Color",
        mileage: "Mileage",
        in_stock: "In Stock",
    },
    reducers: {
        chooseMake: (state, action) => {
            state.make = action.payload;
        },
        chooseModel: (state, action) => {
            state.model = action.payload;
        },
        chooseYear: (state, action) => {
            state.year = action.payload;
        },
        chooseColor: (state, action) => {
            state.color = action.payload;
        },
        chooseMileage: (state, action) => {
            state.mileage = action.payload;
        },
        chooseInStock: (state, action) => {
            state.in_stock = action.payload;
        }
    }
});

export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, chooseYear, chooseColor, chooseMileage, chooseInStock } = rootSlice.actions;
