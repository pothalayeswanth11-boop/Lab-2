const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <h1>User Information Dashboard</h1>
      </header>
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;
