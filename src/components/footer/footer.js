import './footer.scss'

const Footer = () => {

  const links = JSON.parse(window.FOOTER_LINKS),
    renderLink = ({ url, linkText }) => <a key={linkText} className="link" href={url}> {linkText}</a>;

  return (
    <footer>
      <div className='footer-wrapper'>
        <ul>
          <li key='left' className='left-side-text'>{window.FOOTER_LEFT_SIDE_TEXT}</li>
        </ul>
        <ul key='right' className='links'>
          {links.map(renderLink)}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
