import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props){
    super(props);
}

renderDish(dish){
    if( dish != null) {
        return (
            <Card>
                <CardImg width = "100%" src={dish.image} alt = {dish.name}></CardImg>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }
    else {
        return (
            <div></div>
        );
    }
}

renderAllComments(dish){

    if( dish != null) {
        const mine = dish.comments.map((comment) =>{
            return (
                <div key = {comment.id}>
                    <div>
                        <p>{comment.comment}</p>
                        <p>--{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </div>
                </div>
            );
        } );

        return (
            <div>
                <h4>Comments</h4>
                <div className = "list-unstyled">{mine}</div>
            </div>
        )
    }
    else {
        return (
            <div></div>
        );
    }
}

render(){
    return(
        <div className = "container">
            <div className = "row">
                <div className = "col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className = "col-12 col-md-5 m-1">
                    {this.renderAllComments(this.props.dish)}
                </div>
            </div>
        </div>
    );
}
}

export default DishDetail;