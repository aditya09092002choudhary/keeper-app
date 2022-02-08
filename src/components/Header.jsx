import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';

function Header() {
  return (
    <header>
      <h1>
        <span className="highlight"><HighlightIcon /></span>
        Keeper
      </h1>
    </header>
  );
}

export default Header;
