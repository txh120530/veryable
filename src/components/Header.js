import React from 'react';

import { ReactComponent as GroupSVG } from '../assets/icons/group.svg';


const Header = () => {
    return (
    <header className="bg-white shadow-md h-16 text-lg flex items-center justify-center uppercase">
      <GroupSVG fill="#2081c3"  className="mr-2" />
      Users
    </header>
    );
};

Header.displayName = 'Header';

export default Header;
