import * as EnumTarefa from '../Utils/enums/tafera'

class Tarefa {
  titulo: string
  status: EnumTarefa.Status
  prioridade: EnumTarefa.Prioridade
  descricao: string
  id: number

  constructor(
    titulo: string,
    prioridade: EnumTarefa.Prioridade,
    status: EnumTarefa.Status,
    descricao: string,
    id: number
  ) {
    this.titulo = titulo
    this.descricao = descricao
    this.prioridade = prioridade
    this.status = status
    this.id = id
  }
}

export default Tarefa
