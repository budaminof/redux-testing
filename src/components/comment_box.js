import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
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
    this.props.saveCommnet(this.state.comment);
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

// by passing an object as a second arg, instead of mapDispatchToProps
// redux is going to bind all of our actions to CommentBox container
export default connect(null, actions)(CommentBox);
