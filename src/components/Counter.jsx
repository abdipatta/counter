import { useState } from "react";
import styled from "styled-components";

const Counter = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    if (count === 0) {
      alert("nelzia minusovat!");
    } else {
      setCount(count - 1);
    }
  };
  return (
    <StyledDiv>
      <button className="IncrementBtn" onClick={Increment}>
        Increment
      </button>
      <h1>{count}</h1>
      <button className="DecrementBtn" onClick={Decrement}>
        Decrement
      </button>
    </StyledDiv>
  );
};

export default Counter;

const StyledDiv = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .IncrementBtn {
    padding: 10px 20px;
    font-size: 1.2em;
    font-weight: bold;
    color: #fff;
    background-color: #4caf50;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #45a049;
    }
  }

  .DecrementBtn {
    padding: 10px 20px;
    font-size: 1.2em;
    font-weight: bold;
    color: #fff;
    background-color: #ff5733;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #e6451f;
    }
  }
`;
