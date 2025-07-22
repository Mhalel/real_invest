import Header from "./Header";

const LayOut = ({ children }) => {
  return (
    <>
      <Header />
      <main className="p-5">{children}</main>
    </>
  );
};

export default LayOut;
