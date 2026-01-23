import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefas'
import * as EnumTarefa from '../../Utils/enums/tafera'

const tarefasSlice = createSlice({
  name: 'tarefa',
  initialState: [
    new Tarefa(
      'Estudar JavaScript',
      EnumTarefa.Prioridade.NORMAL,
      EnumTarefa.Status.PENDENTE,
      'estudar variavel',
      1
    ),
    new Tarefa(
      'Estudar Java',
      EnumTarefa.Prioridade.NORMAL,
      EnumTarefa.Status.PENDENTE,
      'Rever aula 3',
      2
    ),
    new Tarefa(
      'Estudar Python',
      EnumTarefa.Prioridade.NORMAL,
      EnumTarefa.Status.PENDENTE,
      'Odeio python',
      3
    ),
    new Tarefa(
      'Estudar Angular',
      EnumTarefa.Prioridade.NORMAL,
      EnumTarefa.Status.PENDENTE,
      'Angular é melhor q React',
      4
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
