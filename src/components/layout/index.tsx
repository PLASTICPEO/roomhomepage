import { ReactNode } from "react";
import CustomMenu from "../menu";
import Header from "../navigation";

const DefaultLayout: React.FC<{ children: ReactNode; isWhite?: boolean }> = ({
  children,
  isWhite = false,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header isWhite={isWhite} />
      <CustomMenu />
      <>{children}</>
    </div>
  );
};

export default DefaultLayout;
