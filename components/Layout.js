import Header from '/Header';
import Footer from '/Footer';

const Layout = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;