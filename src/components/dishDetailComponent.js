import React from 'react';
import {Card, CardHeader, CardBody,CardImg,CardTitle,CardText, Row, ListGroup, ListGroupItem, Badge} from "reactstrap";


    function RenderComments({comments}){
        const comms=comments.map((comm)=>{
            return(
                <ListGroupItem key={comm.id}>
                    <ul>
                        <li className="author">{comm.author}
                         <Badge color="danger" pill>{comm.rating}*</Badge>
                         &nbsp;&nbsp;&nbsp;&nbsp; {new Intl.DateTimeFormat('en-US',{year:'numeric', month:'short',day:'2-digit'}).format(new Date(Date.parse(comm.date)))}</li>
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

    function  RenderDish({dish}) {
            return (
                <div className="col-10 col-md-5 mt-5">
                    <Card>
                        <CardImg width="100%" object src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
    
    }

    const DishDetail=({dish}) => {
        if (dish != null) {
            return(
                <Row>
                    <RenderDish dish={dish}/>
                    <RenderComments comments={dish.comments}/>
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
export default DishDetail;