import { BotaoSalvar, MainContainer, Titulo } from '../../styles/index'
import { Campo } from '../../styles'
import { Form, Opcoes } from './style'
const Formulario = () => (
  <MainContainer>
    <Titulo>Nova Tarefa</Titulo>
    <Form>
      <Campo type="text" placeholder="Titulo" />
      <textarea placeholder="Descrição da tarefa"></textarea>
      <Campo as="textarea" name="prioridade" type="radio" id="urgente" />{' '}
      <Opcoes>
        <p>Prioridade</p>
        <label htmlFor="urgente">Urgente</label>
        <input name="prioridade" type="radio" id="importante" />{' '}
        <label htmlFor="importante">Importante</label>
        <input name="prioridade" type="radio" id="normal" />{' '}
        <label htmlFor="normal">Normal</label>
      </Opcoes>
      <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
    </Form>
  </MainContainer>
)

export default Formulario
