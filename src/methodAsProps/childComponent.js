const ChildComponent = (props) => {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
      <button onClick={() => props.greetHandler('Child Component')}>Greet Parent</button>
    </div>
  );
};

export default ChildComponent;
