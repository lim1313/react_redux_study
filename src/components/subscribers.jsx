import React from "react";
import { connect } from "react-redux";
import { addSubscirber } from "../redux/index";

const Subscribers = ({ count, addSubscirber }) => {
  return (
    <div className="items">
      <h2>구독자 수 : {count}</h2>
      <button onClick={() => addSubscirber()}>구독하기!</button>
    </div>
  );
};

//--> subscrbiers의 props로 전달
const mapStateToProps = ({ subscribers }) => {
  return {
    count: subscribers.count,
  };
};

// action을 reducer 함수에게 보내는 역할을 가진 dispatch를 props로 전달
const mapDispatchToProp = dispatch => {
  return {
    addSubscirber: () => dispatch(addSubscirber()),
  };
};

// const mapDispatchToProp = {
//   addSubscirber,
// };

// 각 컴포넌트들이 state를 이용하기 앞서서 store를 이용하기 위해서는 컴포넌트들을 store에 연결(connect)시켜야 한다
export default connect(mapStateToProps, mapDispatchToProp)(Subscribers);
