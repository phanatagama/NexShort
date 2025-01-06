import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="m-4">
      <p className="text-center text-white text-sm font-bold">Built with ❤</p>
      <p className="text-center text-white text-sm font-bold">
        <a href="https://github.com/phanatagama" target="_blank" rel="noopener noreferrer">phanatagama</a> &copy; 2021 ~ {year}
      </p>
    </div>
  );
};

export default Footer;