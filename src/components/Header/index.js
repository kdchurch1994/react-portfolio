import React from 'react'; //import the use of the react 
import Nav from '../Nav'; //imports the Nav component

function Header(props) { //function that creates the Header component
    const { currentLink, setCurrentLink } = props; //const that will be used to create the links to the various options in the Navbar that is located in the header
        
    return (
        <header className="bg-primary">
            <div>
                <Nav
                    currentLink={currentLink}
                    setCurrentLink={setCurrentLink}
                ></Nav>
            </div>
        </header>
    );
}

export default Header; //exports the Header Component