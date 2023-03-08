import React, { FC, ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const Wrapper: FC<Props> = ({ children }) => {
  return (
    <>
      <div>
        <div>{children}</div>
      </div>
    </>
  );
};
export default Wrapper;
