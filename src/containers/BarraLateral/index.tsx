import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import FiltroCard from '../../Components/FiltroCard'
import { Aside, Campo, Filtros } from './styles'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <Aside>
      <div>
        <Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
        <Filtros>
          <FiltroCard contador={3} legenda="Pendente" />
          <FiltroCard contador={4} legenda="Concluidas" />
          <FiltroCard contador={2} legenda="Urgentes" />
          <FiltroCard contador={2} legenda="Importantes" />
          <FiltroCard contador={3} legenda="Normal" />
          <FiltroCard ativo contador={4} legenda="Todas" />
        </Filtros>
      </div>
    </Aside>
  )
}

export default BarraLateral
