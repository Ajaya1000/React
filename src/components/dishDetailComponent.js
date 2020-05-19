import React, { Component } from 'react';
import {Card, CardHeader, CardBody,CardImg,CardTitle,CardText, Row, ListGroup, ListGroupItem, Badge} from "reactstrap";

class dishDetail extends Component{

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    renderComments(){
        const comms=this.props.dish.comments.map((comm)=>{
            return(
                <ListGroupItem key={comm.id}>
                    <ul>
                        <li className="author">{comm.author} <Badge color="danger" pill>{comm.rating}*</Badge>&nbsp;&nbsp;&nbsp;&nbsp; Date.parse({comm.date})</li>
                        <li>{comm.comment}</li>
                    </ul>
                </ListGroupItem>

            );
        });
        return (
            <div className="col-10 col-md-5 mt-5">
                <Card>
                    <CardHeader tag="h4">
                       Comments
                    </CardHeader>
                    <CardBody>
                        <ListGroup variant="flush">
                            {comms}
                        </ListGroup>
                    </CardBody>
                </Card>
            </div>
        );   
    }
    renderDish() {
            return (
                <div className="col-10 col-md-5 mt-5">
                    <Card>
                        <CardImg width="100%" object src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
    
    }
    render(){
        if (this.props.dish != null) {
                const dishI=this.renderDish();
                const dishC=this.renderComments();
            return(
                <Row>
                    {dishI};
                    {dishC};
                </Row>      
            );
        }
        else {
            return (
                <div>

                </div>
            );
        }
    }
}
export default dishDetail;