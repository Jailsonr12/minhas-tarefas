import FiltroCard from '../../Components/FiltroCard'
import { Aside, Campo, Filtros } from './styles'

const BarraLateral = () => (
  <Aside>
    <div>
      <Campo type="text" placeholder="Buscar" />
      <Filtros>
        <FiltroCard contador={3} legenda="Pendente" />
        <FiltroCard contador={4} legenda="Conclúidas" />
        <FiltroCard contador={2} legenda="Urgentes" />
        <FiltroCard contador={2} legenda="Importantes" />
        <FiltroCard contador={3} legenda="Normal" />
        <FiltroCard ativo contador={4} legenda="Todas" />
      </Filtros>
    </div>
  </Aside>
)
export default BarraLateral
