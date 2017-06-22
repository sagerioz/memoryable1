import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'

class TrashScrapbookItem extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (props) => {
      props.preventDefault()
      console.log("PROPS from trash", props);
        fetch(`/api/scrapbook/${this.props.id}`, {
          method: 'DELETE'
        }).then(() => {
          window.location.href = '/scrapbook'
        })
  }

  render() {
    return (
      <Nav>
        <NavItem onClick={this.handleClick} className="sideFont"><span className="glyphicon glyphicon-trash" aria-hidden="true"></span></NavItem>
      </Nav>
    )
  }
}

export default TrashScrapbookItem
