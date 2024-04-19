import { ReactNode } from "react";
import SideBar from "../components/SideBar";

const MainContainer = ({
  children,
  show,
}: {
  children: ReactNode;
  show: boolean;
}) => {
  return (
    <div className="h-[100vh] w-[100%] bg-black flex">
      <SideBar show={show} />
      <div className="w-[100%] lg:pl-[4rem] relative">{children}</div>
    </div>
  );
};

export default MainContainer;
