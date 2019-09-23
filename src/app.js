import App from '@smartcitiesdata/react-discovery-ui'
import { Component } from 'react'

import Header from './components/header'
import HomeBanner from './components/home-banner'
import Footer from './components/footer'

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = { brandWrapperEnabled: false }

    window.toggleWrapper = () => {
      this.setState({ brandWrapperEnabled: !this.state.brandWrapperEnabled });
    }
  }

  render() {
    return (
      <div>
        {this.state.brandWrapperEnabled && <Header />}
        {this.state.brandWrapperEnabled && <HomeBanner />}
        <App />
        {this.state.brandWrapperEnabled && <Footer />}
      </div>
    )
  }
}
