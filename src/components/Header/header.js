import React, { useState } from "react";
import Navigation from "./components/Navbar/Navbar.js";
import Work from "./components/work/work";
import Contact from "./components/contact/contact";
import AboutMe from "./components/about/about";

function Portfolio() {
  // state of current page
  const [currentPage, handlePageChange] = useState("AboutMe");

  const renderPage = () => {
    // switch statement that will return the appropriate component of the 'currentPage'
    switch (currentPage) {
      case "AbooutMe":
        return <AboutMe></AboutMe>;
      case "contact":
        return <Contact></Contact>;
      case "portfolio":
        return <Work></Work>;
      // case "resume":
      // return <Resume></Resume>
      default:
        return <About></About>;
    }
  };

  return (
    <div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <div>
        {
          // Render the component returned by 'renderPage()'
          renderPage()
        }
      </div>
    </div>
  );
}

export default Portfolio;
