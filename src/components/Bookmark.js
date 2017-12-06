import React, { Component } from 'react';
import firebase from 'firebase/app';
import { Container, Row, Col } from 'reactstrap';

export default class Bookmark extends Component {
  //takes in BookMarkList prop
  constructor(props){
    super(props);
  }

  render() {
    let date = this.props.bookmark.Date;
    date = new Date( date );
    //todo: needs a handleDelete() callback to linkedlist on the FA icon
    return (
      <div>
      <Row>
         <Col>this.props.bookmark.Name</Col>
         <Col><a href={this.props.bookmark.URL}>{this.props.bookmark.URL}</a></Col>
         <Col>{date}</Col>
      </Row>
        <i class="fa fa-trash-o"></i>
      </div>
    );
  }
}
