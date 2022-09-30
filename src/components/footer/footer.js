import './footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className='footer-wrapper'>
        <ul>
          <li>© 2021 UrbanOS. All rights reserved.</li>
          <li><a href='/' target='_blank'> Privacy</a> </li>
          <li><a href='/' target='_blank'> Terms of Use</a> </li>
          <li><a href='/' target='_blank'> Cookie preferences</a> </li>
        </ul>
        <ul>
          <li className='powered-by'>Powered by UrbanOS</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
