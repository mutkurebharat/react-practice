import React from "react";
// const FrInput = () => {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   );
// };

const FrInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default FrInput;
