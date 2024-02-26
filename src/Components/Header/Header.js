import React from "react";
import AnchorLink from "../Content/AnchorLink";
import './smooth.scss'

const HeaderComponent = () => {
    return (
        <nav className="header-nav">
            <ul>
                <li>
                    <AnchorLink href="#section1" anchorContent={"Go to Section 1"} />
                </li>
                <li>
                    <AnchorLink href="#section2" anchorContent={"Go to Section 2"} />
                </li>
                <li>
                    <AnchorLink href="#section3" anchorContent={"Go to Section 3"} />
                </li>
            </ul>
        </nav>
    );
}

export default HeaderComponent;
