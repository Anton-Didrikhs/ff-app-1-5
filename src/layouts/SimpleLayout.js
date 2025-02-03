import React from "react";

function SimpleLayout({ children }) {
    return (
      <div>
        <nav>
          <ul>
            //Simple layout//
          </ul>
        </nav>
        <div>{children}</div>
      </div>
    );
  }

export default SimpleLayout;