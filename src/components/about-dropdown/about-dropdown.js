import { Component } from 'react'
import './about-dropdown.scss'

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  aboutEnter() {
    this.setState({ expanded: true })
  }
  aboutExit() {
    this.setState({ expanded: false })
  }
  render() {
    return (
      <about-dropdown>
        <div className='about-dropdown nav-element no-bottom' onMouseEnter={e => { this.aboutEnter() }} onMouseLeave={e => { this.aboutExit() }}>
          <div>ABOUT</div>
          {this.state.expanded &&
            <div className='about-contents'>
              <div className='white-border-hack'></div>
              <ul>
                <li><a href="https://www.dev-smartos.com/index.php/about/the-power-of-data">The Power of Data</a></li>
                <li><a href="https://www.dev-smartos.com/index.php/about/how-to-use-this-site">How to Use This Site</a></li>
                <li><a href="https://www.dev-smartos.com/index.php/about/privacy-policy">Privacy Policy</a></li>
                <li><a href="https://www.dev-smartos.com/index.php/about/about-smart-columbus">About Smart Columbus</a></li>
              </ul>
            </div>
          }
        </div>
      </about-dropdown>
    )
  }
}
