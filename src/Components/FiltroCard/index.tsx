import { Card, Contador, Texto } from './styles'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
}

const FiltroCard = ({ ativo, contador, legenda }: Props) => (
  <Card ativo={ativo}>
    <Contador>{contador}</Contador>
    <Texto>{legenda}</Texto>
  </Card>
)

export default FiltroCard
