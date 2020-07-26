import styled from 'styled-components'

const BannerWrapper = styled.section`
  position: relative;
  background-color: var(--accent);
  display: flex;
  align-items: center;
  margin-top: -8rem;
  display: flex;
  /* align-items: flex-end; */
  @media (min-width: 991px) {
    min-height: 100vh;
  }

  .image_area {
    @media (max-width: 767px) {
      display: none;
    }
  }
`

export default BannerWrapper
