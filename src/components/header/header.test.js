import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from './header'
import expect from 'expect'

describe('Header', () => {
  window.BASE_URL = 'testBaseUrl'
  window.LOGO_URL = 'testLogoSrc'

  test('contains clickable logo', () => {
    render(<Header />)

    const headerLogo = screen.getByAltText('header-logo')

    expect(headerLogo.closest('a')).toHaveAttribute('href', 'testBaseUrl')
    expect(headerLogo).toHaveAttribute('src', 'testLogoSrc')
  })

  test('contains explore link', () => {
    render(<Header />)

    const exploreLink = screen.getByText('EXPLORE DATA')
    expect(exploreLink).toHaveAttribute('href', '/')
  })

  test('contains about link', () => {
    render(<Header />)

    const aboutLink = screen.getByText('ABOUT URBAN OS')

    expect(aboutLink).toHaveAttribute('href', '/')
  })
})
