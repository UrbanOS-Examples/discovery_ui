import './header.scss'
import { Component } from 'react'
import AboutDropdown from '../about-dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const scrollThreshold = 62
export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    this.setState({
      collapsed: window.scrollY > scrollThreshold
    });
  }

  infoRow() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td className='title'>
                <div className="slogan"><a href="https://smart.columbus.gov/"><h2>Smart Columbus</h2></a></div>
              </td>
              <td className='social'>
                <div >
                  <a href="https://www.facebook.com/SmartCbus/"><FontAwesomeIcon icon={faFacebookF} size="1x" /></a>
                  <a href="https://twitter.com/smartcbus"><FontAwesomeIcon icon={faTwitter} size="1x" /></a>
                  <a href="https://www.linkedin.com/company/smartcbus/"><FontAwesomeIcon icon={faLinkedinIn} size="1x" /></a>
                </div>
              </td>
              <td className='right'>
                <div >
                  <a href="https://www.columbus.gov/"> <img src="https://www.dev-smartos.com/images/headers/COC_Logo_Grayscale.png" height="40"></img></a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  navBar() {
    return (
      <div className={`nav-wrapper ${this.state.collapsed ? 'pinned' : ''}`}>
        <a className='nav-element' href="https://www.dev-smartos.com/index.php/data">DATA</a>
        <a className='nav-element' href="https://www.dev-smartos.com/index.php/data-stories">IMPACT</a>
        <AboutDropdown />
        <a className='nav-element' href="https://www.dev-smartos.com/index.php/share-your-data">GET INVOLVED</a>
        <a className='nav-element' href="https://www.dev-smartos.com/index.php/contact-us">CONNECT</a>
      </div>
    )
  }

  render() {
    return (
      <header>
        <div className={`logo ${this.state.collapsed ? 'scale-down' : 'rescale'}`}>
          <a href="https://www.dev-smartos.com/"> <img src="https://www.smartcolumbusos.com/templates/pocsmart/images/logo.png" height='140'></img></a>
        </div>
        <div className="wrapper">
          {this.infoRow()}
          {this.navBar()}
        </div>
      </header>
    )
  }

}
