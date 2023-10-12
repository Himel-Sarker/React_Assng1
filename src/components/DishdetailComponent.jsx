
import React, { Component } from 'react'

import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
  
class DishDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg top src={dish.comment} alt={dish.author} />
          <CardBody>
            <CardTitle>{dish.author}</CardTitle>
            <CardText>{dish.date}</CardText>
          </CardBody>
        </Card>
      );
    }
  } 

  renderComments(dish) {
    let comments = null;

    if (dish != null && dish.comments) {
      comments = dish.comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            {comment.author}, {new Date(comment.date).toDateString()}
          </p>
        </div>
      ));
    }

    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">{comments}</ul>
      </div>
    );
  }

  render() {
    const DishDetail = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1" key={dish.id}>
        <Card onClick={() => this.onDishSelect(dish)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{DishDetail}</div>
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.state.selectedDish)} {/* Render Dish Details */}
          {this.renderComments(this.state.selectedDish)} {/* Render Comments */}
        </div>
      </div>
    );
  }
}


export default DishDetail;
