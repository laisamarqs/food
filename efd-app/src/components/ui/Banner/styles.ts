import styled from 'styled-components'
import { breakpoints } from '../../../styles'

export const BannerContainer = styled.div`
  position: relative;
  height: 17.5rem;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: brightness(50%);
  }
`

export const Titles = styled.div`
  z-index: 1;
  display: grid;
  color: #fff;
  font-size: 2rem;
  position: absolute;
  top: 25px;
  left: 170px;

  span {
    font-weight: 100;
  }

  h2 {
    margin-top: 156px;
    font-weight: 900;
    font-size: 32px;
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    padding-left: 2.7rem;
    left: 0;
  }

  @media only screen and (max-width: ${breakpoints.mobile}) {
    font-size: 1.3rem;
    left: 25px;
    padding: 0;

    h2 {
      margin-top: 130px;
    }
  }
`