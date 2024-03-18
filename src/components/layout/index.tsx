import { ReactNode } from "react";
import CustomMenu from "../menu";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow ">
        <CustomMenu />
        <>{children}</>
      </div>
    </div>
  );
};

export default DefaultLayout;
