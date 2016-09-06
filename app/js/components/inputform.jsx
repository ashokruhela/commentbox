import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Form, ControlLabel, FormControl, FormGroup, InputGroup, Col, Button, Row} from 'react-bootstrap';
import {Navigation} from 'react-router';

class InputForm extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);

  }

  bindMethod(...methods) {
    methods.forEact(function(method) {
      this.methods[method] = this.methods[method].bind(this);
    })
  }

  onSubmit(e) {
    e.preventDefault();
    let authorNameRef = ReactDOM.findDOMNode(this.refs.inputAuthorName);
    let authorCommentRef = ReactDOM.findDOMNode(this.refs.inputComments);

    console.log(authorNameRef.value);
    console.log(authorCommentRef.value);
  }

  onCancel(e) {
    e.preventDefault();
    this.context.router.push('/editcomment');
  }
  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="authorInput">
          <Col componentClass={ControlLabel} sm={2}>Author</Col>
          <Col sm={5}>
            <FormControl type="text" placeholder="Author name" ref="inputAuthorName"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="commentInput">
          <Col componentClass={ControlLabel} sm={2}>Comments</Col>
          <Col sm={5}>
            <FormControl type="text" placeholder="Enter comments" ref="inputComments"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="submitInput">
          <Row>
            <Col smOffset={2} sm={1}>
              <Button type="submit" onClick={this.onSubmit}>
                Save
              </Button>
            </Col>
            <Col sm={1}>
              <Button type="submit" onClick={this.onCancel}>
                Cancel
              </Button>
            </Col>
          </Row>


        </FormGroup>
      </Form>
    );
  }
}
InputForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default InputForm;
