import React,{Component} from 'react';
import { Card,CardImg,CardImgOverlay, CardTitle, } from "reactstrap";
import PropTypes from 'prop-types';
class Menu extends Component{

    constructor(props){
        super(props);
       console.log('menu Component constructor is invoked');
        console.log("this props are " + this.props);
     //  console.log("Menu props are " + super.dishes);
       console.log("this.props.dishes are " + this.props.dishes[2].name);
    }
    render(){
        console.log('menu Component Render is invoked');
        const menu=this.props.dishes.map((dish)=>{
            return(
                console.log("this is  " + this.props.onDishSelect),
                console.log("this.props.dishes are inside map " + this.props.dishes[dish.id].name),
                <div key={dish.id} className="col-10 col-md-5 mt-5">
                    
                    <Card onClick={() => this.props.onDishSelect(dish.id)}>
                        <CardImg width="100%" object src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row justify-content-center">
                        {menu}
                </div>
            </div>
        );
    }
}
export default Menu;