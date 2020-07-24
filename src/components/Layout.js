import React, { useEffect, Fragment } from 'react'
import styled from '@emotion/styled'
// import { Global } from '@emotion/core'
import Footer from '../components/Footer'
// import { globalStyles } from '../styles/globalStyles.js'

import { ThemeProvider } from 'styled-components'
import Sticky from 'react-stickynode'
import { DrawerProvider } from '../../common/src/contexts/DrawerContext'
import { portfolioTheme } from '../../common/src/theme/portfolio'
import { ResetCSS } from '../../common/src/assets/css/style'
import {
  GlobalStyle,
  ContentWrapper,
} from '../containers/Portfolio/portfolio.style'
import Navbar from '../containers/Portfolio/Navbar'

const Root = styled.div`
  font-family: ${props => props.theme.fonts.body};
`

const Skip = styled.a`
  font-family: ${props => props.theme.fonts.body};
  padding: 0 1rem;
  line-height: 60px;
  background: #2867cf;
  color: white;
  z-index: 101;
  position: fixed;
  top: -100%;
  &:hover {
    text-decoration: underline;
  }
  &:focus,
  &:active,
  &:hover {
    top: 0;
  }
`

const Layout = props => {
  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing')
    }
  }
  useEffect(() => window.addEventListener('keydown', handleFirstTab), [])

  return (
    <Root className="siteRoot">
      <div className="siteContent">
        <ThemeProvider theme={portfolioTheme}>
          <ResetCSS />
          <GlobalStyle />
          <Skip href="#main" id="skip-navigation">
            Skip to content
          </Skip>
          <ContentWrapper>
            <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
              <DrawerProvider>
                <Navbar />
              </DrawerProvider>
            </Sticky>
          </ContentWrapper>
          <div id="main">{props.children}</div>
        </ThemeProvider>
      </div>
      <Footer />
    </Root>
  )
}

export default Layout
