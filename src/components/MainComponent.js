import React, { Component } from 'react';
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from './FooterComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectDish:null,
            // onDishSelect : function(dishId) {
            //     this.selectDish=dishId ;
            // }
        };
       // this.onDishSelect=this.onDishSelect.bind(this);
    }
    onDishSelect=(dishId)=>{
        this.setState({ selectDish: dishId });
    }
    
    render() {
        console.log("Main is rendered");
        console.log(typeof this.onDishSelect);
        return (
            <div >
                <Header/>
                <Menu dishes={this.props.dishes} onClick={this.onDishSelect} />
            
                <DishDetail dish={this.props.dishes.filter((dish)=>dish.id===this.state.selectDish)[0]} />
                <Footer/>
            </div>
        );
    }
}

export default Main;
