import React, { useState } from "react";
import { MdBook } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import Note from "./body/Note";

function Sidebar() {
    const [selectedOption, setSelectedOption] = useState('option1');

    const handleOptionClick = (option) => {
        if (selectedOption !== option) {
          setSelectedOption(option);
        }
    };

    return (
        <div className="sidebar">
        <div
          className={`option ${selectedOption === 'option1' ? 'highlighted' : ''} options`}
          onClick={() => handleOptionClick('option1')}
        >
          <MdBook scale={25} />
          <span>Items</span>
        </div>
        <div
          className={`option ${selectedOption === 'option2' ? 'highlighted' : ''} options`}
          onClick={() => handleOptionClick('option2') }
        >
          <MdDelete size={25} />
          <span>Bin</span>
        </div>
      </div>
    );
};

export default Sidebar;