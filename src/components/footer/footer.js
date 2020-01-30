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
            <li><a href={`https://${window.BASE_URL}/about/about-smart-columbus`}>About Us</a> </li> 
            <li><a href={`https://${window.BASE_URL}/data`}> Explore Data</a > </li> 
            <li><a href={`https://d2rfd3nxvhnf29.cloudfront.net/2019-09/SCC-D-Data%20Privacy%20Plan-FINAL-20190906%5B1%5D_0.pdf`}> Data Privacy Plan</a > </li>
            <li><a href={`https://${window.BASE_URL}/about/the-power-of-data`}>The Power of Data</a> </li>
            <li><a href={`https://data.smartcolumbusos.com/api/v1/data_json`}>Data Inventory</a> </li>
            <li><a href={`https://d2rfd3nxvhnf29.cloudfront.net/2019-08/Smart%20Columbus%20Data%20Management%20Plan-%2020190822_0.pdf`}> Data Management Plan</a > </li>
            <li><a href={`https://${window.BASE_URL}/data-stories`}>Impact Stories</a> </li> 
            <li><a href={`https://data.smartcolumbusos.com/tableau/connector.html`}>Tableau Web Connector</a> </li>
            <li><a href={`https://${window.BASE_URL}/images/Assets/SCC_De-Identification_Policy_20190917_update.pdf`}> De-Identification Policy</a > </li>
            <li><a href={`https://${window.BASE_URL}/contact-us`}>Contact Us</a> </li>
            </ul>
          </div>
          <div className="footerRight">< img src={smartStart} /></div>
        </div >
        <div className="copyright">Smart Columbus Copyright ©2020. All rights reserved.</div>
      </div >
    </footer>
  )
}

export default Footer
