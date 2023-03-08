import React, { FC, ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const Body: FC<Props> = ({ children }) => {
  return (
    <>
      <body>{children}</body>
    </>
  );
};
export default Body;
