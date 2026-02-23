import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { remover, editar } from '../../store/reducers/contatos'
import {
  Card,
  InfoContato,
  BarraAcoes,
  BotaoCancelarRemover,
  CampoEdicao
} from './styles'
import ContatoClass from '../../models/Contato'
import { BotaoSalvar } from '../../styles'
import { Botao } from '../../styles'

type Props = ContatoClass

const Contato = ({
  nomeCompleto: nomeCompletoOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaoEditando, setEstadoEditando] = useState(false)
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    setNomeCompleto(nomeCompletoOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }, [nomeCompletoOriginal, emailOriginal, telefoneOriginal])

  function cancelarEdição() {
    setEstadoEditando(false)
    setNomeCompleto(nomeCompletoOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <Card>
      {estaoEditando ? (
        <>
          <CampoEdicao
            value={nomeCompleto}
            onChange={(evento) => setNomeCompleto(evento.target.value)}
            placeholder="Nome Completo"
          />
          <CampoEdicao
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            placeholder="E-mail"
            type="email"
          />
          <CampoEdicao
            value={telefone}
            onChange={(evento) => setTelefone(evento.target.value)}
            placeholder="Telefone"
          />
        </>
      ) : (
        <>
          <InfoContato>
            <strong>{nomeCompleto}</strong>
          </InfoContato>
          <InfoContato>
            <span>📧 {email}</span>
          </InfoContato>
          <InfoContato>
            <span>📱 {telefone}</span>
          </InfoContato>
        </>
      )}

      <BarraAcoes>
        {estaoEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nomeCompleto,
                    email,
                    telefone,
                    id
                  })
                )
                setEstadoEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <BotaoCancelarRemover onClick={() => cancelarEdição()}>
              Cancelar
            </BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstadoEditando(true)}>Editar</Botao>
            <BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </BotaoCancelarRemover>
          </>
        )}
      </BarraAcoes>
    </Card>
  )
}

export default Contato
