import React from "react";
import { connect } from "react-redux";
import { addView } from "../redux/index";

const Views = ({ count, addView }) => {
  return (
    <div className="items">
      <h2>조회 수 : {count}</h2>
      <button onClick={() => addView()}>조회하기!</button>
    </div>
  );
};

//--> subscrbiers의 props로 전달
const mapStateToProps = ({ views }) => {
  return {
    count: views.count,
  };
};

// action을 reducer 함수에게 보내는 역할을 가진 dispatch를 props로 전달
const mapDispatchToProp = dispatch => {
  return {
    addView: () => dispatch(addView()),
  };
};

// const mapDispatchToProp = {
//   addSubscirber,
// };

// 각 컴포넌트들이 state를 이용하기 앞서서 store를 이용하기 위해서는 컴포넌트들을 store에 연결(connect)시켜야 한다
export default connect(mapStateToProps, mapDispatchToProp)(Views);
