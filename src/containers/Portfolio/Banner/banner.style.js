import styled from 'styled-components'

const BannerWrapper = styled.section`
  position: relative;
  background-color: var(--accent);
  display: flex;
  align-items: center;
  /* margin-top: -8rem; */
  display: flex;
  /* align-items: flex-end; */

  @media (min-width: 991px) {
    min-height: 100vh;
  }

  .banner__wrapper{
    @media (max-width: 767px) {
  /* Mobile custom breakpoint */
    width: 100%;
    }
  }



  .image_area {
    @media (max-width: 767px) {
      display: none;
    }
  }

  .image_area img {
    clip-path: polygon(15% 0, 100% 0%, 100% 100%, 15% 100%, 0% 50%);
    filter: grayscale(1) opacity(0.6);
  }
`

export default BannerWrapper