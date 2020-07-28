import React, { useEffect, Fragment } from 'react'
import styled from '@emotion/styled'
// import { Global } from '@emotion/core'
// import Footer from '../components/Footer'
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
import Footer from '../containers/Portfolio/Footer'

const Root = styled.div`
  font-family: ${props => props.theme.fonts.body};
`

const Main = styled.div`
  padding-top: 8rem;
  font-family: ${props => props.theme.fonts.body};
`

const Layout = props => {
  function handleFirstTab (e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing')
    }
  }
  useEffect(() => window.addEventListener('keydown', handleFirstTab), [])

  return (
    <Root className="siteRoot">
      <div className="siteContent">
        <ThemeProvider theme={portfolioTheme}>
          <Fragment>
            <ResetCSS />
            <GlobalStyle />
            <ContentWrapper>
              <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                <DrawerProvider>
                  <Navbar />
                </DrawerProvider>
              </Sticky>
            </ContentWrapper>
            <Main>{props.children}</Main>
            <Footer />
          </Fragment>
        </ThemeProvider>
      </div>
    </Root>
  )
}

export default Layout
