import ReactDiscoveryUI from '@smartcitiesdata/react-discovery-ui'
import { Component } from 'react'
import Header from './components/header'
import Footer from './components/footer'

export default class App extends Component {
  render () {
    return (
      <div class="content">
        <Header />
        <ReactDiscoveryUI />
        <Footer />
      </div>
    )
  }
}
