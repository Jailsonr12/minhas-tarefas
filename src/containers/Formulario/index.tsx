import { BotaoSalvar, MainContainer, Titulo } from '../../styles/index'
import { Campo } from '../../styles'
import { Form } from './style'
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { cadastrar } from '../../store/reducers/contatos'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    if (!nomeCompleto || !email || !telefone) {
      alert('Por favor, preencha todos os campos')
      return
    }

    dispatch(
      cadastrar({
        nomeCompleto,
        email,
        telefone
      })
    )

    setNomeCompleto('')
    setEmail('')
    setTelefone('')

    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nomeCompleto}
          onChange={(evento) => setNomeCompleto(evento.target.value)}
          type="text"
          placeholder="Nome Completo"
          required
        />
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="E-mail"
          required
        />
        <Campo
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          type="tel"
          placeholder="Telefone"
          required
        />
        <BotaoSalvar type="submit">Cadastrar Contato</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
