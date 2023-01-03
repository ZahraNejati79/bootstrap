import Nav from "../components/Nav";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Nav />
      <main className="h-5/6">{children}</main>
      <footer className="static bottom-0 border-t-2">this is footer</footer>
    </div>
  );
};

export default Layout;
