import styled from 'styled-components'
import { colors, breakpoints } from '../../../styles'
import { ButtonContainer } from '../../ui/Button/styles'

export const ProductContainer = styled.div`
  background-color: ${colors.primaryDark};
  width: 20rem;
  padding: 0.5rem;
  color: ${colors.primaryLight};
  margin: 0;

  img {
    width: 100%;
    height: 10.4375rem;
    object-fit: cover;
  }

  h3 {
    padding: 0.5rem 0;
    font-size: 1rem;
    font-weight: 900;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.375rem;
    padding-bottom: 0.5rem;
  }

  ${ButtonContainer} {
    width: 100%;
  }

  @media only screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;
    height: 100%;
  }
`