import Tarefa from '../../Components/Tarefa'
import { Container, Resultado } from './styles'

import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefaFiltradas = itens
    if (termo !== undefined) {
      tarefaFiltradas = tarefaFiltradas.filter(
        (item) =>
          item.titulo.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefaFiltradas = tarefaFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefaFiltradas = tarefaFiltradas.filter(
          (item) => item.status === valor
        )
      }

      return tarefaFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltrado = (quantidade: number) => {
    let mensagem = ''

    const complemento =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: todas ${complemento}`
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: ${criterio} ${complemento}`
    }

    return mensagem
  }

  const tarefas = filtraTarefas()
  const mensagem = exibeResultadoFiltrado(tarefas.length)

  return (
    <Container>
      <Resultado>{mensagem}</Resultado>
      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>
            <Tarefa
              id={t.id}
              titulo={t.titulo}
              prioridade={t.prioridade}
              status={t.status}
              descricao={t.descricao}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
