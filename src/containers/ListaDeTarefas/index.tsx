import Tarefa from '../../Components/Tarefa'
import { Container } from './styles'

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

      if (criterio == 'prioridade') {
        tarefaFiltradas = tarefaFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio == 'status') {
        tarefaFiltradas = tarefaFiltradas.filter(
          (item) => item.status === valor
        )
      }

      return tarefaFiltradas
    } else {
      return itens
    }
  }

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;catalogoria&quot; e &quot;{termo}&quot;
      </p>
      <ul>
        <li>{termo}</li>
        <li>{criterio}</li>
        <li>{valor}</li>
      </ul>
      <ul>
        {filtraTarefas().map((t) => (
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
