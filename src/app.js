import ReactDiscoveryUI from '@smartcitiesdata/react-discovery-ui'
import { Component } from 'react'
import Header from './components/header'
import HomeBanner from './components/home-banner'
import Footer from './components/footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeBanner />
        <ReactDiscoveryUI />
        <Footer />
      </div >
    )
  }
}
