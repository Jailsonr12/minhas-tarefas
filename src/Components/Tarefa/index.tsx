import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { remover, editar } from '../../store/reducers/tarefas'
import {
  Card,
  Titulo,
  Tag,
  Descricao,
  BarraAcoes,
  Botao,
  BotaoCancelarRemover,
  BotaoSalvar
} from './styles'
import TarefaClass from '../../models/Tarefas'

type Props = TarefaClass

const Terafa = ({
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal,
  id
}: Props) => {
  const dispath = useDispatch()
  const [estadEditandomo, setEstadoEditando] = useState(false)
  const [descricao, setDecricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDecricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdição() {
    setEstadoEditando(false), setDecricao(descricaoOriginal)
  }

  return (
    <Card>
      <Titulo>{titulo}</Titulo>
      <Tag parametros="prioridade" prioridade={prioridade}>
        {prioridade}
      </Tag>
      <Tag parametros="status" status={status}>
        {status}
      </Tag>
      <Descricao
        disabled={!estadEditandomo}
        value={descricao}
        onChange={(evento) => setDecricao(evento.target.value)}
      />

      <BarraAcoes>
        {estadEditandomo ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispath(
                  editar({
                    descricao,
                    prioridade,
                    status,
                    titulo,
                    id
                  })
                )
                setEstadoEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <BotaoCancelarRemover onClick={() => cancelarEdição}>
              Cancelar
            </BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstadoEditando(true)}>Editar</Botao>
            <BotaoCancelarRemover onClick={() => dispath(remover(id))}>
              Remover
            </BotaoCancelarRemover>
          </>
        )}
      </BarraAcoes>
    </Card>
  )
}
export default Terafa
