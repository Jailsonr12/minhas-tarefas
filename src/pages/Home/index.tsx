import BotaoAdicionar from '../../Components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeContatos from '../../containers/ListaDeContatos'

const Home = () => (
  <>
    <BarraLateral mostratFiltro />
    <ListaDeContatos />
    <BotaoAdicionar />
  </>
)

export default Home
