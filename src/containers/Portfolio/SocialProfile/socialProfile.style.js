import styled from 'styled-components'
import { themeGet } from 'styled-system'
export const SocialProfileWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 767px) {
  justify-content: space-between;
  }
`

export const SocialProfileItem = styled.div`
  margin-right: 18px;
  a {
    color: #fff;
    transition: 0.15s ease-in-out;
    &:hover {
      color: ${themeGet('colors.primary')};
    }
  }
`
