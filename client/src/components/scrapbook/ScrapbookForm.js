import React, { Component } from 'react'
// import { createScrapbook } from '../../actions/scrapbookActions';
import TextFieldGroup from '../common/TextFieldGroup';



class ScrapbookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      errors: {},
      isLoading: false,
      id: localStorage.id
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    let userData = this.state
    console.log("USERDATA in CLIENT onSubmit", userData);
    console.log("state", this.state);
    console.log("LOOK FOR USER ID HERE", this.state);

    e.preventDefault();
    fetch('/api/scrapbook', {
      method: 'POST',
      body: JSON.stringify(userData),
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
  })
  window.location.href = '/scrapbook'
}

  render() {
      const { title, user_id, description, item_image, errors, isLoading } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h2>Create New Scrapbook Item</h2>

        <TextFieldGroup
          field="title"
          label="Title"
          name="title"
          value={title}
          onChange={this.onChange}
          error={errors.title}
        />

        <TextFieldGroup
          field="description"
          label="Description"
          name="description"
          value={description}
          onChange={this.onChange}
          error={errors.title}
        />

        <TextFieldGroup
          field="item_image"
          label="Item Image url"
          name="item_image"
          value={item_image}
          onChange={this.onChange}
          error={errors.title}
        />
        <button type="submit" className="button-logo-2">Create</button>
      </form>
    );
  }
}


export default ScrapbookForm
