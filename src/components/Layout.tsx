import React, { ReactNode } from "react";
import Header from "./Header";
import Navibar from "./Home/Navibar";
export type ChildrenProps = {
  children: ReactNode;
};
const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="">
      <Header />
      <Navibar />
      {children}
    </div>
  );
};

export default Layout;
