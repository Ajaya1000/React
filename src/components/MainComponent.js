import React, { Component } from 'react';
import Menu from "./MenuComponent";
import dishDetail from "./dishDetailComponent";


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
                <Menu dishes={this.props.dishes} onDishSelect={this.state.onDishSelect} />
            
                <dishDetail dish={this.props.dishes.filter((dish)=>dish.id===this.state.selectDish)[0]} />
            </div>
        );
    }
}

export default Main;
