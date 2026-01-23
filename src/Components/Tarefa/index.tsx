import { useState } from 'react'
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

import * as EnumTarefa from '../../Utils/enums/tafera'

type Props = {
  titulo: string
  prioridade: EnumTarefa.Prioridade
  status: EnumTarefa.Status
  descricao: string
}

const Terafa = ({ titulo, prioridade, status, descricao }: Props) => {
  const [estadEditandomo, setEstadoEditando] = useState(false)

  return (
    <Card>
      <Titulo>{titulo}</Titulo>
      <Tag parametros="prioridade" prioridade={prioridade}>
        {prioridade}
      </Tag>
      <Tag parametros="status" status={status}>
        {status}
      </Tag>
      <Descricao value={descricao} />

      <BarraAcoes>
        {estadEditandomo ? (
          <>
            <BotaoSalvar>Salvar</BotaoSalvar>
            <BotaoCancelarRemover onClick={() => setEstadoEditando(false)}>
              Cancelar
            </BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstadoEditando(true)}>Editar</Botao>
            <BotaoCancelarRemover>Remover</BotaoCancelarRemover>
          </>
        )}
      </BarraAcoes>
    </Card>
  )
}
export default Terafa
