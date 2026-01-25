import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefas'
import * as EnumTarefa from '../../Utils/enums/tafera'

type TarefaState = {
  itens: Tarefa[]
}

const initialstate: TarefaState = {
  itens: [
    {
      id: 1,
      descricao: 'Rever a aula 1',
      status: EnumTarefa.Status.PENDENTE,
      prioridade: EnumTarefa.Prioridade.IMPORTANTE,
      titulo: 'Estudar Javascript'
    },
    {
      id: 2,
      descricao: 'Rever a aula 1',
      status: EnumTarefa.Status.PENDENTE,
      prioridade: EnumTarefa.Prioridade.IMPORTANTE,
      titulo: 'Estudar Angular'
    },
    {
      id: 3,
      descricao: 'Rever a aula 2',
      status: EnumTarefa.Status.CONCLUIDA,
      prioridade: EnumTarefa.Prioridade.NORMAL,
      titulo: 'Estudar Java'
    },
    {
      id: 4,
      descricao: 'Rever a aula 1',
      status: EnumTarefa.Status.CONCLUIDA,
      prioridade: EnumTarefa.Prioridade.URGENTE,
      titulo: 'Estudar CSS'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefa',
  initialState: initialstate,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (tarefa) => tarefa.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions

export default tarefasSlice.reducer
