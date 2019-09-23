import './footer.scss'
import smartStart from '../../assets/footer-smart-start.png'

const Footer = props => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="background-div">
          <div className="footerLeft">
            <h2>SITEMAP</h2>
            <ul>
              <li><a href={`https://${window.BASE_URL}/data`}> Data</a > </li>
              <li><a href={`https://${window.BASE_URL}/about/the-power-of-data`}>The Power of Data</a> </li>
              <li><a href={`https://${window.BASE_URL}/analytics`}>Analytics</a> </li>
              <li><a href={`https://${window.BASE_URL}/about/about-smart-columbus`}>About</a> </li>
              <li><a href={`https://${window.BASE_URL}/data-stories`}>Impact Stories</a> </li>
              <li><a href={`https://${window.BASE_URL}/contact-us`}>Contact Us</a> </li>
            </ul>
          </div>
          <div className="footerRight">< img src={smartStart} /></div>
        </div >
        <div className="copyright">Smart Columbus Copyright ©2019. All rights reserved.</div>
      </div >
    </footer>
  )
}

export default Footer
