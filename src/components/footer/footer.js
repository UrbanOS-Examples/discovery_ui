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
            <li><a href={`https://www.smartcolumbusos.com/images/2020/PDF/Data-Privacy-Plan.pdf`} target="_blank"> Data Privacy Plan</a > </li>
            <li><a href={`https://${window.BASE_URL}/about/the-power-of-data`}>The Power of Data</a> </li>
            <li><a href={`https://data.smartcolumbusos.com/api/v1/data_json`}>Data Inventory</a> </li>
            <li><a href={`https://www.smartcolumbusos.com/images/2020/PDF/SCC-E-DataManagementPlan-Update-v1.pdf`} target="_blank"> Data Management Plan</a > </li>
            <li><a href={`https://${window.BASE_URL}/data-stories`}>Impact Stories</a> </li> 
            <li><a href={`https://data.smartcolumbusos.com/tableau/connector.html`}>Tableau Web Connector</a> </li>
            <li><a href={`https://www.smartcolumbusos.com/images/Assets/SCC_De-Identification_Policy_20190917_update.pdf`} target="_blank"> De-Identification Policy</a > </li>
            <li><a href={`https://${window.BASE_URL}/contact-us`}>Contact Us</a> </li>
            <li><a href={`https://${window.BASE_URL}/about/terms-of-use`}>Terms of Use</a> </li>
            <li><a href={`https://${window.BASE_URL}/about/privacy-policy`}>Privacy Policy</a> </li>
            </ul>
          </div>
          <div className="footerRight">< img src={smartStart} /></div>
        </div >
        <div className="copyright"> © 2020 Smart Columbus Operating System. All rights reserved.</div>
      </div >
    </footer>
  )
}

export default Footer
