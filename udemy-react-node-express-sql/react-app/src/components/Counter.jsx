import React, { Component, useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);
    const [imgUrl, setImgUrl] = useState('https://picsum.photos/200');
    
    const countHandler = () => {
        setCount(count + 1);
        setImgUrl();
    }

  return (
    <div>
      <h1>Counter Component</h1>
      <img src={imgUrl} alt="" />
      <span>{count}</span>
      <button onClick={countHandler}>Increment</button>
    </div>
  );
};

export default Counter;
