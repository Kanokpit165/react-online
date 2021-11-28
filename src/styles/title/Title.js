/*import styled, { css } from 'styled-components'
import { Title } from '../style'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`

export default Title*/

import styled from "styled-components";

 const Title = styled.h1`
 font-size: 1.5em;
 text-align: center;
 color: palevioletred;
 `;

 export default Title