import { configureStore } from '@reduxjs/toolkit'

import ContatosReducer from './reducers/contatos'
import FiltroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    contatos: ContatosReducer,
    filtro: FiltroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
