import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Slide from 'react-reveal/Slide';
import Icon from 'react-icons-kit'
import Box from '../../../../common/src/components/Box'
import Text from '../../../../common/src/components/Text'
import Heading from '../../../../common/src/components/Heading'
import Image from '../../../../common/src/components/Image'
import Container from '../../../../common/src/components/UI/Container'
import SocialProfile from '../SocialProfile'
import BannerWrapper from './banner.style'
import Github from '../../../containers/Portfolio/Testimonial'
import { cornerDownRight } from 'react-icons-kit/feather/cornerDownRight'
import PersonImage from '../../../../static/images/alfianjau.jpeg'
import colors from '../../../../common/src/theme/portfolio/colors'

const BannerSection = ({
  row,
  contentArea,
  imageArea,
  greetingStyle,
  nameStyle,
  designationStyle,
  aboutStyle,
  roleStyle,
  roleWrapper,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      portfolioJson {
        SOCIAL_PROFILES {
          icon
          url
        }
      }
    }
  `)

  return (
    <BannerWrapper id="banner_section">
      <Container className="banner__wrapper" noGutter mobileGutter width="1200px">
        <Box {...row}>

          <Box {...contentArea}>
            <Slide bottom>
              <Heading content="Muhammad Alfian Jauhari" {...nameStyle} />
              <Box {...roleWrapper}>
                <Icon
                  icon={cornerDownRight}
                  style={{ color: colors.primary }}
                  size={22}
                />
                <Heading content="Fullstack Designer" {...roleStyle} />
              </Box>
              <Text
                content="Front-end developer who Aim to become creative coder whom can bend the web with interactive magic ways and colors"
                {...aboutStyle}
              />
              <SocialProfile items={Data.portfolioJson.SOCIAL_PROFILES} />
            </Slide>
          </Box>
          <Box {...imageArea} className="image_area">
            <Image src={PersonImage} alt="muhammad alfian jauhari" />
          </Box>
        </Box>
        <Github />
      </Container>
    </BannerWrapper>
  )
}

BannerSection.propTypes = {
  row: PropTypes.object,
  contentArea: PropTypes.object,
  imageArea: PropTypes.object,
  greetingStyle: PropTypes.object,
  nameStyle: PropTypes.object,
  designationStyle: PropTypes.object,
  aboutStyle: PropTypes.object,
  roleStyle: PropTypes.object,
  roleWrapper: PropTypes.object,
}

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },
  contentArea: {
    width: ['100%', '100%', '50%', '60%'],
    p: ['3rem 0 2rem 0', '3rem 0 2rem 0', '80px 0 60px 0', '0'],
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  imageArea: {
    width: ['100%', '100%', '50%', '40%'],
    flexBox: true,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  greetingStyle: {
    as: 'h3',
    color: '#fff',
    fontSize: ['18px', '18px', '18px', '20px', '30px'],
    fontWeight: '500',
    mb: '8px',
  },
  nameStyle: {
    as: 'h2',
    color: '#fff',
    fontSize: ['1.5rem', '1.5rem', '1.5rem', '5rem', '3rem'],
    fontWeight: '800',
    mb: '6px',
  },
  designationStyle: {
    as: 'h3',
    color: '#fff',
    fontSize: ['18px', '18px', '18px', '20px', '30px'],
    fontWeight: '700',
    mb: ['30px', '30px', '25px', '30px', '30px'],
  },
  roleWrapper: {
    flexBox: true,
    mb: '28px',
  },
  roleStyle: {
    as: 'h4',
    fontSize: ['18px', '18px', '18px', '18px', '20px'],
    fontWeight: '500',
    color: '#fff',
    mb: '0',
    ml: '10px',
  },
  aboutStyle: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    fontWeight: '400',
    color: '#fff',
    lineHeight: '1.5',
    mb: '50px',
  },
}

export default BannerSection
