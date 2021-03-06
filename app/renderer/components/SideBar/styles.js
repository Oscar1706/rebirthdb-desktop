import styled from 'react-emotion'
import theme from '@/style/common'

export const StyledSideBar = styled('aside')(props => ({
  position: 'fixed',
  top: theme.appHeaderHeight,
  height: '100vh',
  width: theme.sideBarWidth,
  background: theme.mainColor,
  zIndex: 2
}))

export const Logo = styled('div')(props => ({
  position: 'absolute',
  bottom: '70px',
  textAlign: 'center',
  width: '100%',

  '> span': {
    fontSize: '18px',
    fontFamily: 'Quicksand',
    fontWeight: 700,
    color: theme.mainColorLight,
    border: `solid ${theme.mainColorLight}`,
    borderWidth: '1px 0'
  }
}))
