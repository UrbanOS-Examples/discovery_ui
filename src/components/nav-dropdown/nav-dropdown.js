import { Component } from 'react'
import './nav-dropdown.scss'

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
    const { title, items } = this.props.data;

    return (
      <nav-dropdown>
        <div className='nav-dropdown nav-element no-bottom' onMouseEnter={e => { this.aboutEnter() }} onMouseLeave={e => { this.aboutExit() }}>
          <div>{title}</div>
          {this.state.expanded &&
            <div className='dropdown-contents'>
              <div></div>
              <ul>
                {items.map(item => <li key={`${item.text}__${item.link}`} ><a href={item.link}>{item.text}</a></li>)}

              </ul>
            </div>
          }
        </div>
      </nav-dropdown>
    )
  }
}
