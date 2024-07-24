import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";
import { carItems } from "../initialValues/cartItems";

const initialState={
    carItems:carItems
}


export default function cartReducer(state=initialState,{type,payload}) {
    switch (type) {
        case ADD_TO_CART:
            let product=state.carItems.find((c)=>c.product.productId===payload.id);
            if (product) {
                product.quantity++;
                return{
                    ...state
                }
            } 
            else {
                return{
                    ...state,
                    carItems:[...state.carItems,{quantity:1,product:payload}],
                }
            }
            case REMOVE_FROM_CART:
                return{
                    ...state,
                    carItems:state.carItems.filter((c)=>c.product.productId!==payload.id),

                }
            
          
    
        default:
            return state;
    }
}