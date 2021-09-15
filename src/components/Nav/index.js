import React from 'react'; //imports the use of react

function Nav(props) { //function that creates the Nav component
    const { currentLink, setCurrentLink } = props; //const that will be used to create the links to the various options in the Navbar

    return (
        <nav>
            <ul>
                <li className={currentLink === "about" ? "mx-2 navActive": "mx-2"}>
                    <span onClick={() => setCurrentLink('about')}>About Me</span>
                </li>
                <li className={currentLink === "portfolio" ? "mx-2 navActive": "mx-2"}>
                    <span onClick={() => setCurrentLink('portfolio')}>Portfolio</span>
                </li>
                <li className={currentLink === "contact" ? "mx-2 navActive": "mx-2"}>
                    <span onClick={() => setCurrentLink('contact')}>Contact Me</span>
                </li>
                <li className={currentLink === "resume" ? "mx-2 navActive": "mx-2"}>
                    <span onClick={() => setCurrentLink('resume')}>resume</span>
                </li>
            </ul>
        </nav>
    );   
}

export default Nav;