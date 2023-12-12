import React from "react";
import { FiFeather } from 'react-icons/fi';
import { MdMenu } from 'react-icons/md';

const Header = () => {
  return (
    <header>
      <button color="#3D7068">
        <MdMenu size={35} />
      </button>
      <h1><FiFeather />NoteHive</h1>
    </header>
  );
}

export default Header;