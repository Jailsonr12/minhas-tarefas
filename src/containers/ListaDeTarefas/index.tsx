import Tarefa from '../../Components/Tarefa'
import { Container } from './styles'

import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;catalogoria&quot; e &quot;termos&quot;
      </p>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.titulo}>
            <Tarefa
              titulo={tarefa.titulo}
              prioridade={tarefa.prioridade}
              status={tarefa.status}
              descricao={tarefa.descricao}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
