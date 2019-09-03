import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = styled.header`
  background: ${props => props.theme.colors.base};
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    margin-right: 1em;
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.base};
    &:hover {
      color: white;
    }
  }
`

const activeLinkStyle = {
  color: 'white',
}

const Menu = ({ data }) => {
  const allpages = data.map(e => (
    <li key={e.id}>
      <Link to={'/' + e.slug} activeStyle={activeLinkStyle}>
        {e.title}
      </Link>
    </li>
  ))
  return (
    <Header>
      <Nav>
        <Link to="/" style={{ justifyContent: 'center', marginBottom: '30px' }}>
          <img src="/logos/pif.png" style={{ width: '300px' }} />
        </Link>
        <ul>
          {allpages}
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>
              Contact
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
