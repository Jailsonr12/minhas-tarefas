import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import { Aside } from './styles'
import { Botao, Campo } from '../../styles'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostratFiltro: boolean
}

const BarraLateral = ({ mostratFiltro }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <Aside>
      <div>
        {mostratFiltro ? (
          <Campo
            type="text"
            placeholder="Buscar por nome ou e-mail"
            value={termo}
            onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
          />
        ) : (
          <Botao onClick={() => navigate('/')}>
            Voltar a lista de contatos
          </Botao>
        )}
      </div>
    </Aside>
  )
}

export default BarraLateral
