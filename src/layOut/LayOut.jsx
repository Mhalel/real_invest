import { useLocation } from "react-router-dom";
import Header from "./Header";
import HeaderV2 from "./HeaderV2";

const LayOut = ({ children }) => {
  const location = useLocation();

  // Check if the current path is "/landing-page"
  const hideHeader = location.pathname === "/landing-page";

  return (
    <>
      {!hideHeader && (
        <>
          {/* <Header /> */}
          <HeaderV2 />
        </>
      )}
      <main className="">{children}</main>
    </>
  );
};

export default LayOut;
