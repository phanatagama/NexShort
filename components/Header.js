import React, { useState } from 'react';

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-3">
        <img className="h-14 w-auto sm:h-16" src="/vercel.svg" alt="logo" />
      </div>
    </>
  );
};

export default Header;