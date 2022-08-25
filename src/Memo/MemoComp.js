import React from "react";

const MemoComp = ({ name }) => {
  console.log("-------- Rendering Memo Component ------------");
  return <h1>{name}</h1>;
};

export default React.memo(MemoComp);
