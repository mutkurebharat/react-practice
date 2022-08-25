const Inline = () => {
  const heading = {
    fontSize: "72px",
    color: "blue",
  };
  return (
    <div>
      <h1 className="error">Error From Inline Styling</h1>
      <h1 className="success">Success From Inline Styling</h1>
      {/* <h1 className={styles.success}>Success From Inline Styling</h1> */}
      <h1 style={heading}>Inline Styling</h1>
    </div>
  );
};

export default Inline;
