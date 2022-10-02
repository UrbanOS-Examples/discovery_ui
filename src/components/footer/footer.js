import './footer.scss'

const Footer = () => {

  const links = JSON.parse(window.FOOTER_LINKS),
    renderLink = ({ url, linkText }) => <a class="link" href={url}> {linkText}</a>;

  return (
    <footer>
      <div className='footer-wrapper'>
        <ul>
          <li className='left-side-text'>{window.FOOTER_LEFT_SIDE_TEXT}</li>
        </ul>
        <ul className='links'>
          {links.map(renderLink)}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
