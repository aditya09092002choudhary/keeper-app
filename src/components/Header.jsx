import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';
import './header.css';

function Header() {
  return (
    <header>
      <h1>
        <span><HighlightIcon fontSize="3rem" /></span>
        Keeper
      </h1>
    </header>
  );
}

export default Header;
