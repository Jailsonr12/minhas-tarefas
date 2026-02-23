import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      nomeCompleto: 'João Silva',
      email: 'joao@example.com',
      telefone: '(11) 98765-4321'
    },
    {
      id: 2,
      nomeCompleto: 'Maria Santos',
      email: 'maria@example.com',
      telefone: '(21) 99876-5432'
    },
    {
      id: 3,
      nomeCompleto: 'Pedro Oliveira',
      email: 'pedro@example.com',
      telefone: '(31) 98765-1234'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.email.toLowerCase() === action.payload.email.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com esse e-mail')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer
