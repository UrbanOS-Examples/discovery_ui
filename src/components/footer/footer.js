import './footer.scss'

const Footer = props => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="background-div">
          <div className="footerLeft">
            <h2>SITEMAP</h2>
            <ul>
              <li><a href="https://www.dev-smartos.com/data"> Data</a > </li>
              <li><a href="https://www.dev-smartos.com/about/the-power-of-data">The Power of Data</a> </li>
              <li><a href="https://www.dev-smartos.com/analytics">Analytics</a> </li>
              <li><a href="https://www.dev-smartos.com/about/about-smart-columbus">About</a> </li>
              <li><a href="https://www.dev-smartos.com/data-stories">Impact Stories</a> </li>
              <li><a href="https://www.dev-smartos.com/contact-us">Contact Us</a> </li>
            </ul>
          </div>
          <div className="footerRight">< img src="https://www.dev-smartos.com/images/Assets/Footer-SmartStart.png" /></div>
        </div >
        <div className="copyright">Smart Columbus Copyright ©2019. All rights reserved.</div>
      </div >
    </footer>
  )
}

export default Footer
