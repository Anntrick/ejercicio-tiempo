import { createSlice } from "@reduxjs/toolkit";

export const tiempoSlice = createSlice({
    name: 'tiempo',
    initialState: {
        weather: []
    },
    reducers: {
        addWeatherData: (state, action) => {
            state.weather = action.payload
        },
        removeCard: (state, action) => {
            let key = state.weather.filter(weather => {
                weather.id === action.payload
            })
            //state.weather.filter()
        }
    }
})

export const { addWeatherData, removeCard } = tiempoSlice.actions

export const selectWeather = (state) => state.tiempo.weather

export default tiempoSlice.reducer

