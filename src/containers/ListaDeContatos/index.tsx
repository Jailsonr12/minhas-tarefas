import Contato from '../../Components/Contato'
import { MainContainer, Titulo } from '../../styles/index'

import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined && termo.length > 0) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) =>
          item.nomeCompleto
            .toLocaleLowerCase()
            .search(termo.toLocaleLowerCase()) >= 0 ||
          item.email.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )
      return contatosFiltrados
    } else {
      return itens
    }
  }

  const contatos = filtraContatos()
  const mensagem = `${contatos.length} contato(s) encontrado(s)${
    termo ? ` com "${termo}"` : ''
  }`

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {contatos.map((c) => (
          <li key={c.id}>
            <Contato
              id={c.id}
              nomeCompleto={c.nomeCompleto}
              email={c.email}
              telefone={c.telefone}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
