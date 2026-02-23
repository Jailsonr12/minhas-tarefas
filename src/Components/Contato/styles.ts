import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const InfoContato = styled.div`
  margin-bottom: 12px;
  font-size: 16px;
  color: #333;

  strong {
    font-size: 18px;
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
  }

  span {
    display: block;
    color: #666;
    font-size: 14px;
  }
`

export const CampoEdicao = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  border: 2px solid ${variaveis.azulEscuro};
  border-radius: 8px;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;

  &:focus {
    outline: none;
    border-color: ${variaveis.azulEscuro};
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  }
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px 0;
  margin-top: 16px;
  display: flex;
  gap: 12px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
