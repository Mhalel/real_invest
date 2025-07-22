import Header from "./Header";

const LayOut = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default LayOut;
