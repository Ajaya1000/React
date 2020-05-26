import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";

export const intialState={
    dishes: DISHES,
    promotions: PROMOTIONS,
    leaders: LEADERS,
    comments: COMMENTS,
}
export const Reducer = (state = intialState, action)=>{
    return state;
}