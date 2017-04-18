import React, { Component } from 'react';

export default class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    }
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({ comment: ''})
  }


  render() {
    return (
      <form
        onSubmit={ this.onSubmit.bind(this) }
        className="col-md-4 comment-box">
        <textarea
          value={ this.state.comment }
          onChange={ this.handleChange.bind(this) }
          className="form-control"/>
        <br />
        <button
          action="submit"
          className="form-control btn btn-success">
          SUBMIT COMMENT
        </button>
      </form>
    )
  }
}
