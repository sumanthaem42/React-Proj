import React from "react";

const AnchorLink = ({ href, anchorContent }) => {

  const handleClick = (event) => {
    event.preventDefault();
    const targetId = href.substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const headerHeight = document.querySelector('.header-nav').offsetHeight;
      const targetOffset = targetSection.offsetTop - headerHeight;
      window.scrollTo({
        top: targetOffset,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="anchor-link">
      <a href={href} onClick={handleClick}>{anchorContent}</a>
    </div>
  );
}

export default AnchorLink;
