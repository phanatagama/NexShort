import Header from 'components/Header';
import Footer from 'components/Footer';

const Layout = ({className, children }) => {
  return (
    <div className={`${className} max-w-7xl mx-auto px-4 sm:px-6`}>
      <Header />
      {children}
      {/* give spacer so footer i will be fixed in the bottom  */}
      <div className='my-auto'></div>
      <Footer />
    </div>
  );
};

export default Layout;