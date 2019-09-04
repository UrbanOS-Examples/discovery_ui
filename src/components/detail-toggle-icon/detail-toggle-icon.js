import './detail-toggle-icon.scss'
import { Component } from 'react'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

export default class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <detail-toggle-icon >
                <Icon className="collapse-icon">
                    {this.props.expanded ? <ExpandLess /> : <ExpandMore />}
                </Icon>
            </detail-toggle-icon>
        )
    }
}
