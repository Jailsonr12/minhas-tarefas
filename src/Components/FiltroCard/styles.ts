import styled from 'styled-components'

import { Props } from '.'

type PropsSemLegendaContador = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsSemLegendaContador>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#d3d3d3')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Texto = styled.label`
  font-size: 14px;
  display: block;
`
