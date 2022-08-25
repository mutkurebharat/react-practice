import React from "react";

const Columns = () => {
  const items = [];
  return (
    <React.Fragment>
      {/* {items.map((item) => (
        <React.Fragment key={item.id}>
          <h1>Title</h1>
          <h1>{item.title}</h1>
        </React.Fragment>
      ))} */}
      <td>Name</td>
      <td>Bharat</td>
    </React.Fragment>
  );
};

export default Columns;
