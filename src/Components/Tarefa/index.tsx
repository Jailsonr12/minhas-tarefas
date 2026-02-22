import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { remover, editar, alteraStatus } from '../../store/reducers/tarefas'
import {
  Card,
  Titulo,
  Tag,
  Descricao,
  BarraAcoes,
  Botao,
  BotaoCancelarRemover
} from './styles'
import TarefaClass from '../../models/Tarefas'
import { BotaoSalvar } from '../../styles'

type Props = TarefaClass

const Tarefa = ({
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estadEditandomo, setEstadoEditando] = useState(false)
  const [descricao, setDecricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDecricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdição() {
    setEstadoEditando(false)
    setDecricao(descricaoOriginal)
  }

  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(alteraStatus({ id, finalizado: evento.target.checked }))
  }

  return (
    <Card>
      <label>
        <input type="checkbox" onChange={alteraStatusTarefa} />

        <Titulo>{titulo}</Titulo>
      </label>
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
                dispatch(
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
export default Tarefa
