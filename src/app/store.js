import { configureStore } from '@reduxjs/toolkit'
import tiempoSlice from '../containers/Tiempo/tiempoSlice'

export default configureStore({
    reducer: {
        tiempo: tiempoSlice
    }
})