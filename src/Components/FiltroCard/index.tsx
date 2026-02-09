import { useDispatch } from 'react-redux'
import { Card, Contador, Texto } from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as eneums from '../../Utils/enums/tafera'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: eneums.Prioridade | eneums.Status
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const veritifcaEstaAtivo = () => {
    const mesmoCriteirio = filtro.criterio === criterio
    const memosValor = filtro.valor === valor

    return mesmoCriteirio && memosValor
  }

  const contarTarefas = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
    return 0
  }

  const filtrar = () => [
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  ]

  const contador = contarTarefas()
  const ativo = veritifcaEstaAtivo()
  return (
    <Card ativo={ativo} onClick={filtrar}>
      <Contador>{contador}</Contador>
      <Texto>{legenda}</Texto>
    </Card>
  )
}

export default FiltroCard
