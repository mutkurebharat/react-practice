const FunctionClick = () => {
  const clickHandler = () => {
    console.log("Button Clicked");
  };
  return <button onClick={clickHandler}>Click</button>;
};

export default FunctionClick;
