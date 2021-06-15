import { combineReducers } from "redux";
import subscribersReducer from "./subscribers/reducer";
import viewReducer from "./views/reducer";

// 여러개의 reducer가 존재할 때 combineReducer를 통해 통합하여 사용

const rootReducer = combineReducers({
  subscribers: subscribersReducer,
  views: viewReducer,
});

export default rootReducer;
