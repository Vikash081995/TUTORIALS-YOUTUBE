import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
  cakes: cakeReducer,
  iceCream: iceCreamReducer
});

export default rootReducer;
