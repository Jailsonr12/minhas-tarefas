import BotaoAdicionar from '../../Components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostratFiltro />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
