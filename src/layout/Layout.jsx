import Nav from "../components/Nav";

const Layout = ({ children }) => {
  return (
    <div className="h-screen">
      <Nav />
      <main className="h-5/6">{children}</main>
      <footer className="static bottom-0">this is footer</footer>
    </div>
  );
};

export default Layout;
